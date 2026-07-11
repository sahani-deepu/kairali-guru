# Current UI Audit

## Overview
The existing project is a multilingual Next.js website with a locale-prefixed route structure. It uses custom components for header, footer, forms, and page layouts. The current homepage is structured but appears to use generic wellness styling and lacks strong Ayurvedic visual identity.

## Audit Summary

### Pages inspected
- /en
- /en/courses
- /en/courses/[slug]
- /en/about
- /en/enquiry
- /en/faq
- /en/gallery
- /en/learn
- /en/panchakarma
- /en/travel-visa
- /en/privacy
- /en/terms
- /en/testimonials
- /en/student-hub
- /en/locations
- /en/locations/kerala
- /en/locations/delhi

### Key observations
- The current hero and section structure use soft brand styling, but do not strongly communicate authentic Kerala Ayurveda.
- Layout includes editorial split sections, course cards, faculty preview, testimonials, and knowledge centre elements.
- The header includes a courses mega-menu, but it is not fully accessible and does not seem to have keyboard or focus handling.
- The mobile navigation component exists, but not yet inspected for behaviour.
- The student hub uses a hardcoded demo login with placeholder credentials.
- The enquiry form includes validation and a two-step interaction, but no real backend integration or submission endpoint.
- Translations are included with locale JSON files, but string coverage is unverified.
- The site uses custom fonts (Cormorant Garamond, Hanken Grotesk, Source Serif 4) without explicit RTL font support in the code.
- Current styles are defined by CSS utility classes, but the global colour tokens are not visible in the code yet.
- There is no explicit /404 or custom error page identified in the current route structure.

### Accessibility and UX issues
- The homepage hero overlay and text contrast need verification for WCAG AA.
- Buttons in some sections may not lead to fully implemented routes.
- The enquiry form appears to work on the client but does not implement actual data submission.
- The student portal exposes static credentials in client-side code.
- The courses page has language-specific titles, but page-level fallback and localization are partial.
- The header mega-menu is styled with CSS hover but not keyboard accessible.

### Missing or partially implemented features
- Search page and search suggestions not present.
- Course comparison tool is not found in current routes.
- Event calendar and event registration are missing.
- Student Hub has no secure authentication adapter or protected API.
- Chatbot, WhatsApp integration, exit-intent prompt, cookie consent manager, and preference centre are not found.
- Functional forms are present only for enquiry and login; other forms are missing.
- SEO and structured data are partially implemented only in layout and course pages.
- Multilingual content coverage is incomplete in some areas and may lack Arabic RTL support.
- No dedicated sitemap, resources, or legal page structure for downloads/policies beyond privacy & terms.

### Layout and design issues
- Current colour palette uses a warm/green aesthetic but not a distinct Kerala Ayurveda identity.
- The design is closer to a boutique wellness brand than a premium Ayurvedic education institution.
- Image alt text is present in some but not all components.
- Existing hero uses overlay and photography, but may not be optimized for responsive focal points.
- The homepage uses repeated generic sections and does not follow the requested phased homepage content structure precisely.

## Route-Specific Issues

### /en
- Hero present with CTA, but lacks explicit language selector, trust strip, and accessible mega-menu.
- Featured course cards exist, but there is no course comparison or save functionality.
- Several sections are implied but incomplete (international students, knowledge centre, FAQ).

### /en/courses
- Lists courses with pricing and links, but no filters, comparison, or full sitemap categories.
- Course detail pages exist, but only for seven slugs and with limited interactive functionality.
- Missing dedicated pages: admissions, academic calendar, scholarships, corporate training, workshops, online programs.

### /en/student-hub
- Login works only with hardcoded demo credentials and is not a protected route in production.
- There is no authentication adapter or noindex directive.
- Course dashboard and resources are stubbed with hardcoded data.

### /en/learn
- Knowledge Centre page exists, but the content structure is minimal and does not support article categories or herb pages.

### /en/gallery
- Gallery page exists but the depth and media categories are unknown without inspection.

### /en/locations
- Location pages exist, but may not fully support maps, directions, or experience-led content.

## Immediate audit takeaways
- The app is functional as a Next.js static/multi-page site, but many requested features are missing.
- The current visual identity requires a redesign to emphasize Kerala Ayurveda, institutional credibility, and premium education.
- The foundational page structure on the homepage can be extended and rewritten to match the requested sections.
- The current site already includes useful components and supports multilingual architecture, which is a strong base.

## Next steps
1. Build the feature-status matrix with current page capabilities.
2. Identify missing pages and create a route sitemap table.
3. Draft the redesign plan for the homepage and brand system.
4. Verify current homepage and mobile layout through the live app.
5. Prepare the initial home page preview content and new colour tokens.
