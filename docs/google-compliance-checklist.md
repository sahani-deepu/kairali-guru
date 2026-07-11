# Google Compliance Checklist

## Analytics and consent
- [ ] No Google Analytics or GTM injection before consent.
- [ ] Google Consent Mode v2 should initialize with denied storage by default.
- [ ] Analytics storage should be granted only after analytics consent.
- [ ] Ad storage, ad user data, and ad personalization should be denied by default.
- [ ] Marketing consent should gate Google ad-related storage and tags.
- [ ] Environment variables should provide `NEXT_PUBLIC_GTM_ID` and `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- [ ] Route changes should respect current consent state before sending page_view.
- [ ] Development mode should not send production analytics.
- [ ] No duplicate GA4 or GTM initialization.

## Search and crawlability
- [ ] Unique title and meta description for each page.
- [ ] One descriptive H1 per page.
- [ ] Clean locale-prefixed URLs.
- [ ] Canonical URLs supported per page.
- [ ] hreflang tags for all locales and `x-default` to English.
- [ ] `app/sitemap.ts` generates all crawlable routes.
- [ ] `robots.txt` exists and allows crawlable pages.
- [ ] Private or noindex pages are not blocked in robots.txt before they can be crawled.
- [ ] BreadcrumbList structured data is present only when breadcrumbs are visible.
- [ ] Organization/EducationalOrganization schema is present.
- [ ] Course schema / CourseInstance schema is present for course pages.
- [ ] Article schema is present for blog/article content.
- [ ] Event schema is present for event pages if implemented.
- [ ] Person schema is present for verified faculty pages.
- [ ] FAQ schema is only added when FAQ content is visible on the page.
- [ ] Open Graph metadata and image dimensions are provided.
- [ ] Social preview images are configured.
- [ ] `404` page exists.
- [ ] `noindex` is used for private and login pages.

## Current audit findings
- `src/app/sitemap.ts` exists and generates locale alternates, but lacks `x-default` and full route coverage.
- `src/app/[locale]/layout.tsx` has global metadata only; page-specific metadata is required for unique titles/descriptions.
- `robots.ts` is missing.
- Breadcrumb schema is implemented in `src/components/Breadcrumbs.tsx`.
- No explicit `noindex` implementation currently found.
- No Google consent or analytics script integration is present.
