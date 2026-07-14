import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getSupabaseServerClient } from "@/lib/auth";
import { isRateLimited } from "@/lib/rateLimit";
import * as z from "zod";

const enquirySchema = z.object({
  name: z
    .string()
    .min(2)
    .regex(/^[a-zA-Z\s\.]+$/),
  email: z.string().email(),
  country: z.string().min(2),
  programme: z.string().min(1),
  phone: z
    .string()
    .min(5)
    .regex(/^\+?[0-9\s\-]+$/),
  language: z.string().min(1),
  location: z.enum(["kerala", "delhi", "either"]),
  message: z.string().optional(),
});

function sanitizeString(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

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

  // Rate Limit: Max 3 enquiry submissions per 10 minutes per IP
  if (isRateLimited(`enquiry-${ip}`, 3, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes before submitting another inquiry." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    // Honeypot spam protection: silently ignore spam bot submissions
    if (body.website_url) {
      return NextResponse.json({ success: true });
    }

    const result = enquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed. Please verify all fields contain correct formats." },
        { status: 400 }
      );
    }

    const data = result.data;

    // Sanitize input fields to prevent Cross-Site Scripting (XSS)
    const sanitizedName = sanitizeString(data.name);
    const sanitizedEmail = sanitizeString(data.email);
    const sanitizedCountry = sanitizeString(data.country);
    const sanitizedProgramme = sanitizeString(data.programme);
    const sanitizedPhone = sanitizeString(data.phone);
    const sanitizedLanguage = sanitizeString(data.language);
    const sanitizedLocation = data.location;
    const sanitizedMessage = sanitizeString(data.message || "");

    const supabase = getSupabaseServerClient();
    const { error } = await supabase
      .from("enquiries")
      .insert([
        {
          name: sanitizedName,
          email: sanitizedEmail,
          country: sanitizedCountry,
          programme: sanitizedProgramme,
          phone: sanitizedPhone,
          language: sanitizedLanguage,
          location: sanitizedLocation,
          message: sanitizedMessage,
        }
      ]);

    if (error) {
      // Use clean error for logs and user
      return NextResponse.json(
        { error: "Failed to record enquiry. Please verify details." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
