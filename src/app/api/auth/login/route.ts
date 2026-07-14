import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getSupabaseServerClient, setSessionCookies } from "@/lib/auth";
import { isRateLimited } from "@/lib/rateLimit";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request: Request) {
  const reqHeaders = await headers();
  const ip = reqHeaders.get("x-forwarded-for") || reqHeaders.get("x-real-ip") || "127.0.0.1";
  const origin = reqHeaders.get("origin");
  const host = reqHeaders.get("host");

  // CSRF Protection: verify Origin hostname matches Host header
  if (origin) {
    try {
      const originUrl = new URL(origin);
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

  // Rate Limit: 5 attempts per 5 minutes per IP to block distributed attacks
  if (isRateLimited(`login-ip-${ip}`, 5, 5 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many login attempts. Please try again after 5 minutes." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid credentials format." },
        { status: 400 }
      );
    }

    const { email, password } = result.data;

    // Rate Limit: 5 attempts per 5 minutes per Account email to prevent brute-forcing a specific target
    if (isRateLimited(`login-email-${email}`, 5, 5 * 60 * 1000)) {
      return NextResponse.json(
        { error: "Too many login attempts for this account. Please try again after 5 minutes." },
        { status: 429 }
      );
    }

    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      // Return a generic error to prevent user enumeration
      return NextResponse.json(
        { error: "Invalid email or access password." },
        { status: 401 }
      );
    }

    // Set secure HTTP-only cookies
    await setSessionCookies(data.session);

    return NextResponse.json({
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected server error occurred during sign in." },
      { status: 500 }
    );
  }
}
