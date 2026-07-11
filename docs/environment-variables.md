# Environment Variables

## Recommended environment variables for this project

- `NEXT_PUBLIC_GTM_ID`
  - Google Tag Manager container ID.
  - Required for GTM integration when configured.
  - Must not be hard-coded in source.

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - Google Analytics 4 Measurement ID.
  - Required for GA4 integration when configured.
  - Should be present at build time.

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
  - Google site verification token.
  - Used in page metadata only.

- `NEXT_PUBLIC_META_PIXEL_ID`
  - Meta Pixel ID for marketing tracking.
  - Used only after marketing consent.

- `META_CONVERSIONS_API_TOKEN`
  - Server-side token for Meta Conversions API.
  - Must never be exposed to the browser.

- `META_TEST_EVENT_CODE`
  - Meta test event code for validation in staging.
  - Only used if Conversions API is configured.

- `NEXT_PUBLIC_ENABLE_MARKETING_TRACKING`
  - Boolean flag to disable marketing tracking during local development.
  - Default should be `false` in development.

- `CHATBOT_API_KEY`
  - Private API key for chatbot service.
  - Must be stored in server-side environment only.

- `CHATBOT_MODEL`
  - Model name to use for the chatbot integration.

- `CHATBOT_ENDPOINT`
  - Chatbot API endpoint for server-side proxy requests.

- `CHATBOT_RETENTION_DAYS`
  - Optional retention configuration for chatbot logs or transcripts.

## Current audit findings
- No environment variables for analytics, Google search, Meta Pixel, or chatbot are referenced in the current code.
- `package.json` and `next.config.ts` do not expose any env var handling beyond Next.js defaults.
- A proper `.env` or environment variable configuration file is not present in the repository.

## Notes
- `NEXT_PUBLIC_*` values are baked into the build and must be present before `npm run build`.
- Secret keys like `META_CONVERSIONS_API_TOKEN` and `CHATBOT_API_KEY` must never appear in version control.
- If additional analytics or consent providers are added, their required env variables should be documented here.
