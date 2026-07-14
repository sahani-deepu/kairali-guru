import { cookies } from "next/headers";
import { createClient, Session } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

// Initialize a clean, non-persisted client on the server side
export function getSupabaseServerClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function getServerSession() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("sb-access-token")?.value;
  const refreshToken = cookieStore.get("sb-refresh-token")?.value;

  if (!accessToken) {
    if (refreshToken) {
      // Access token is missing, but refresh token exists: try to refresh the session
      try {
        const supabase = getSupabaseServerClient();
        const { data, error } = await supabase.auth.refreshSession({ refresh_token: refreshToken });
        if (!error && data.session) {
          await setSessionCookies(data.session);
          return data.user;
        }
      } catch {
        // Fail silently
      }
    }
    return null;
  }

  // Verify the access token directly with Supabase auth server (highly secure JWT verification)
  const supabase = getSupabaseServerClient();
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);

  if (error || !user) {
    if (refreshToken) {
      // Access token expired, try to refresh
      try {
        const { data, error: refreshError } = await supabase.auth.refreshSession({ refresh_token: refreshToken });
        if (!refreshError && data.session) {
          await setSessionCookies(data.session);
          return data.user;
        }
      } catch {
        // Fail silently
      }
    }
    return null;
  }

  return user;
}

export async function setSessionCookies(session: Session) {
  const cookieStore = await cookies();

  // Set the access token cookie (valid for 1 hour typically)
  cookieStore.set("sb-access-token", session.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: session.expires_in || 3600,
    path: "/",
  });

  // Set the refresh token cookie (valid for 30 days)
  if (session.refresh_token) {
    cookieStore.set("sb-refresh-token", session.refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 30 * 24 * 3600, // 30 days
      path: "/",
    });
  }
}

export async function clearSessionCookies() {
  const cookieStore = await cookies();
  cookieStore.delete("sb-access-token");
  cookieStore.delete("sb-refresh-token");
}
