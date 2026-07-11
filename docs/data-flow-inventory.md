# Data Flow Inventory

## Personal data collection points
- Contact form fields in `src/components/EnquiryForm.tsx`
- Student Hub login form in `src/app/[locale]/student-hub/page.tsx`
- Language selection in `src/components/LanguageSwitcher.tsx` (not personal data)
- WhatsApp prefilled messages in `src/components/WhatsAppButton.tsx` (user-initiated external link)

## Storage locations
- `localStorage` key `kairali_consent` used by consent banner and analytics tracker.
- No `sessionStorage` usage detected in current inspected files.
- No cookies are set by application code in current implementation.

## Analytics and tracking flow
- `ConsentBanner.tsx` writes consent state to `localStorage`.
- `AnalyticsTracker.tsx` listens for `cookie_consent_accepted` and logs a pageview to the console.
- No analytics script is currently loaded from Google or other providers.

## Third-party integrations observed
- WhatsApp deep link to `wa.me/919289838797` from `WhatsAppButton.tsx`.
- Social links in `Footer.tsx` to Facebook, Instagram, YouTube, and LinkedIn.
- No Google, Meta, or other analytics/advertising scripts are currently present.

## Form endpoints
- Contact/Enquiry form submission is currently simulated in `src/components/EnquiryForm.tsx` with a client-side delay.
- No external API endpoint or server-side form submission handler identified in scanned code.

## Consent decision flow
- User is prompted by `ConsentBanner.tsx` only when `kairali_consent` is missing.
- Accept All sets `kairali_consent = accepted` and dispatches `cookie_consent_accepted`.
- Decline sets `kairali_consent = declined`.
- No consent categories or revocation workflow currently exist.

## Privacy risk notes
- The current site does not implement a complete cookie category system.
- There is no deletion or withdrawal workflow for the consent object beyond localStorage write.
- WhatsApp interaction is external; personal information entered by the user there is not controlled by the site.
