# Compliance Audit — Kairali Guru

## Scope
This audit evaluates the current codebase for technical implementation of:
- Analytics and measurement tools
- Consent and cookie management
- Chatbot transparency and privacy
- Privacy policy and consent documentation
- SEO and multilingual technical requirements
- Accessibility and security-related controls

## Audit status
- Code inspection only, no production changes implemented yet.
- Deployed local development server available on http://localhost:3001.

## Files inspected
- `package.json`
- `src/app/[locale]/layout.tsx`
- `src/middleware.ts`
- `src/components/ConsentBanner.tsx`
- `src/components/AnalyticsTracker.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/components/Footer.tsx`
- `src/components/LanguageSwitcher.tsx`
- `src/app/sitemap.ts`
- `src/app/[locale]/privacy/page.tsx`
- `src/app/[locale]/terms/page.tsx`
- `src/app/[locale]/student-hub/page.tsx`
- `src/components/EnquiryForm.tsx`
- `src/components/Header.tsx`

## General compliance observations
- The project uses Next.js 16 App Router with multilingual `next-intl` routing.
- Consent is currently implemented via `ConsentBanner.tsx` and stored in `localStorage` only.
- Analytics tracking is mocked and gated by a single `kairali_consent` value, not a consent category system.
- No Google Consent Mode or Tag Manager integration is present.
- There is no dedicated cookie preference center or persistent footer link for managing preferences.
- The privacy/cookie interface is not translated or consent-category aware.
- Chatbot functionality is not currently present in inspected code, beyond the WhatsApp button.
- There is no `robots.ts` file and XML sitemap is only generated from existing static routes in `src/app/sitemap.ts`.
- Page metadata is global and not fully localized beyond locale-prefixed routes.
- No policy drafts or legal-review placeholder text visible in the current privacy page.

## Specific issues found

### Consent and cookie management
- `ConsentBanner.tsx` uses localStorage directly and only distinguishes `accepted` vs `declined`.
- No fine-grained categories such as strictly necessary, functional, analytics, and marketing.
- No support for `Reject Non-Essential` or `Manage Preferences`.
- No consent versioning or timestamp is stored.
- No handling of cookie banner reappearance when consent policy changes.
- No visible consent preference button in the footer.
- No handling for cookie categories or optional script blocking beyond a single analytics event.

### Analytics and measurement
- `AnalyticsTracker.tsx` does not integrate with Google Analytics, Google Tag Manager, or any measurement script.
- It only logs a mock pageview to the console after `cookie_consent_accepted`.
- No environment-variable driven integration exists for analytics IDs.
- No Google Consent Mode v2 implementation is present.
- No route-change tracking respecting separate consent categories.
- No mechanism for preventing analytics script loading in development.

### Meta / advertising tracking
- No Meta Pixel or advertising script present.
- No `fbq` or `connect.facebook.net` references found.
- No marketing consent gating is implemented.
- No metadata on marketing event allowlisting or a dedicated Meta analytics layer.

### Chatbot transparency and privacy
- There is no chatbot component or server endpoint code in the current inspected files.
- No chatbot disclosure or privacy notice exists.
- WhatsApp integration exists but is separate from chatbot logic.
- No API or chatbot request handling is present.

### SEO and search requirements
- `src/app/sitemap.ts` generates alternate locale URLs but does not include `x-default` or full route coverage for all potential pages.
- No `robots.ts` exists, so site-level crawler rules are not configured through Next.js.
- Page metadata in `src/app/[locale]/layout.tsx` is global and may not be unique by page.
- Breadcrumb structured data exists in `Breadcrumbs.tsx` for visible breadcrumbs.
- No explicit `noindex` directives are implemented for private pages like `/student-hub`.
- No HTML sitemap page currently present.
- No explicit policy placeholders for external verification or schema audit found.

### Multilingual and accessibility issues
- Next-intl routing is properly set up and Arabic RTL direction is applied in `layout.tsx`.
- Language switcher uses the current path and locale replacement, which is good.
- Consent banner text is only in English currently.
- No explicit RTL handling in the consent or preference UI is present yet.
- Some components use localStorage and client-only behavior, which can delay consent state before initial render.

### Security and environment variables
- No environment-variable usage for analytics, Google verification, chatbot, or Meta Pixel was found in the inspected code.
- `package.json` does not include additional analytics or consent libraries.
- `next.config.ts` currently includes only redirects and next-intl plugin.
- No server-side API routes were found for chat or analytics in the inspected path.

## Next audit files to produce
- `docs/google-compliance-checklist.md`
- `docs/meta-compliance-checklist.md`
- `docs/chatbot-compliance-checklist.md`
- `docs/cookie-inventory.csv`
- `docs/tracker-inventory.csv`
- `docs/data-flow-inventory.md`
- `docs/environment-variables.md`

## High-level recommendation
The website requires a central consent-management system, explicit Google consent mode, and privacy-first analytics gating before production changes are made. Chatbot features must be audited separately once the implementation is located or created.
