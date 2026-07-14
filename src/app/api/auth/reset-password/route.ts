import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getSupabaseServerClient } from "@/lib/auth";
import { isRateLimited } from "@/lib/rateLimit";
import * as z from "zod";

const resetSchema = z.object({
  email: z.string().email("Invalid email format"),
  locale: z.string().optional().default("en"),
});

export async function POST(request: Request) {
  const reqHeaders = await headers();
  const ip = reqHeaders.get("x-forwarded-for") || reqHeaders.get("x-real-ip") || "127.0.0.1";
  const origin = reqHeaders.get("origin") || "https://kairali.guru";
  const host = reqHeaders.get("host");

  // CSRF Protection: verify Origin hostname matches Host header
  if (reqHeaders.get("origin")) {
    try {
      const originUrl = new URL(reqHeaders.get("origin")!);
      const hostName = host ? host.split(":")[0] : "";
      const originName = originUrl.hostname;
      if (originName !== hostName && originName !== "localhost" && !originName.endsWith(".vercel.app")) {
        return NextResponse.json(
          { error: "Forbidden: Cross-site request forgery block." },
          { status: 403 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Forbidden: Invalid request origin format." },
        { status: 403 }
      );
    }
  }

  // Rate Limit: Max 3 reset requests per hour per IP
  if (isRateLimited(`reset-ip-${ip}`, 3, 60 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many password reset requests. Please try again after an hour." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const result = resetSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const { email, locale } = result.data;

    // Rate Limit: Max 3 reset requests per hour per Email
    if (isRateLimited(`reset-email-${email}`, 3, 60 * 60 * 1000)) {
      return NextResponse.json(
        { error: "Too many requests for this account. Please try again later." },
        { status: 429 }
      );
    }

    const supabase = getSupabaseServerClient();
    const redirectTo = `${origin}/${locale}/student-hub`;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    if (error) {
      // Return success even on auth error to prevent email enumeration
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
