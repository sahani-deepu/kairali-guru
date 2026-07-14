// Simple in-memory rate limiter for serverless environment
// Maps keys (IP or Email) to attempts count and last attempt timestamp
const rateLimits = new Map<string, { count: number; lastAttempt: number }>();

export function isRateLimited(key: string, limit: number = 5, windowMs: number = 5 * 60 * 1000): boolean {
  const now = Date.now();
  const attempt = rateLimits.get(key);

  if (!attempt) {
    rateLimits.set(key, { count: 1, lastAttempt: now });
    return false;
  }

  // If the window has elapsed, reset the attempts count
  if (now - attempt.lastAttempt > windowMs) {
    rateLimits.set(key, { count: 1, lastAttempt: now });
    return false;
  }

  attempt.count += 1;
  attempt.lastAttempt = now;

  return attempt.count > limit;
}
