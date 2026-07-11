# Kairali Guru — Master Build Specification
### For Antigravity (AI build agent) · kairali.guru · **v2.0 · updated 2026-07-09** (Parts I–V)

> **What this document is.** A complete, buildable specification for rebuilding kairali.guru as a content-heavy, ultra-premium Ayurveda education website aimed at high-net-worth and international learners. It defines the tech stack, the design system, every global element, the on-page SEO/AEO rules applied to every page, per-page specifications, the full schema (structured-data) library, and the accessibility + EU/US/India compliance layer required in 2026. Build in the order given in §11. Do not skip §5 (it governs every page) or §8–§10 (legal/technical gates).

> **Companion document:** `kairali_guru_sitemap_and_seo_strategy.md` (the competitive strategy + keyword map + sitemap). This spec assumes that sitemap.

---

## 0. Project meta (constants — use verbatim)

| Field | Value |
|---|---|
| Domain | `https://kairali.guru` |
| Brand | Kairali Guru (Ayurveda training & certification arm of the Kairali Ayurvedic Group, est. 1908) |
| Public email | **info@kairali.com** (use everywhere — footer, schema, contact, forms) |
| Primary training venue | **Kairali – The Ayurvedic Healing Village, Kodumbu, Palakkad, Kerala** (65-acre NABH-accredited Ayurvedic hospital-village) |
| Training locations | **Two locations only: Kerala (primary — the healing village) and Delhi.** (The programme is delivered in Delhi and Kerala; earlier Gurgaon/Mumbai were sales offices, not training venues.) |
| Hosting | Self-hosted at Kairali Healing Village infrastructure (see §2 — build stack-agnostic to Vercel; Node server or static export behind their web server + Cloudflare CDN) |
| Languages | English (default) + German (de) + French (fr) — same i18n/hreflang model already used on ayurvedichealingvillage.com |
| Positioning | Authentic Kerala + globally accessible; premium, editorial, content-heavy; NOT wellness-tourism fluff |
| Framing note | kairali.guru is the **training entity** — it is *not* bound by KTAHV's GST-SCN clinical-only lock. Hospitality language is legally permitted here. **However, by choice, frame the school's own pedigree as clinical/authentic/hospital-grounded** (serious learners and AI engines reward rigour). Use "spa/wellness professional" only as an *audience* label, never to describe Kairali itself. Avoid "resort/luxury retreat" for our own campus; use "healing village / clinical training facility / teaching hospital." |

---

## 1. Audience & product thesis

**Who buys.** Two buyer types, one premium experience:
1. **International / HNI learner** (Europe DACH + France, NRI diaspora, global wellness-curious professionals): buys on *authenticity, lineage, transformation, and trust*. High willingness to pay. Wants an editorial, calm, boutique-grade experience and deep content before enquiring.
2. **Serious domestic professional** (yoga teachers, spa/wellness staff, doctors, career-changers via the Delhi centre): buys on *credential, hands-on training, placement/career outcome*.

**Product thesis (drives the whole design).** This is a **cultural platform, not a brochure** — essays, guides, faculty stories, and lineage sit beside course pages as one continuous story. Research on luxury/HNI web experiences is unambiguous: the interface is the first filter of credibility; the winning register is *"simplicity as sophistication"* — a **calm harbour** of whitespace, refined typography, quality imagery, and quiet confidence. Content depth builds trust *before* the enquiry; the enquiry then feels like curiosity fulfilled, not a sales funnel.

---

## 2. Tech stack & architecture

**Core stack (recommended):**
- **Framework:** Next.js 15 (App Router) + TypeScript. *(Rationale: best-in-class for content-heavy + SEO/AEO — static generation/ISR, per-route metadata, image optimization, RSC; the environment your team already knows; ideal for an AI build agent. If "tasty" referred to **TanStack Start**, that is an acceptable substitute with the same shadcn/Tailwind layer — but Next.js is the default recommendation.)*
- **UI components:** **shadcn/ui** (Radix primitives + Tailwind; copy-in, fully themeable). Initialise with `npx shadcn@latest init`, then add components per §3.7. Do **not** use a heavy component kit (MUI/Chakra) — it fights the custom premium look.
- **Styling:** Tailwind CSS with a custom theme (design tokens in §3). All colors/spacing/type via tokens — no hard-coded hex in components.
- **Content:** MDX or a headless source for the Learning Hub + course/faculty content so non-devs can edit. Two acceptable patterns: (a) MDX files in-repo (simplest, fast, version-controlled) or (b) a headless CMS (Sanity/Payload) if the team wants editing UI. **Recommend Payload or Sanity** given ongoing 2–4 articles/month.
- **Rendering:** Static generation (SSG) + ISR for content pages; pre-render everything crawlable. Ensure structured data is in the initial HTML (not injected only client-side) — Googlebot renders JS but initial-HTML schema is safest and fastest for AI crawlers.
- **Icons:** `lucide-react` (already your convention) + the custom botanical line set (§3.6).
- **Analytics:** **Cookieless, GDPR-compliant analytics — Plausible or Fathom** (your standing preference). This is a deliberate architectural choice: no analytics cookies dramatically shrinks the cookie-consent surface (§9). Avoid Google Analytics unless a specific need requires it (then it must run behind consent + Google Consent Mode v2).

**Hosting / deployment (self-hosted at Kairali Healing Village):**
- Build to a **Node server (standalone Next.js output)** running behind their reverse proxy (Nginx), **or** a **fully static export** if no server-side features are needed, served as static files. Either sits behind **Cloudflare** (CDN, image optimization, WAF, HTTPS, edge caching).
- **Force HTTPS** sitewide (HSTS). Automatic WebP/AVIF image conversion (Cloudflare or Next Image). HTTP/2 or HTTP/3.
- CI: deploy from Git; staging → production (one environment gate before go-live per your factory discipline).

**Performance targets (2026 Core Web Vitals — these are ranking + AI-crawl signals):**
- **LCP** ≤ 2.5s · **INP** ≤ 200ms (INP replaced FID; it is the current responsiveness metric) · **CLS** ≤ 0.1.
- Lighthouse ≥ 95 Performance / 100 SEO / 100 Best-Practices / ≥ 95 Accessibility on key templates.
- Ship minimal JS on content pages (RSC + islands). Lazy-load below-the-fold media. Preload hero font + hero image. No layout shift from fonts (use `font-display: swap` + size-adjust or self-host fonts).

---

## 3. Design system — "Kerala Materials" (premium, earthy, distinctive)

**Design intent.** Earthy and natural, as requested — but *deliberately not* the generic AI "earthy premium" cliché (warm-cream background + terracotta accent + high-contrast serif). That look is a recognisable tell. Instead the palette is grounded in Kerala's real materials: **laterite red soil, palm-forest green, turmeric/haldi, sandalwood, aged copper (Ayurvedic vessels), parchment/raw silk.** No blacks-and-gold. The result reads *authentic, botanical, clinical-warm, and expensive-through-restraint.*

Apply the **60-30-10 rule**: 60% calm neutral base, 30% deep botanical/earth structure, 10% spice/metallic accent.

### 3.1 Color tokens (define as CSS variables + Tailwind theme + shadcn theme)

| Token | Hex | Role | Usage |
|---|---|---|---|
| `--sand` (base 60%) | `#F4EFE3` | Sandalwood Parchment | Primary page background, light sections, cards |
| `--sand-2` | `#EAE2D2` | Raw Silk | Alternate light band, subtle fills, borders |
| `--palm` (structure 30%) | `#243027` | Deep Palm (near-black green) | **Replaces black** — dark sections, footer, headline-on-dark, primary button fill |
| `--palm-2` | `#33453A` | Forest | Dark-section gradients, hover on palm |
| `--bark` (ink) | `#2A2620` | Bark | Body text on light (warm near-black, never pure #000) |
| `--laterite` (earth) | `#8A4B34` | Laterite (Kerala red soil) | Secondary accent — section eyebrows, quiet emphasis, link text on light (AA-safe) |
| `--taupe` (muted) | `#6E6656` | Riverstone Taupe | Captions, meta, muted text, form hints |
| `--turmeric` (accent 10%) | `#B67818` | Turmeric | High-emphasis accents, CTA fills (with dark text), highlights, active states |
| `--turmeric-ink` | `#8A5A10` | Deep Turmeric | Turmeric used as **text/links on light** (AA-safe small-text version) |
| `--copper` (metallic) | `#9C6B3F` | Aged Copper | Hairlines, dividers, icon strokes, botanical line-art — sparingly |
| `--tulsi` (support) | `#4E6B4A` | Tulsi Green | Tags, "new"/nature highlights, secondary chips |
| `--paper-on-dark` | `#EFE9DC` | text on `--palm`/footer |

**Contrast rules (WCAG 2.2 AA — non-negotiable, see §8):**
- Body text must hit **≥ 4.5:1**; large text (≥ 24px or 18.66px bold) **≥ 3:1**. `--bark` on `--sand` and `--paper-on-dark` on `--palm` pass comfortably.
- `--turmeric` (#B67818) is **not** AA for small text on `--sand` — use it only as **button fill (with `--bark` or `--palm` text)** or large accents. For turmeric-colored small text/links, use `--turmeric-ink` (#8A5A10).
- Verify every text/background pair in a contrast checker before shipping. Never place body text on `--laterite` or `--turmeric` fills without checking.

**Button system (avoid all-caps "BUY NOW"; soft, confident CTAs):**
- **Primary:** `--palm` fill, `--paper-on-dark` text, subtle copper hairline on hover. (Calm, premium.)
- **High-emphasis (enquiry):** `--turmeric` fill, `--bark` text.
- **Secondary/ghost:** transparent, `--bark` text, `--copper` 1px border.
- Sentence case, verb-led ("Explore the programmes", "Request the prospectus", "Speak to a physician"). Same label persists through the flow.

### 3.2 Typography

Deliberately not the Didot/Bodoni/Canela luxury-fashion default nor the ubiquitous Inter. Chosen for warmth, editorial authority, and long-form legibility (this is a content-heavy site). All open-source (self-host for performance + licensing safety); premium licensed alternatives noted.

- **Display / headings — `Fraunces`** (variable serif; use optical-size + soft/wonk axes for a crafted, botanical feel). Used with restraint at large sizes. *Licensed alt: Canela or Ogg.*
- **UI / body sans — `Hanken Grotesk`** (warm humanist grotesque; nav, buttons, labels, short body). *Licensed alt: Söhne / Neue Haas Grotesk.*
- **Long-form article body — `Source Serif 4`** (screen-legible serif for the Learning Hub + editorial reading). *Alt: Newsreader (has expressive italics for pull-quotes).*

**Type scale (modular ≈1.25; rem):**
`Display XL` 4.0 / `Display L` 3.0 / `H1` 2.4 / `H2` 1.8 / `H3` 1.4 / `H4` 1.15 / `Body` 1.0 (18px base) / `Small` 0.875 / `Caption` 0.78.
- Body line-height 1.6–1.7; article measure 60–72ch. Headline line-height 1.05–1.15, slightly tightened tracking on display sizes.
- Self-host fonts (`font-display: swap`, preload display + body); avoid CLS.

### 3.3 Layout, grid & spacing
- **Generous whitespace is the core premium signal** — wide margins, air around headlines, calm scroll rhythm. Content sits in a **max-width ~1200px** shell; article content **~720px**; full-bleed only for hero media and dark bands.
- 12-column responsive grid; 8px spacing base (4/8/12/16/24/32/48/64/96/128). Sections breathe (≥ 96px vertical rhythm on desktop between major bands).
- Alternate light (`--sand`) and deep (`--palm`) bands to structure long pages; never more than 2–3 colors visible at once.
- **Mobile is the brand for most users** — design mobile *first and fully*, not as a shrunk desktop. Premium must survive at 380px: large tap targets (min 44–48px; WCAG 2.2 target-size ≥ 24px is the floor), simplified nav (sheet), stacked editorial rhythm.

### 3.4 Imagery & art direction
- **Cinematic, high-resolution photography** (min 2000px longest edge; no compression artifacts). Kerala materiality: the healing village architecture (Laurie-Baker-style laterite/brick), physicians and students in real clinical/practical settings, medicinal garden, hands-on therapy training, copper vessels, herbs. **Real, warm, human** — not stock "spa candles."
- **Full-bleed hero video** on Home + Kerala pages (cinematic, slow, ambient — the village, garden, backwaters); provide a static poster + `prefers-reduced-motion` fallback; muted, no autoplay audio.
- Subtle **texture/grain** and **natural soft shadows** for tactility ("luxury minimalism needs warmth"). No harsh drop-shadows or glassmorphism.
- Every image: descriptive `alt` (see §5), lazy-loaded, responsive `srcset`, WebP/AVIF.

### 3.5 Motion
- Restrained and intentional (over-animation reads AI-generated). Allowed: gentle scroll-reveal (fade/translate ≤ 400ms), soft hover states (color/underline/scale ≤ 1.02), one orchestrated hero load sequence. **Always respect `prefers-reduced-motion`.** No parallax overload, no bouncing.

### 3.6 Signature element (the one memorable thing)
Spend boldness in one place: a bespoke **single-weight copper botanical line-art system** — hand-drawn Ayurvedic plants (tulsi, neem, turmeric root, ashwagandha, brahmi) used as **section dividers, hero accents, and course-card motifs** — plus a recurring vertical **"est. 1908" side-rule** in the outer margin of editorial pages. This is drawn from the subject's real world (the medicinal garden + the lineage), is unmistakably Kairali, and keeps everything else quiet. Everything around the signature stays disciplined.

### 3.7 Component library (shadcn/ui mapping)
Install and theme these shadcn components; wrap in brand tokens.

| Need | shadcn / pattern |
|---|---|
| Buttons/CTAs | `button` (variants: primary=palm, emphasis=turmeric, ghost) |
| Course & content cards | `card` + custom botanical motif |
| Course pathway / level tabs | `tabs` |
| FAQ (every hub + article + course) | `accordion` (see FAQ rules §5) |
| Mobile nav | `sheet` |
| Primary nav / mega-menu | `navigation-menu` |
| Enquiry / booking / contact forms | `form` + `input` + `textarea` + `select` + `checkbox` (RHF + Zod validation) |
| Breadcrumbs | `breadcrumb` (sitewide, see §5) |
| Testimonials / gallery | `carousel` (embla) |
| Tags / credentials chips | `badge` |
| Course-calendar filters | `select` + `tabs` |
| Cookie/consent | dedicated CMP (see §9) — not a shadcn toy |
| Enquiry drawer (persistent CTA) | `sheet` or sticky bar |
| Dialogs (prospectus download) | `dialog` |
| Accessible disclosure/skip-link | native + `sr-only` utility |

### 3.8 UX principles for HNI/international buyers (apply everywhere)
1. **Calm harbour:** one primary action per screen; remove clutter; let whitespace do the reassuring.
2. **Trust before transaction:** lineage (1908), NABH hospital campus, named BAMS/MD physicians, real testimonials, and credentials are visible early and often — craftsmanship storytelling + certificate documentation *replace* generic trust badges.
3. **Editorial continuity:** content and course pages share one voice; guides link to programmes; programmes link to guides.
4. **Persistent, low-pressure enquiry:** a quiet sticky "Speak to a physician / Request prospectus" affordance, never a nagging popup. (No exit-intent popups — they cheapen the brand and, on the KTAHV site, caused compliance issues.)
5. **Global-but-specific:** currency-aware pricing, EN/DE/FR, local venue context — one consistent aesthetic, localized detail.
6. **Human tone:** warm, precise, restrained microcopy. Errors explain and guide; they never shout or apologize.

---

## 4. Global elements (build once, used on every page)

### 4.1 Header / navigation
- Slim, sticky-on-scroll (condenses), `--sand` translucent over hero → solid on scroll. Logo left (Kairali Guru + "est. 1908" lockup). Right: primary nav + language switcher (EN/DE/FR) + a quiet **"Enquire"** button (emphasis style).
- **Mega-menu** (`navigation-menu`) grouped by the sitemap pillars: *Courses* (by level + Panchakarma + Online + Diploma), *Panchakarma*, *Kerala*, *For You* (audiences), *Locations*, *Learn*, *About*. Each column links to hub + top spokes.
- Mobile: hamburger → `sheet` with accordion sections; language switcher + Enquire pinned.
- Fully keyboard-operable; visible focus; `aria-current` on active; skip-to-content link first in DOM.

### 4.2 Footer
- Deep `--palm` band. Columns: Courses / Panchakarma & Kerala / For (audiences) / Locations / Learn / About & Legal. NAP block (identical everywhere — entity consistency): **Kairali – The Ayurvedic Healing Village, Kodumbu, Palakkad, Kerala, India**, phone, **info@kairali.com**, hours. Social links (`sameAs`). Language switcher. Newsletter opt-in (double opt-in, consent-logged). **Legal links:** Privacy Policy, Cookie Policy, Terms, Refund/Cancellation, Accessibility Statement, Grievance Officer (DPDP). Copyright + "est. 1908."

### 4.3 Breadcrumbs (sitewide)
- On every page except Home: visible breadcrumb + `BreadcrumbList` JSON-LD (§7). Pattern: `Home › {Pillar} › {Page}` (e.g., `Home › Courses › Panchakarma Therapist Training`).

### 4.4 Global CTAs & enquiry
- Primary conversion path: **Enquiry form** (name, email, phone (intl), interest = course/level, preferred venue, message, consent checkbox). Secondary: **Request prospectus** (email-gated PDF, `dialog`), **WhatsApp** handoff, **Free consultation**. All forms: RHF + Zod, accessible labels + inline error text, honeypot + spam protection, consent capture logged (§9), success state with clear next step.

### 4.5 Consent banner
- Geo-aware CMP (see §9) — loads before any non-essential script; blocks non-essential until consent.

---

## 5. On-page SEO + AEO framework (APPLIED TO EVERY PAGE)

This is the rulebook the build agent applies to *every* template. Per-page specifics in §6 only add the page's unique values.

### 5.1 Heading hierarchy (H1 → H6)
- **Exactly one `<h1>` per page** = the page's primary keyword phrased naturally (not stuffed). Never wrap the logo in H1.
- `<h2>` = major sections; **phrase key H2s as the real questions people ask** (this feeds AEO + the FAQ). `<h3>` = subsections under an H2. Go no deeper than `<h4>` in body content. Headings are sequential (never skip levels) — this is both SEO and an accessibility requirement (WCAG).
- Every H2/H3 should contain a secondary/long-tail keyword *where natural*.

### 5.2 The AEO "answer block" (do this on every content section) — highest-leverage 2026 tactic
Under each question-style H2/H3, the **first sentence directly answers the question** (the 40–70-word answer AI engines lift verbatim), then elaborate below. Practitioner + study consensus for 2026: *answer upfront, keep sections short and "quotable," lead with unique/original data, be the cleanest-structured source.* Because ~62–68% of AI-Overview-cited pages do **not** rank in Google's top 10, a cleanly-structured new site can win AI citations before it earns domain authority — this is Kairali's opening. Include unique proof (real 1908 lineage, named physicians, NABH hospital, specific curriculum hours) that only Kairali can state.

### 5.3 Meta tags (every page)
- **`<title>`** ≤ ~60 chars: `{Primary keyword} | Kairali Guru` (front-load the keyword; distinct per page).
- **`<meta name="description">`** ~150–160 chars: benefit + primary keyword + soft CTA. Unique per page.
- **Canonical** self-referencing `<link rel="canonical">` on every page (kill duplicate-URL dilution).
- **hreflang**: reciprocal `en`/`de`/`fr` + `x-default` for every localized page (§10).
- **Open Graph + Twitter**: `og:title`, `og:description`, `og:image` (branded 1200×630 per page/type), `og:type` (website/article), `og:locale` (+ `og:locale:alternate` for de/fr **only where the alternate page actually exists** — do not declare a locale alternate that doesn't exist; that bug exists on the KTAHV site, don't repeat it).
- **`<html lang="…">`** set correctly per locale (accessibility + SEO). Viewport meta present. Favicons/app icons.
- **Robots**: index,follow by default; `noindex` only on thank-you/utility pages; never `noindex` a page that also carries schema you want read.

### 5.4 Structured data (JSON-LD) — per §7 library
- Every page carries the relevant schema from §7, **in the initial HTML**, validated in Google's Rich Results Test + Schema.org validator before deploy. **Completeness is non-negotiable** — partial schema (missing required props) yields zero benefit.
- 2026 reality: schema is now primarily a **comprehension + entity-verification + AI-citation** signal (Gemini AI Mode, ChatGPT, Perplexity, Claude read it to ground answers), and secondarily a rich-result trigger. **Note the FAQ change:** Google **retired FAQ *rich results* on 7 May 2026** — so do **not** expect the visual FAQ dropdown in SERPs. **Keep `FAQPage` schema anyway** (still valid vocabulary; still read by AI as a trust/entity signal) on genuine FAQ sections. Do **not** put FAQ schema on non-FAQ pages (ineligible + looks manipulative). `HowTo` rich results are dead too — don't rely on them.

### 5.5 Images & alt text (every image)
- Descriptive, specific `alt` that states subject + context, front-loading meaning ("Ayurvedic physician demonstrating Abhyanga oil massage to students at Kairali's Kerala healing village" — not "massage" or "IMG_2043"). Decorative-only images get `alt=""`. Include a keyword *only where truthful and natural*. All images: `srcset`/`sizes`, `loading="lazy"` (except LCP hero → `priority`/eager + `fetchpriority=high`), WebP/AVIF, explicit width/height (no CLS). Consider `ImageObject` schema on hero/campus images.

### 5.6 Internal linking (every page)
- Each page links **up** to its pillar and **down/sideways** to relevant spokes (see sitemap map). Descriptive anchor text (the target's keyword), never "click here." Every Learning-Hub article ends with a contextual link to the matching course + location (this is how informational traffic converts and how link equity flows to money pages). Breadcrumbs count as structured internal links.

### 5.7 Content quality / E-E-A-T (every substantive page)
- Real author attribution with `Person` schema on articles and faculty (your factory's E-E-A-T model: **Dr. Deepu John / named BAMS-MD physicians** for clinical/curriculum content). Show `datePublished` + `dateModified` (freshness is an AEO signal — AI reranks recent pages). First-hand specifics (real hours, real venues, real outcomes) over generic filler. No thin/scaled boilerplate (avoids Google scaled-content-abuse risk — a standing constraint in your factory).

### 5.8 URL & technical hygiene (every page)
- Clean, lowercase, hyphenated, keyword-first URLs exactly as in the sitemap. 301-redirect every old `.aspx` URL to its new equivalent (§10). No trailing-slash duplication. No query-string canonicals.

---

## 6. Per-page specifications

Rather than 40 near-duplicate specs, pages are defined as **archetypes** (each course page shares a pattern, each location page shares a pattern, etc.). §6.1 gives the full spec per archetype; §6.2 is the master table mapping every sitemap URL to its archetype + unique values. Build the archetype template once, then populate from the table.

### 6.1 Archetype specifications

#### A) HOME — `/`
- **Purpose:** State the wedge, route by intent, establish trust, drive enquiry.
- **H1:** *Learn authentic Ayurveda — where it was born.* (primary kw woven: "Kairali Guru Ayurveda training / Kerala Ayurveda training").
- **Title:** `Kairali Guru | Authentic Kerala Ayurveda Training & Certification` · **Meta:** benefit + "Kerala Ayurveda training & certification since 1908… online, Delhi & Kerala."
- **Sections (H2s):** (1) Hero — full-bleed Kerala video, wedge headline, dual CTA (Explore programmes / Speak to a physician). (2) *Why train with Kairali* — the trust trio (Est. 1908 lineage · NABH-accredited teaching hospital-village · Delhi–Kerala). (3) *Which path is right for you?* — intent selector cards (Beginner / Yoga teacher / Aspiring therapist / Doctor / International) linking to audience pages. (4) *Our programmes* — the pathway ladder (Beginner → Therapy → Panchakarma → Online → Diploma) linking to Courses hub + spokes. (5) *Where Ayurveda is actually practised* — the Kerala healing-village campus (editorial + video). (6) *Taught by practising physicians* — faculty teaser (Person-linked). (7) *Voices from our students* — testimonials carousel. (8) *From the Learning Hub* — 3 latest articles (AEO funnel). (9) Enquiry band. 
- **Components:** hero video, cards, tabs, carousel, form. **Schema:** `Organization` + `EducationalOrganization` + `WebSite` (§7). **Links:** to every pillar. **AEO:** short "What is Kairali Guru?" answer block near top.

#### B) COURSES HUB — `/courses`
- **Purpose:** Category discovery; present the laddered pathway.
- **H1:** *Ayurveda courses & certification programmes.*
- **Title:** `Ayurveda Courses & Certification | Kairali Guru` · **Meta:** the range (beginner→advanced, online, Panchakarma, diploma) + Kerala/Delhi.
- **Sections (H2 questions):** intro answer block ("What Ayurveda courses does Kairali Guru offer?"); the 5 tiers as grouped card sets (Beginner / Professional Therapy / Panchakarma / Online / Diploma), each card → course detail; "How do I choose the right course?" block linking to audience + beginner guide; FAQ.
- **Components:** tabs (by level/format), cards. **Schema:** `CollectionPage` + `ItemList` of `Course` + `BreadcrumbList` + `FAQPage`. **Links:** all course spokes + audience pages + Learn pillar.

#### C) COURSE DETAIL — (all `/courses/*`)
- **Purpose:** Convert on a specific programme.
- **H1:** the course's primary keyword (e.g., *Panchakarma Therapist Training*).
- **Title:** `{Course} in Kerala | Kairali Guru` · **Meta:** duration + outcome + venue + soft CTA.
- **Sections (H2 questions):** answer block ("What is the {course} at Kairali Guru?" — 40–70 words, unique specifics); *Who it's for*; *What you'll learn* (curriculum modules, real hours); *Hands-on training* (clinical/practical at the healing village); *Certification & what it qualifies you for*; *Duration, dates & fees* (link to course-calendar; currency-aware); *Your teachers* (Person-linked faculty); *Venue*; *Student outcomes* (testimonials); *FAQ* (course-specific). Persistent enquiry/apply CTA + prospectus download.
- **Components:** tabs (curriculum/dates/faculty), accordion (FAQ), cards, form, badge (credentials). 
- **Schema:** `Course` (+ `hasCourseInstance` → `CourseInstance` with `courseMode`, `startDate`, `location`/`Virtual`, `offers`/price) + `BreadcrumbList` + `FAQPage` + `Review`/`AggregateRating` if genuine. **Links:** up to `/courses` + relevant pillar (Panchakarma/Kerala), sideways to related courses, to matching audience page, to a related Learn article.

#### D) TOPIC PILLAR — `/panchakarma-training`, `/kerala-ayurveda-training`, `/ayurvedic-nutrition`
- **Purpose:** Own the cluster; topical authority hub.
- **H1:** the cluster head term (e.g., *Panchakarma training in Kerala*).
- **Sections (H2 questions):** definitional answer block ("What is Panchakarma training?"); why Kerala / why Kairali; the programmes in this cluster (cards → course details); *what you'll learn / therapies covered*; *career & outcomes*; deep FAQ (many question-H2s with answer blocks — this is the AEO engine). 
- **Schema:** `CollectionPage` + `FAQPage` + `BreadcrumbList` (+ `ItemList` of the cluster's Courses). **Links:** down to all cluster course spokes, sideways to related pillars, to related Learn articles + audience pages.

#### E) AUDIENCE PAGE — (all `/for/*`)
- **Purpose:** Capture modifier-keyword intent; speak to one segment.
- **H1:** e.g., *Ayurveda training for yoga teachers.*
- **Sections (H2 questions):** answer block ("Why should yoga teachers train in Ayurveda?"); benefits for this audience; recommended pathway (which courses, in order); credentials/CE relevance (flag Yoga Alliance CE on the yoga-teacher page *if genuinely offered*); testimonials from that segment; FAQ. 
- **Schema:** `CollectionPage`/`WebPage` + `FAQPage` + `BreadcrumbList`. **Links:** to the recommended course spokes + relevant Learn articles.

#### F) LOCATION PAGE — (all `/locations/*`)
- **Purpose:** Local SEO + "near me" + Kairali's unique multi-city moat.
- **H1:** e.g., *Ayurveda course in Delhi* / *Ayurveda training in Kerala.*
- **Sections (H2 questions):** answer block ("Where can I learn Ayurveda in Delhi?"); about this centre; courses available here; getting there (embedded map, transit — for Kerala reuse the verified coordinates/how-to-reach model); city-specific FAQ; enquiry. 
- **Schema:** `LocalBusiness`/`EducationalOrganization` with `address` + `geo` + `openingHours` + `sameAs` + `BreadcrumbList` + `FAQPage`. Create a **Google Business Profile** for each of the **two locations (Kerala + Delhi)** and keep NAP identical. **Links:** to courses offered there + course-calendar.

#### G) LEARNING-HUB ARTICLE — (all `/learn/*`)
- **Purpose:** The AEO engine — win informational/question queries and AI citations, funnel to courses.
- **H1:** the exact question/topic (e.g., *How to learn Ayurveda: a step-by-step guide*).
- **Title:** `{Question} | Kairali Guru` · **Meta:** promise the answer + soft CTA.
- **Structure:** open with the **40–70-word direct answer block** (AI-liftable), then a well-structured long-form piece — H2s as sub-questions, each with its own answer block; short "quotable" sections; unique data/specifics; a comparison table where useful; a **key-takeaways** list; and an **on-topic FAQ**. Author byline (named physician) + published/updated dates. **End with a contextual CTA** to the matching course + location.
- **Components:** article layout (Source Serif 4 body, ~720px), accordion FAQ, callouts, table. 
- **Schema:** `Article`/`BlogPosting` (required: `headline`, `image`, `datePublished`, `dateModified`, `author` Person, `publisher` Organization) + `BreadcrumbList` + `FAQPage`. **Links:** up to Learn pillar, to 2–3 sibling articles, and **down to the money page** (course/location).

#### H) TRUST / ABOUT PAGES — `/about`, `/about/faculty`, `/about/accreditation`, `/about/kerala-campus`, `/testimonials`, `/gallery`
- **Purpose:** Table-stakes credibility Kairali currently hides.
- **`/about`** — the lineage story (since 1908, Kairali Group, mission). H1 *About Kairali Guru*. Schema: `AboutPage` + `Organization`.
- **`/about/faculty`** — named BAMS/MD physician-teachers, each a `Person` (name, qualification `hasCredential`, role, image, bio). This is the exact trust signal competitors flaunt. H1 *Our faculty of Ayurvedic physicians*.
- **`/about/accreditation`** — every legitimate credential, stated precisely: the 118-year lineage, the NABH-accredited teaching hospital (KTAHV), the WHO-GMP pharma pedigree (KAPPL), plus any Yoga Alliance CE / STED-skill-council affiliation **once confirmed** (see §12 open items). H1 *Accreditation & certification*. Schema: `WebPage` + relevant `EducationalOccupationalCredential`.
- **`/about/kerala-campus`** — the 65-acre healing village as a *clinical teaching* venue (video, architecture, garden, hospital). H1 *The Kairali healing village — where you'll train*.
- **`/testimonials`** — real student stories. Schema: `Review` + `AggregateRating` (only genuine reviews). 
- **`/gallery`** — curated, high-res, all `alt`-described.

#### I) UTILITY / CONVERSION — `/enquiry`, `/free-consultation`, `/course-calendar`, `/contact`, `/faq`
- **`/course-calendar`** — upcoming batches, dates, fees (transparency = a competitor edge). Schema: `Course` + `CourseInstance`/`Event` per batch. Filters (course/venue/month).
- **`/contact`** — NAP + map + WhatsApp + form. Schema: `ContactPage` + `Organization`.
- **`/faq`** — site-wide FAQ hub. Schema: `FAQPage`.
- **`/enquiry`, `/free-consultation`** — forms (§4.4). Thank-you pages: `noindex`, no popups, clear next step.

#### J) LEGAL — `/privacy`, `/cookie-policy`, `/terms`, `/refund-policy`, `/accessibility`, `/grievance` (see §8–§9 for required content)

### 6.2 Master page table (every URL → archetype + key fields)

| URL | Archetype | H1 | Primary keyword | Schema |
|---|---|---|---|---|
| `/` | A Home | Learn authentic Ayurveda — where it was born | kairali guru ayurveda training | Organization, EducationalOrganization, WebSite |
| `/courses` | B Hub | Ayurveda courses & certification programmes | ayurveda course | CollectionPage, ItemList(Course), Breadcrumb, FAQPage |
| `/courses/one-day-ayurveda-workshop` | C Course | One-day Ayurveda workshop | one day ayurveda workshop | Course, CourseInstance, Breadcrumb, FAQPage |
| `/courses/three-day-ayurveda-foundation-course` | C | Three-day Ayurveda foundation certificate | short term ayurveda certificate course | Course, CourseInstance, Breadcrumb, FAQPage |
| `/courses/intensive-ayurveda-training` | C | Intensive Ayurveda training (5-day) | intensive ayurveda training | Course, CourseInstance, Breadcrumb, FAQPage |
| `/courses/ayurveda-therapy-training-level-1` | C | Ayurveda therapy training — Level 1 | ayurveda therapist training | Course, CourseInstance, Breadcrumb, FAQPage |
| `/courses/advanced-ayurveda-therapist-training-kerala` | C | Advanced Ayurveda therapist training, Kerala | advanced ayurveda therapist training kerala | Course, CourseInstance, Breadcrumb, FAQPage |
| `/courses/panchakarma-therapist-training` | C | Panchakarma therapist training | panchakarma therapist training | Course, CourseInstance, Breadcrumb, FAQPage |
| `/courses/panchakarma-technician-course` | C | Panchakarma technician course | panchakarma technician course | Course, CourseInstance, Breadcrumb, FAQPage |
| `/courses/online-ayurveda-course` | C | Online Ayurveda course | ayurveda online course | Course, CourseInstance(online), Breadcrumb, FAQPage |
| `/courses/ayurvedic-nutrition-course` | C | Ayurvedic nutrition course | ayurvedic nutrition course | Course, CourseInstance, Breadcrumb, FAQPage |
| `/courses/diploma-in-ayurveda-panchakarma` | C | Diploma in Ayurveda & Panchakarma | diploma in ayurveda | Course, CourseInstance, Breadcrumb, FAQPage |
| `/panchakarma-training` | D Pillar | Panchakarma training in Kerala | panchakarma training | CollectionPage, ItemList, Breadcrumb, FAQPage |
| `/kerala-ayurveda-training` | D | Kerala Ayurveda training & certification | kerala ayurveda course | CollectionPage, ItemList, Breadcrumb, FAQPage |
| `/ayurvedic-nutrition` | D | Ayurvedic nutrition & diet training | ayurvedic nutrition course | CollectionPage, ItemList, Breadcrumb, FAQPage |
| `/for/beginners` | E Audience | Ayurveda for beginners | best ayurveda course for beginners | WebPage, Breadcrumb, FAQPage |
| `/for/yoga-teachers` | E | Ayurveda training for yoga teachers | ayurveda training for yoga teachers | WebPage, Breadcrumb, FAQPage |
| `/for/spa-wellness-professionals` | E | Ayurveda training for spa & wellness professionals | ayurveda training for spa therapists | WebPage, Breadcrumb, FAQPage |
| `/for/wellness-coaches` | E | Ayurveda training for wellness coaches | ayurveda training for wellness coaches | WebPage, Breadcrumb, FAQPage |
| `/for/doctors-healthcare-professionals` | E | Ayurveda training for doctors | ayurveda training for doctors | WebPage, Breadcrumb, FAQPage |
| `/for/international-students` | E | Ayurveda courses in Kerala for international students | ayurveda course in kerala for foreigners | WebPage, Breadcrumb, FAQPage |
| `/locations/kerala` | F Location | Ayurveda training in Kerala | ayurveda training in kerala | EducationalOrganization/LocalBusiness, Breadcrumb, FAQPage |
| `/locations/delhi` | F | Ayurveda course in Delhi | ayurveda course in delhi | LocalBusiness, Breadcrumb, FAQPage |
| `/learn` | (pillar index) | The Kairali Ayurveda learning hub | learn ayurveda | CollectionPage, Breadcrumb |
| `/learn/how-to-learn-ayurveda` | G Article | How to learn Ayurveda: step-by-step guide | how to learn ayurveda | Article, Breadcrumb, FAQPage |
| `/learn/how-to-become-an-ayurveda-therapist` | G | How to become an Ayurveda therapist | how to become an ayurveda therapist | Article, Breadcrumb, FAQPage |
| `/learn/best-ayurveda-course-for-beginners` | G | The best Ayurveda course for beginners | best ayurveda course for beginners | Article, Breadcrumb, FAQPage |
| `/learn/study-ayurveda-online` | G | How to study Ayurveda online | how to study ayurveda online | Article, Breadcrumb, FAQPage |
| `/learn/learn-ayurveda-in-india` | G | Where to learn Ayurveda in India | where to learn ayurveda in india | Article, Breadcrumb, FAQPage |
| `/learn/what-is-panchakarma` | G | What is Panchakarma? | what is panchakarma | Article, Breadcrumb, FAQPage |
| `/learn/ayurveda-certification-vs-diploma` | G | Ayurveda certification vs diploma | ayurveda certification vs diploma | Article, Breadcrumb, FAQPage |
| `/learn/ayurveda-career-scope-jobs-salary` | G | A career in Ayurveda: scope, jobs & salary | career in ayurveda | Article, Breadcrumb, FAQPage |
| `/learn/doshas-vata-pitta-kapha` | G | Understanding the doshas: Vata, Pitta, Kapha | vata pitta kapha doshas | Article, Breadcrumb, FAQPage |
| `/learn/residential-ayurveda-course-india` | G | Residential Ayurveda courses in India | residential ayurveda course in india | Article, Breadcrumb, FAQPage |
| `/learn/short-term-ayurveda-course-india` | G | Short-term Ayurveda courses in India | short term ayurveda course in india | Article, Breadcrumb, FAQPage |
| `/about` | H About | About Kairali Guru | kairali ayurveda academy | AboutPage, Organization, Breadcrumb |
| `/about/faculty` | H | Our faculty of Ayurvedic physicians | ayurveda course faculty | WebPage, Person(×n), Breadcrumb |
| `/about/accreditation` | H | Accreditation & certification | ayurveda certification recognised | WebPage, Breadcrumb |
| `/about/kerala-campus` | H | The Kairali healing village | ayurveda training centre kerala | WebPage, Place, Breadcrumb |
| `/testimonials` | H | Student stories | kairali ayurveda reviews | WebPage, Review, AggregateRating, Breadcrumb |
| `/gallery` | H | Gallery | — | WebPage, Breadcrumb |
| `/course-calendar` | I | Upcoming course dates & fees | ayurveda course dates | Course, CourseInstance(×n), Breadcrumb |
| `/enquiry` | I | Enquire | — | WebPage, Breadcrumb |
| `/free-consultation` | I | Free Ayurveda counselling | free ayurveda consultation | WebPage, Breadcrumb |
| `/contact` | I | Contact | contact kairali guru | ContactPage, Organization, Breadcrumb |
| `/faq` | I | Frequently asked questions | ayurveda course faq | FAQPage, Breadcrumb |
| `/privacy` `/cookie-policy` `/terms` `/refund-policy` `/accessibility` `/grievance` | J Legal | (respective) | — | WebPage, Breadcrumb |

---

## 7. Structured-data (JSON-LD) library

Rules: **JSON-LD only**; in initial HTML; validate before deploy; complete required properties; keep entity names/NAP identical everywhere (this is what makes Kairali a recognised *entity* in the Knowledge Graph + AI answers). Below are ready templates — fill `{…}` with confirmed values.

**7.1 Organization + EducationalOrganization (Home; site-wide `@graph`)**
```json
{
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization","Organization"],
  "@id": "https://kairali.guru/#org",
  "name": "Kairali Guru",
  "alternateName": "Kairali Ayurveda Academy",
  "url": "https://kairali.guru",
  "logo": "https://kairali.guru/logo.png",
  "email": "info@kairali.com",
  "foundingDate": "1908",
  "parentOrganization": { "@type":"Organization", "name":"Kairali Ayurvedic Group" },
  "address": {
    "@type":"PostalAddress",
    "streetAddress":"Kairali – The Ayurvedic Healing Village, Kodumbu",
    "addressLocality":"Palakkad","addressRegion":"Kerala",
    "postalCode":"{PIN}","addressCountry":"IN"
  },
  "sameAs": ["{facebook}","{instagram}","{youtube}","{linkedin}"]
}
```

**7.2 WebSite (Home)**
```json
{ "@context":"https://schema.org","@type":"WebSite","@id":"https://kairali.guru/#website",
  "url":"https://kairali.guru","name":"Kairali Guru","publisher":{"@id":"https://kairali.guru/#org"},
  "inLanguage":["en","de","fr"] }
```

**7.3 Course + CourseInstance (every course page)**
```json
{
  "@context":"https://schema.org","@type":"Course",
  "name":"Panchakarma Therapist Training",
  "description":"{40–70-word course summary}",
  "provider":{"@id":"https://kairali.guru/#org"},
  "url":"https://kairali.guru/courses/panchakarma-therapist-training",
  "inLanguage":"en",
  "hasCourseInstance":[{
    "@type":"CourseInstance",
    "courseMode":"onsite",
    "location":{"@type":"Place","name":"Kairali – The Ayurvedic Healing Village","address":{"@type":"PostalAddress","addressLocality":"Palakkad","addressRegion":"Kerala","addressCountry":"IN"}},
    "startDate":"{YYYY-MM-DD}","endDate":"{YYYY-MM-DD}",
    "offers":{"@type":"Offer","price":"{amount}","priceCurrency":"{INR|EUR|USD}","availability":"https://schema.org/InStock","url":"https://kairali.guru/enquiry"}
  }]
}
```
*(Online courses: `"courseMode":"online"` + `courseWorkload`. Multiple batches → multiple `CourseInstance` objects, also used on `/course-calendar`.)*

**7.4 BreadcrumbList (every interior page)**
```json
{ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"Home","item":"https://kairali.guru/"},
  {"@type":"ListItem","position":2,"name":"Courses","item":"https://kairali.guru/courses"},
  {"@type":"ListItem","position":3,"name":"Panchakarma Therapist Training","item":"https://kairali.guru/courses/panchakarma-therapist-training"}
]}
```

**7.5 LocalBusiness (each location page + GBP)**
```json
{ "@context":"https://schema.org","@type":"EducationalOrganization",
  "name":"Kairali Guru — Delhi","parentOrganization":{"@id":"https://kairali.guru/#org"},
  "url":"https://kairali.guru/locations/delhi","email":"info@kairali.com","telephone":"{phone}",
  "address":{"@type":"PostalAddress","streetAddress":"{addr}","addressLocality":"New Delhi","addressRegion":"Delhi","postalCode":"{PIN}","addressCountry":"IN"},
  "geo":{"@type":"GeoCoordinates","latitude":"{lat}","longitude":"{lng}"},
  "openingHours":"Mo-Sa 09:00-18:00" }
```

**7.6 Person (faculty)**
```json
{ "@context":"https://schema.org","@type":"Person","name":"Dr. {Name}","jobTitle":"Ayurvedic Physician & Faculty",
  "worksFor":{"@id":"https://kairali.guru/#org"},"image":"{url}",
  "hasCredential":{"@type":"EducationalOccupationalCredential","credentialCategory":"BAMS, MD (Ayurveda)"} }
```

**7.7 Article / BlogPosting (every Learning-Hub article)**
```json
{ "@context":"https://schema.org","@type":"BlogPosting","headline":"How to Learn Ayurveda: Step-by-Step Guide",
  "image":"{1200x630}","datePublished":"{ISO}","dateModified":"{ISO}",
  "author":{"@type":"Person","name":"Dr. {Name}"},
  "publisher":{"@id":"https://kairali.guru/#org"},
  "mainEntityOfPage":"https://kairali.guru/learn/how-to-learn-ayurveda","inLanguage":"en" }
```

**7.8 FAQPage (genuine FAQ sections — still valuable to AI even though FAQ rich results ended May 2026)**
```json
{ "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
  {"@type":"Question","name":"How long does it take to become an Ayurveda therapist?","acceptedAnswer":{"@type":"Answer","text":"{40–70-word answer}"}}
]}
```

**7.9 Review + AggregateRating (testimonials/courses — only genuine)**
```json
{ "@context":"https://schema.org","@type":"Course","name":"{course}","aggregateRating":{"@type":"AggregateRating","ratingValue":"{x.x}","reviewCount":"{n}"},
  "review":[{"@type":"Review","author":{"@type":"Person","name":"{Name}"},"reviewRating":{"@type":"Rating","ratingValue":"5"},"reviewBody":"{quote}"}] }
```

---

## 8. Accessibility spec (WCAG 2.2 Level AA + EAA)

**Why this is mandatory, not optional.** Kairali sells courses to EU consumers → the **European Accessibility Act (EAA)** applies. The EAA has been enforceable since **28 June 2025**, is **extraterritorial** (any business serving EU customers, regardless of HQ), and Kairali is above the micro-enterprise exemption. Its technical baseline is **EN 301 549 → WCAG 2.1 AA**; **build to WCAG 2.2 AA** (current best practice; EN 301 549 v4.1.1 incorporating 2.2 is landing in 2026). US **ADA** exposure runs on the same WCAG baseline. **Overlay/"accessibility widget" plugins do NOT create compliance** (FTC fined one vendor $1M; ~22% of 2025 accessibility suits targeted overlay sites) — fix the real code.

**Build-to checklist (the 6 most common failures first — they account for ~96% of real-world errors):**
- **Contrast:** all text ≥ 4.5:1 (large ≥ 3:1); UI components/focus ≥ 3:1. (Governs the earthy palette — verify every pair; §3.1.)
- **Alt text:** every meaningful image described; decorative `alt=""` (§5.5).
- **Form labels:** every field has a programmatic `<label>`; errors identified in text + `aria-describedby`, with correction guidance.
- **Links/buttons:** descriptive, non-empty, purpose clear from text alone.
- **Document language:** `<html lang>` correct per locale.
- **Headings:** one H1, sequential, meaningful (§5.1).

**Plus WCAG 2.2 AA specifics:**
- Full **keyboard operability** (nav, mega-menu, carousels, forms, dialogs) with **visible focus indicators** (2.2 "Focus Appearance").
- **Target size** ≥ 24×24px (aim 44–48px for primary touch).
- **Consistent navigation & help** placement; **redundant-entry** avoidance in multi-step forms; **accessible authentication** (no cognitive-only tests) if any login.
- No keyboard traps; skip-to-content link; logical DOM/reading order; ARIA only where native semantics are insufficient (correct roles/states).
- Captions/transcripts for any video with meaningful audio; no autoplay audio; controls provided.
- Respect `prefers-reduced-motion`; no flashing >3/sec.
- Test with **real assistive tech** (NVDA/VoiceOver) + keyboard, not just an automated scanner (scanners catch only ~30–40%).

**Required page: `/accessibility` — Accessibility Statement** (EAA requires this): conformance target (WCAG 2.2 AA / EN 301 549), known limitations, a **feedback mechanism** (email `info@kairali.com`), and date. Provide in the languages you serve (EN/DE/FR).

---

## 9. Compliance & legal (EU · US · India — 2026)

Kairali serves **India, the EU, and the US/global** → build to the strictest of each, geo-targeted. Architecture principle: one **geo-aware Consent Management Platform (CMP)** + **cookieless analytics** (§2) to shrink the surface.

### 9.1 Cookie consent (EU ePrivacy/GDPR + India DPDP + California)
- Deploy a **geo-aware CMP** (e.g., **Cookiebot / Usercentrics / CookieYes / Osano / Didomi**) that: **auto-scans & categorises** cookies (strictly-necessary / analytics / marketing); **blocks all non-essential scripts until consent**; serves the **right flow by geolocation** — GDPR opt-in banner in the EU/EEA, DPDP consent notice for India, CCPA opt-out for California; integrates **Google Consent Mode v2** if any Google tags exist; **logs consent immutably**.
- **EU rules:** prior, **granular, freely-given** consent; **no pre-ticked boxes**; **Reject** must be as easy as **Accept** (equal prominence). (Enforcement is real: CNIL issued 83 cookie sanctions totalling ~€486.8M in 2025.) Necessary cookies only may load pre-consent.
- Because analytics are **cookieless (Plausible/Fathom)**, if no marketing cookies are used the banner can be minimal — but still present the compliant notice/controls.

### 9.2 India — DPDP Act 2023 + DPDP Rules 2025
- Timeline: **Rules notified 13 Nov 2025**; Consent-Manager framework **13 Nov 2026**; **full compliance by 13 May 2027** (a 2026 MeitY consultation floated pulling this earlier — build compliant now). Penalties up to **₹250 crore**.
- **Consent** must be free, specific, informed, unambiguous, **unconditional**, via clear affirmative action, and **collected separately from Terms** — no bundling, no pre-ticks, no "by using this you agree." Each purpose = its own consent.
- **Privacy notice** must state: what data, purposes, how to **withdraw consent**, and how to complain to the **Data Protection Board**.
- **Data-principal rights:** access, correction, **erasure** (address within ~90 days), grievance.
- **Grievance Officer:** designate one and **publish contact on the website** → build the `/grievance` page + footer link.
- **Breach:** notify the Board + affected principals (72-hour expectation).
- **Minors (<18):** verifiable parental consent + **no behavioural tracking/targeted ads to children**. Kairali's courses are adult/professional — state this and avoid minor-targeted processing; forms should not knowingly collect minors' data without the parental-consent path.

### 9.3 US — CCPA/CPRA + ADA
- If serving California residents: privacy-policy disclosures, a **"Do Not Sell or Share My Personal Information"** control, honour **Global Privacy Control (GPC)** signals, opt-out of targeted advertising. ADA accessibility handled in §8.

### 9.4 EU AI Act (only if an AI chat/agent is embedded)
- If a Saanvi-type AI assistant is placed on the site, **disclose to users that they are interacting with AI** (AI-Act transparency obligations already apply). Keep the clinical-language + AI-disclosure discipline from the existing Saanvi build.

### 9.5 Required legal pages (build all; link in footer)
`/privacy` (GDPR + DPDP + CCPA disclosures, controller/fiduciary identity, purposes, legal bases, retention, rights, contact) · `/cookie-policy` (cookie inventory + categories, auto-updated by the CMP) · `/terms` · `/refund-policy` (detailed cancellation/refund terms — international students look for this; competitors publish them) · `/accessibility` (§8) · `/grievance` (DPDP grievance officer + DSAR/data-request mechanism). Provide EN/DE/FR where you serve those users.

### 9.6 Forms & data handling
- Every form: explicit **consent checkbox** (unticked) linking to privacy policy; capture **purpose-specific** consent + timestamp; store minimally; secure transport (HTTPS) + encryption at rest; a **DSAR/data-request** route (erasure/access) reachable from `/grievance` + privacy page. Newsletter = **double opt-in**.

---

## 10. Technical SEO infrastructure

- **XML sitemap** (`/sitemap.xml`, auto-generated, all indexable URLs, per-locale) + submit in **Google Search Console** (one property; verify all). Include image sitemap for the gallery/campus.
- **robots.txt** — allow crawl of all indexable content + schema; disallow only utility/thank-you; reference the sitemap. **Never block schema-bearing pages.**
- **Canonicals** self-referencing on every page; **hreflang** reciprocal `en`/`de`/`fr` + `x-default` on every localized URL (validate — no orphaned/mismatched alternates; do not declare `og:locale:alternate` for a locale page that doesn't exist).
- **301 redirects** from every legacy `.aspx` URL (OAP/TAP/WAP/AATP/AALCT pages, old home, contact) → the new keyword URL. Maintain a redirect map; no redirect chains.
- **Core Web Vitals** targets per §2 (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1); monitor in GSC + field data.
- **Security headers** (via Cloudflare/Next): HSTS, `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- **Entity/off-site (AEO):** consistent NAP across web + directories; pursue **Wikidata** + the Wikipedia entity work already in progress; earn mentions on Ayurveda/education directories and, per 2026 AI-citation data, **Reddit/forum presence** (Reddit is the single most-cited source across AI engines) — genuine participation, not spam.
- **Validation gates:** Rich Results Test + Schema validator (schema), Lighthouse (perf/SEO/a11y), axe/WAVE + manual AT (a11y), hreflang tester, mobile-friendly check — all green before go-live (this is your pre-launch factory gate).

---

## 11. Build order for Antigravity (milestones)

1. **Scaffold & design system.** Next.js + TS + Tailwind; `npx shadcn@latest init`; implement §3 tokens (colors/type/spacing), fonts (self-hosted), base components, header/footer/breadcrumbs, the botanical signature set. Ship a styleguide page.
2. **Global infra.** i18n (en/de/fr) + hreflang; SEO meta system (per-route title/description/canonical/OG); JSON-LD component library (§7); CMP + cookieless analytics; forms + consent capture; legal page shells.
3. **Templates.** Build the 10 archetypes (§6.1) as reusable templates with the on-page framework (§5) baked in.
4. **Phase-1 pages (trust + core).** Home, `/courses` + 5 existing course pages (keyword URLs), `/about` + `/about/faculty` + `/about/accreditation`, `/contact`, `/enquiry`, all legal pages, `/accessibility`.
5. **Phase-2 pages (new money products + pillars).** `/panchakarma-training`, `/courses/panchakarma-therapist-training`, `/courses/panchakarma-technician-course`, `/kerala-ayurveda-training`, `/courses/online-ayurveda-course`, `/courses/diploma-in-ayurveda-panchakarma`, `/course-calendar`.
6. **Phase-3 pages (AEO moat + reach).** `/learn` + flagship `how-to-learn-ayurveda` + top cluster articles, `/for/*` audience pages, `/locations/*` + Google Business Profiles.
7. **Phase-4.** Remaining Learn articles, `/testimonials` + `/gallery`, nutrition pillar/course, `/free-consultation`.
8. **QA + launch gate** (§12) → 301s live → sitemap to GSC → monitor.

---

## 12. Pre-launch QA / acceptance checklist

**SEO/AEO:** one H1 per page; sequential headings; answer block (first 40–70 words) on every content section; unique title+meta+canonical per page; hreflang reciprocal + x-default; every image has alt; internal links up/down present; JSON-LD validates (Rich Results + Schema validator); sitemap + robots correct; 301s from all old URLs; no orphaned/duplicate locale tags.
**Design/UX:** matches §3 tokens (no stray hex); premium on mobile at 380px; whitespace/rhythm correct; signature element present; motion respects reduced-motion; no exit popups.
**Performance:** LCP ≤2.5s, INP ≤200ms, CLS ≤0.1; Lighthouse ≥95/100/100/≥95 on key templates; fonts no-CLS; images WebP/AVIF + lazy.
**Accessibility (WCAG 2.2 AA):** contrast pass on all pairs; keyboard-operable everything; visible focus; labels+errors; target sizes; NVDA/VoiceOver pass; `/accessibility` statement live in EN/DE/FR.
**Compliance:** CMP blocks non-essential pre-consent + geo-aware (GDPR/DPDP/CCPA); Reject = Accept prominence; all legal pages live (privacy/cookie/terms/refund/accessibility/grievance); grievance officer published; form consent unticked + logged; double opt-in newsletter; AI disclosure if chat present.
**Content/E-E-A-T:** author + dates on articles; named faculty with credentials; real testimonials only; no thin/scaled boilerplate; email `info@kairali.com` everywhere; NAP identical sitewide.

---

## 13. Open items to confirm before Phase-1 sign-off
1. **Accreditation specifics** for `/about/accreditation` — exact, legitimately-claimable credentials (Yoga Alliance CE? STED/skill-council affiliation? precise wording for NABH-hospital + WHO-GMP-pharma backing). Pages are built to slot these in; supply the confirmed list.
2. **Faculty roster** — names, qualifications, photos, bios for `Person` schema.
3. **Course dates + fees + currencies** for `/course-calendar` + `CourseInstance` schema.
4. **Delhi venue details** — address, phone, coordinates, hours for the Delhi training centre (the **Kerala** venue is the healing village: coordinates 10.727275, 76.710507, already verified) for `LocalBusiness` + GBP.
5. **Stack confirmation** — Next.js (recommended) vs TanStack Start (if that was "tasty"); MDX vs headless CMS (Payload/Sanity) for content editing.
6. **Legal review** — have counsel confirm the privacy/DPDP/refund copy before launch (this spec defines requirements, not legal advice).

---

*Sources informing the 2026 requirements in this spec: Google Search Central (structured-data guidelines & search gallery, updated 2026); industry analyses of the March/May 2026 schema changes (FAQ rich-result retirement; schema as AI-comprehension signal); Ahrefs (Feb 2026) and Surfer studies on AI-Overview citations (majority of cited pages don't rank top-10); Reddit r/SEO, r/Agentic_SEO, r/DigitalMarketing practitioner consensus on AEO/GEO (answer-first, quotable structure, freshness, off-site presence); Level Access / Accessibility.works / WCAGAlert on the EAA (live since 28 June 2025, extraterritorial, EN 301 549 / WCAG 2.1→2.2 AA, no overlays) and ADA; DLA Piper / CookieYes / Secure Privacy / Fisher Phillips on India's DPDP Act + Rules 2025 timeline & consent rules; CNIL enforcement data on cookie consent; and 2026 premium/HNI web-design research (60-30-10, "simplicity as sophistication," nature-distilled palettes, luxury-minimalism-with-warmth).*

---
---

# PART II — Multilingual, Buying Psychology, Multi-Engine, Files, Analytics, Accounts & Taste
### (Expansion — supersedes the EN/DE/FR scope in §0/§2)

## 14. Multilingual & localization (content baked in — never machine-translated)

**Language set (launch) and why — mapped to your major markets:**

| Locale | Route | Market | Rationale |
|---|---|---|---|
| **English (en)** | `/` (x-default) | North America + global + NRI diaspora | Universal default; the language most "learn ayurveda" search happens in. |
| **German (de)** | `/de/` | DACH (major EU) | Largest EU wellness/education market; researchers who reward rigour. |
| **French (fr)** | `/fr/` | France + francophone (major EU) | Established Ayurveda interest; art-de-vivre framing. |
| **Arabic (ar)** | `/ar/` | GCC (major) | HNI wellness-education demand; **RTL** (see 14.3). |
| **Russian (ru)** | `/ru/` | Russia + CIS (major) | Russians are among the largest Ayurveda-India audiences; **Yandex** is their engine. |

*Spanish (es) and Italian (it) are cheap future adds once the above are live — the architecture must not hard-code five; make locales configurable.*

> **Note on prior scope.** A previous analysis concluded EN/DE/FR-only — but that was for **KTAHV** (the healing village's agency-driven B2B *treatment* funnel, GCC parked to 2027). **kairali.guru is a different animal**: direct-to-consumer *education* with genuinely global search demand and a low marginal cost per language on a generated site. Hence the broader set. The one rule that carries over intact: **localize, don't translate.**

### 14.1 The golden rule — locale-native authoring, not translation
Every locale's content is **written in-language for that market's psychology (14.5), not machine-translated from English.** Machine translation reads as machine translation to native speakers, tanks trust with exactly the HNI buyers we want, and (for Yandex/Baidu) actively fails to rank. Antigravity must treat each locale as first-class content, authored to the per-market brief — **not** run English through a translator. Where full localized bodies aren't yet supplied, Antigravity builds the localized *shell* + the supplied localized core strings (14.4) and leaves clearly-marked content slots — it does **not** auto-fill them with MT.

### 14.2 Technical i18n
- **Library:** `next-intl` (App Router). Locale-segmented routes (`/`, `/de/`, `/fr/`, `/ar/`, `/ru/`). Locale-aware `<html lang>` + `dir`.
- **hreflang:** every page emits a reciprocal cluster for all 5 locales + `x-default` (→ English). Validate; no orphaned alternates. `og:locale` + `og:locale:alternate` only for locales that actually exist.
- **Sitemaps:** per-locale sitemap files under a sitemap index; each URL lists its `hreflang` alternates.
- **Schema:** `inLanguage` set per locale; entity `@id` shared across locales (one entity, many languages).
- **Formatting:** locale-aware numbers, dates, and **currency** (EUR for DACH/FR, USD/global for EN, AED/SAR for GCC, RUB for RU, INR for India context) via `Intl`.
- **Fonts covering all scripts (self-host via `next/font`):** Latin → Fraunces / Hanken Grotesk / Source Serif 4 (all support Latin + **Cyrillic**, so RU is covered by the same faces). **Arabic** needs dedicated faces: body **IBM Plex Sans Arabic** (pairs cleanly with the Latin system), display a refined Arabic serif/naskh (e.g., **Noto Naskh Arabic** or a licensed premium Arabic display). Never render Arabic/Cyrillic in a Latin-only face.

### 14.3 Arabic = full RTL (real build requirement, not a toggle)
- `dir="rtl"` on `<html>` for `ar`; use **CSS logical properties** everywhere (`margin-inline-start`, `padding-inline`, `inset-inline`, `text-align: start`) so layout mirrors automatically. Tailwind logical utilities + shadcn/Radix RTL support.
- **Mirror** directional UI: nav flows right→left, breadcrumbs reverse, carousels/sliders reverse, back/forward and arrow icons flip (`scale-x-[-1]` on directional glyphs only — never mirror icons like a phone or clock).
- Mixed-direction handling (Latin brand names / numbers inside Arabic text) via `bdi`/`dir="auto"`.
- Test the full RTL experience on mobile — it's where mirroring bugs hide.

### 14.4 Localized core-strings pack (use these verbatim — authored, not translated)
Ship these now; author full page bodies to the 14.5 brief per locale. (Arabic shown RTL; keep the eastern-Arabic or western digits per house style — western digits are safer for prices.)

| String (EN) | DE | FR | AR | RU |
|---|---|---|---|---|
| **Tagline:** Learn authentic Ayurveda — where it was born. | Lernen Sie authentisches Ayurveda – dort, wo es entstand. | Apprenez l'Ayurveda authentique, là où il est né. | تعلَّم الأيورفيدا الأصيلة، حيث نشأت. | Изучайте подлинную Аюрведу — там, где она зародилась. |
| **Hero subhead:** 118 years of Kairali lineage. Train with practising physicians in a living Kerala healing village — online or in person. | 118 Jahre Kairali-Tradition. Lernen Sie bei praktizierenden Ärzten in einem lebendigen Heildorf in Kerala – online oder vor Ort. | 118 ans de lignée Kairali. Formez-vous auprès de médecins praticiens dans un véritable village de soins au Kerala, en ligne ou sur place. | ١١٨ عامًا من إرث كايرالي. تدرَّب على يد أطباء ممارسين في قرية علاجية حيّة في كيرالا، عبر الإنترنت أو حضوريًا. | 118 лет традиции Kairali. Обучайтесь у практикующих врачей в настоящей лечебной деревне в Керале — онлайн или очно. |
| **CTA:** Explore the programmes | Programme entdecken | Découvrir les formations | استكشف البرامج | Изучить программы |
| **CTA:** Speak to a physician | Mit einem Arzt sprechen | Parler à un médecin | تحدَّث إلى طبيب | Поговорить с врачом |
| **CTA:** Request the prospectus | Studienbroschüre anfordern | Demander la brochure | اطلب الدليل | Запросить брошюру |
| **Nav:** Courses | Kurse | Formations | البرامج | Программы |
| **Nav:** Panchakarma | Panchakarma | Panchakarma | بانتشاكارما | Панчакарма |
| **Nav:** Kerala | Kerala | Kerala | كيرالا | Керала |
| **Nav:** For you | Für Sie | Pour vous | لك أنت | Для вас |
| **Nav:** Locations | Standorte | Lieux | المواقع | Локации |
| **Nav:** Learn | Wissen | Savoir | المعرفة | Знания |
| **Nav:** About | Über uns | À propos | من نحن | О нас |
| **Nav:** Enquire | Anfragen | Nous contacter | تواصل معنا | Оставить заявку |
| **Trust:** Est. 1908 | Gegründet 1908 | Fondé en 1908 | تأسست عام 1908 | Основано в 1908 |
| **Trust:** NABH-accredited teaching hospital | NABH-akkreditierte Lehrklinik | Clinique-école accréditée NABH | مستشفى تعليمي معتمد من NABH | Учебная клиника с аккредитацией NABH |
| **Trust:** From Delhi to Kerala | Von Delhi bis Kerala | De Delhi au Kerala | من دلهي إلى كيرالا | От Дели до Кералы |

*(I can produce full per-locale page bodies — hero-to-FAQ, authored to each market — as a follow-up; that's a separate content pass, not an Antigravity translation job.)*

### 14.5 Per-market psychology brief (author every locale to this — do not translate one master)
- **EN / North America + global:** outcome + credibility + flexibility. Buyers benchmark against Vasant Lad / NAMA-track schools → lead with *authenticity, Kerala origin, hands-on clinical training, and career transformation*. Direct, evidence-forward, confident.
- **DE / DACH:** thoroughness and rigour. Formal register (**Sie**). Structured proof, precise curriculum, hours, credentials, transparent fees + refund terms. Germans research deeply before committing — reward that with depth and precision, not hype.
- **FR / France:** elegance and the experiential. Formal register (**vous**). Frame as holistic art-de-vivre + authenticity + the sensory Kerala experience; refined, editorial tone.
- **AR / GCC:** luxury, exclusivity, **privacy and discretion**, prestige, and warm hospitality. Emphasise bespoke attention, family-appropriateness, dietary/cultural sensitivity (note vegetarian/halal-friendly cuisine), and premium comfort. Imagery must be culturally respectful. RTL, generous, unhurried.
- **RU / Russia + CIS:** results + prestige + value. Russians know and seek Ayurveda-India → emphasise *authentic lineage, detailed programmes, tangible results, and status*. Because Yandex weights user-behaviour (CTR, dwell), the RU experience must be genuinely engaging, fast, and native-quality — not translated.

---

## 15. Buying psychology & conversion nuance — per page (the funnel)

Map every archetype to its funnel stage and apply the matching psychological levers. Persuasion is ethical and premium (authority, genuine social proof, honest scarcity, risk-reversal, micro-commitment) — never pushy. HNI buyers punish pressure; they reward calm confidence and proof.

| Archetype | Funnel stage | Primary psychological job | Levers to build in |
|---|---|---|---|
| **Home** | Awareness | Establish authority + route by intent, zero pressure | Wedge + trust-trio above the fold; intent selector; social proof teaser; one quiet primary CTA. No popups. |
| **Learn articles** | Awareness / education | *Be the trusted source* → earn the relationship before selling | Answer-first (authority); named-physician byline (E-E-A-T); soft contextual CTA at the end only. |
| **Topic pillars / audience pages** | Consideration | Differentiate + show "the right path for me" | Comparison of options; "which programme for you"; proof (faculty, NABH, lineage); segment-matched testimonials. |
| **Course detail** | Decision | Convert on outcomes + de-risk the commitment | Outcome + certification clarity; real curriculum/hours; **honest scarcity** (genuine limited cohort size — competitors use "limited seats" truthfully); **risk-reversal** (visible refund/cancellation terms); social proof (reviews); **micro-commitment** (prospectus download before enquiry); one unambiguous next step. |
| **Course calendar** | Decision | Remove uncertainty (dates/fees/venue) | Transparent dates + fees + currency; "book / hold a seat"; availability status. |
| **Enquiry / consultation** | Action | Frictionless conversion + reassurance | Short form, clear value ("a physician will call you"); consent handled calmly; confirmation with a real next step; no dead-end thank-you. |
| **About / faculty / accreditation** | Trust (all stages) | Convert skepticism into confidence | Craftsmanship storytelling; named BAMS/MD physicians; explicit credentials; the 1908 lineage; the real hospital campus. |

**Page-specific nuances to tell Antigravity:**
- `/for/international-students` — lead with reassurance: visa guidance, airport transfer, accommodation, food, English-medium teaching, what a residential stay is really like.
- `/ar/…` GCC pages — foreground privacy, discretion, premium comfort, dietary sensitivity; softer, more hospitable tone.
- `/for/doctors-healthcare-professionals` — deeper clinical/scientific register, credential emphasis, CPD framing.
- Course pages — the enquiry CTA is persistent but quiet (sticky, not a nag); prospectus download is the low-commitment first step that captures the lead.

---

## 16. Multi-search-engine & AI optimization (Google · Bing · Yandex · Baidu · AI engines)

Three layers (most effort compounds across engines):

**Layer 0 — Universal technical baseline (helps every engine, already in Part I).** Clean semantic HTML, **server-rendered/static (not JS-dependent)** — this specifically helps Yandex and Baidu crawlers that render JS poorly — fast (<2.5s, mobile-first), HTTPS, structured data, XML sitemaps, strong internal linking with descriptive anchors, correct robots/hreflang.

**Layer 1 — Google (primary, ~90% of traffic).** Everything in Part I. Google Search Console; AI Overviews via the AEO answer-blocks + schema.

**Layer 2 — Bing / Yahoo / DuckDuckGo / Microsoft Copilot.** Bing powers all of these + Copilot AI answers (drawn from Bing's organic index). Cheap, transfers from Google work:
- **Bing Webmaster Tools** (verify, submit sitemap) + **Bing Places** for the locations.
- Bing weights **exact target keyword in the `<title>` and `<h1>`** more than Google — our keyword-first title/H1 convention (§5.1) already satisfies this; keep the primary term within the first 60 chars.
- Register on **IndexNow** (below) — Bing is a primary consumer.

**Layer 3 — Yandex (Russia + CIS — real investment, since Russia is a named market).**
- **Yandex Webmaster** + **Yandex Metrica** (analytics — and Yandex weights user-behaviour signals like CTR/dwell, so Metrica data + a genuinely engaging UX matter) + **Yandex Business/Maps** listing.
- **Native Russian (Cyrillic) content — authored, not translated** (14.1); this is non-negotiable for Yandex ranking. Domain age + freshness + behaviour weigh heavily; avoid link-exchange/purchased links (Yandex explicitly penalises them).
- Yandex consumes **IndexNow**.

**Layer 4 — Baidu (China) — honest guidance: technically-friendly baseline only, full program deferred.**
- China is **not** a stated market, and real Baidu ranking effectively requires an **ICP licence + mainland-China hosting (or a strong China CDN) + a `.cn` domain + native Simplified-Chinese content + Baidu-ecosystem presence (Baijiahao/Baike)** — a substantial operational program (Chinese legal entity, separate analytics via Baidu Tongji since GA/YouTube are blocked in China, JS-light pages for Baidu Spider). A Kerala-hosted, multilingual site will not meaningfully rank on Baidu without this.
- **Recommendation:** build the site to be *technically Baidu-friendly* at zero extra cost (SSR/static, clean HTML, fast, HTTPS, UTF-8) and optionally verify in Baidu Webmaster if you want the data — but **do not invest in the ICP/China-hosting/Simplified-Chinese program unless China becomes a deliberate target.** Flagged so it's a conscious decision, not an accidental gap.

**Layer 5 — AI answer engines (ChatGPT/Perplexity/Gemini/Copilot/Claude).** The answer-blocks (§5.2), complete schema (§7), entity consistency, freshness, and off-site presence from Part I. Allow the AI search crawlers (§17).

**IndexNow (implement — instant indexing for Bing + Yandex + Seznam + Naver; Google does not participate).** Generate an IndexNow API key, host the key file at root, and **auto-ping IndexNow on every publish/update** (a build hook or CMS webhook submits changed URLs). One integration → instant discovery across the non-Google engines.


## 17. Root files & AI-crawler standards (2026)

Ship all of these. Serve as UTF-8 plain text (or correct type) from the **root** of the primary domain.

### 17.1 `robots.txt` — allow search + AI, never wildcard-block
Strategy: we *want* maximum search + AI-answer visibility (the whole AEO thesis), so allow the traditional and AI **search/answer** crawlers. The #1 costly mistake is an accidental `Disallow: /` under `User-agent: *` — never do that. Reference the sitemap. Decision on pure *training* crawlers is a policy call; default below allows them (being in AI training corpora aids long-term brand presence) — remove specific ones if you prefer.
```
# kairali.guru robots.txt — 2026
User-agent: *
Allow: /
Disallow: /enquiry/thank-you
Disallow: /*/thank-you
Disallow: /api/

# Traditional search
User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: YandexBot
Allow: /

# AI search / answer engines (allow — this is how we get cited)
User-agent: OAI-SearchBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

# AI training crawlers (allow by default; flip to Disallow: / to opt out of training only)
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /

# Sitemaps
Sitemap: https://kairali.guru/sitemap.xml
# IndexNow key: https://kairali.guru/{indexnow-key}.txt
```
*(Note: `Google-Extended` is a Gemini-*training* opt-out token — allowing it feeds Gemini; it does **not** affect Google Search or AI Overviews inclusion, which only need `Googlebot`. RTL/locale routes are all under the same origin → one robots.txt.)*

### 17.2 `llms.txt` (+ optional `llms-full.txt`) — honest framing
**What it is / isn't:** a curated Markdown index that helps AI tools + agentic browsers find your best pages. **Honest 2026 reality:** no major engine has confirmed it as a ranking/citation signal (Google says it doesn't use it; bot-hit data is negligible) — so it is **not** where AEO wins come from (that's content + schema + entity, per Part I). But it's cheap, low-risk, now audited by Chrome Lighthouse 13.3, and routes AI coding agents (Cursor/Claude Code/Copilot). **Ship it, keep it curated (20–50 links), write descriptions for context not SEO, don't dump the whole sitemap.**
```
# Kairali Guru
> Authentic Kerala Ayurveda training & certification, established 1908. Courses from beginner
> to advanced Panchakarma therapist training, taught by practising BAMS/MD physicians at a
> NABH-accredited healing village in Palakkad, Kerala, plus a training centre in Delhi (the two delivery locations).
> Online and residential. Languages: EN/DE/FR/AR/RU.

## Courses
- [Ayurveda courses (all)](https://kairali.guru/courses): the full programme ladder, beginner → diploma.
- [Panchakarma therapist training](https://kairali.guru/courses/panchakarma-therapist-training): hands-on therapist certification in Kerala.
- [Online Ayurveda course](https://kairali.guru/courses/online-ayurveda-course): self-paced foundation, globally accessible.
- [Diploma in Ayurveda & Panchakarma](https://kairali.guru/courses/diploma-in-ayurveda-panchakarma): the in-depth qualification.

## Learn (guides AI engines cite)
- [How to learn Ayurveda](https://kairali.guru/learn/how-to-learn-ayurveda): step-by-step beginner-to-practitioner guide.
- [How to become an Ayurveda therapist](https://kairali.guru/learn/how-to-become-an-ayurveda-therapist)
- [What is Panchakarma](https://kairali.guru/learn/what-is-panchakarma)

## About
- [About / lineage since 1908](https://kairali.guru/about)
- [Faculty of Ayurvedic physicians](https://kairali.guru/about/faculty)
- [Accreditation](https://kairali.guru/about/accreditation)
```
*Optional `llms-full.txt`: concatenated full text of the key pages for direct LLM ingestion — add later if desired; not required at launch.*

### 17.3 Other root files
- **`sitemap.xml`** — a sitemap **index** referencing per-locale sitemaps; every URL lists `xhtml:link` hreflang alternates; auto-generated; resubmitted to Google/Bing/Yandex (+ Baidu if pursued).
- **`{indexnow-key}.txt`** — the IndexNow key verification file (17 / §16).
- **`security.txt`** (at `/.well-known/security.txt`, RFC 9116) — security contact (`Contact: mailto:info@kairali.com`), expires date. Good-practice trust signal.
- **`humans.txt`** — optional; credits the team/stack. Nice-to-have.
- **`manifest.webmanifest`** — PWA basics (name, icons, theme-color = `--palm`, background = `--sand`), for installability + polished mobile. Plus maskable icons + apple-touch-icon.
- **`ai.txt`** (optional) — simpler training opt-in/out companion to robots.txt; only add if you want an explicit training-usage statement.

---

## 18. Analytics, tag management & event-tracking plan

**Stack (consent-gated — see §9):**
- **Cookieless first:** Plausible or Fathom (privacy-safe, no consent friction) as the always-on baseline.
- **Google:** GTM container → GA4 (behind consent + **Google Consent Mode v2**) + **Google Ads** conversion tags. GTM is the single tag hub.
- **Microsoft Clarity:** heatmaps + session replay (behind consent) — invaluable for the HNI-UX "calm harbour" tuning.
- **Yandex Metrica:** for the RU market (behind consent) — also a Yandex ranking-signal source.
- **Baidu Tongji:** only if the Baidu program is pursued (§16 Layer 4).
- All non-essential tags **blocked until consent** by the CMP; geo-aware (EU opt-in, India DPDP, California opt-out).

**Event trigger taxonomy (define in GTM; send to GA4; mark conversions; mirror key ones to Ads + Clarity custom tags).** Fire on these interactions with these params:

| Event | Trigger (where) | Key params | Conversion? |
|---|---|---|---|
| `page_view` | every route | page_path, locale | — |
| `scroll_depth` | 25/50/75/90% | percent, page_path | — |
| `view_course` | any course-detail view | course_name, level, venue | — |
| `view_pricing` | course-calendar / fees section in view | course_name, currency | — |
| `select_intent` | Home intent-selector click | intent (beginner/yoga/therapist/doctor/international) | — |
| `cta_click` | any primary/emphasis CTA | cta_label, page_path | — |
| `enquiry_start` | enquiry form first field focus | course_name (if any), venue | — |
| `enquiry_submit` | enquiry form success | course_name, venue, locale | **✅ conversion** |
| `prospectus_download` | prospectus PDF request success | course_name | **✅ conversion (micro)** |
| `consultation_submit` | free-consultation success | — | **✅ conversion** |
| `whatsapp_click` | WhatsApp handoff click | page_path | **✅ conversion (micro)** |
| `call_click` | tel: link click | location | **✅ conversion (micro)** |
| `article_read` | Learn article ≥ 75% read | article_slug | — |
| `video_play` | hero/campus video play | video_id | — |
| `language_switch` | locale change | from_locale, to_locale | — |
| `form_error` | validation error shown | field, page_path | — (UX signal) |

Set **primary conversions** = `enquiry_submit` + `consultation_submit`; **micro-conversions** = prospectus/whatsapp/call. Import primary conversions into Google Ads (and Yandex Direct if RU ads run). Use Consent Mode v2 so modelled conversions still work when consent is declined in the EU.

---

## 19. Accounts, IDs & credentials required + apps/tools (built-in from day one)

**Please provide these so Antigravity wires them in from the start (not bolted on later).** Placeholders below — send values and I'll lock them into the spec.

| # | Account / service | What's needed | Purpose |
|---|---|---|---|
| 1 | **Google Search Console** | verification (DNS TXT or GTM) | Google indexing, sitemaps, GSC data |
| 2 | **Google Analytics 4** | Measurement ID `G-XXXXXXX` | Analytics (consent-gated) |
| 3 | **Google Tag Manager** | Container ID `GTM-XXXXXXX` | Tag hub / event layer |
| 4 | **Google Ads** | Conversion ID + labels | Ads conversion tracking |
| 5 | **Microsoft Clarity** | Project ID | Heatmaps + session replay |
| 6 | **Bing Webmaster Tools** | verification | Bing/Yahoo/DDG/Copilot indexing |
| 7 | **Microsoft Advertising** (optional) | account | if running Bing ads |
| 8 | **Yandex Webmaster** | verification | Russia indexing |
| 9 | **Yandex Metrica** | Counter ID | RU analytics + ranking signal |
| 10 | **Yandex Business / Direct** (optional) | account | RU maps listing / ads |
| 11 | **Baidu Webmaster + Tongji** (only if China pursued) | — | see §16 Layer 4 caveat |
| 12 | **Consent Management Platform** | account (Cookiebot / Usercentrics / CookieYes / Osano / Didomi) | geo-aware cookie/DPDP/CCPA consent |
| 13 | **Cloudflare** | account + DNS access | CDN, WAF, HTTPS, image optimization, bot analytics |
| 14 | **Cookieless analytics** | Plausible or Fathom site ID | privacy-safe baseline analytics |
| 15 | **Cloudflare Turnstile** (or reCAPTCHA v3) | site + secret keys | form spam protection (privacy-friendly) |
| 16 | **Form/CRM backend** | endpoint or API key | where enquiries post (which CRM? — please specify) |
| 17 | **WhatsApp Business** | number / API | WhatsApp handoff (Priya's KTAHV line pattern) |
| 18 | **Newsletter/ESP** | Mailchimp/Brevo/etc. account | double-opt-in list |
| 19 | **Google Business Profiles** | Kerala + Delhi (the two locations) | local SEO + map pack |
| 20 | **IndexNow** | (self-generated key) | instant Bing/Yandex indexing |
| 21 | **Hosting** | Kairali Healing Village server details / Cloudflare pairing | deployment |
| 22 | **Meta Business + Pixel** (optional) | Pixel ID | if running FB/IG ads (consent-gated) |

**Apps / plugins / services baked in from the start:** `next-intl` (i18n) · CMP (12) · Consent Mode v2 · Plausible/Fathom · GA4 + GTM + Clarity + Yandex Metrica · IndexNow auto-ping (build/CMS hook) · Cloudflare (CDN/WAF/images) · Turnstile · Payload or Sanity CMS (content editing for Learn + courses) · Pagefind or Algolia (optional on-site search) · schema/JSON-LD component library · sitemap+hreflang generator · `next/font` (self-hosted Latin+Arabic+Cyrillic) · Phosphor icons (§21) · Motion (`motion/react`). **Tell me any others and I'll add them.**

---

## 20. Mobile responsiveness & cross-device (deep — most users are here)

Mobile is the brand for the majority; premium must survive at 380px, and RTL must work on mobile too. This section is prescriptive.

- **Mobile-first, then scale up.** Breakpoints (Tailwind): base (≤640) design first → `sm` 640 → `md` 768 → `lg` 1024 → `xl` 1280. Content shell max ~1200px; article ~720px; single-column on mobile.
- **Viewport height:** use `min-h-[100dvh]` / `dvh`/`svh` units, **never `100vh`** (prevents iOS Safari address-bar jump).
- **Touch targets:** primary ≥ 44–48px; nothing below the WCAG-2.2 24px floor. Spacing between tappables ≥ 8px. Thumb-reachable primary actions (bottom-anchored enquiry affordance on mobile).
- **Nav:** desktop mega-menu → mobile `sheet` with accordion sections; language switcher + Enquire pinned; hamburger→X morph (§21).
- **Layout collapse (from taste-skill):** any asymmetric/bento/overlapping desktop layout **must** fall back to a clean single-column stack (`w-full`, `px-4`, generous vertical gaps) below `md`; remove rotations/negative-margin overlaps (they cause touch conflicts); preserve intentional horizontal scroll only where it aids (e.g., programme pills).
- **Performance on mobile (this is where CWV is won/lost):** animate only `transform`/`opacity`; **never** drive continuous values (scroll/pointer) through React `useState` — use `useMotionValue`/`useScroll` (re-renders collapse mobile frame rates); `backdrop-blur` only on fixed/sticky elements, never scrolling content; lazy-load below-fold media; responsive `srcset` + WebP/AVIF; preload only the LCP hero; keep JS minimal (RSC + islands). Target **INP ≤ 200ms** on mid-range Android.
- **Media:** hero video → lightweight poster + reduced-motion/static fallback on mobile + cellular; art-directed crops per breakpoint.
- **RTL on mobile:** verify mirrored nav, reversed carousels, flipped directional icons, and logical-property spacing all hold at 380px (Arabic).
- **Forms on mobile:** correct `inputmode`/`type` (email/tel), large fields (≥44px), visible labels, inline errors, no zoom-on-focus (16px+ inputs), autofill-friendly.
- **Test matrix (pre-launch):** iOS Safari (iPhone SE small + Pro Max large), Android Chrome (mid-range), Samsung Internet; portrait + landscape; the 5 locales incl. **RTL Arabic**; reduced-motion on; slow-3G throttle; keyboard + VoiceOver/TalkBack.

---

## 21. Design taste & motion system (taste-skill integrated)

Applying the taste-skill (Editorial Luxury archetype) on top of the §3 palette/type — these are the concrete "make it feel like a $150k build, not a template" rules.

**The three dials for Kairali:** `DESIGN_VARIANCE: 7` · `MOTION_INTENSITY: 5` · `VISUAL_DENSITY: 3`. (Premium-consumer/editorial, tuned *down* slightly for a trust-first health/education audience — restraint over spectacle.)

**Archetype:** **Editorial Luxury** — warm neutrals + botanical earth tones (our §3 palette), high-contrast **variable serif** headlines (Fraunces), subtle film-grain/noise overlay (`opacity ~0.03`) for physical warmth. *Not* the Ethereal-Glass (dark/tech) or dopamine-bright directions.

**Banned defaults (instant-fail — do NOT ship):** Inter/Roboto/Arial/Open Sans as UI type; thick Lucide/FontAwesome/Material icons; generic 1px solid-gray borders; harsh dark drop-shadows (`shadow-md`, `rgba(0,0,0,0.3)`); edge-to-edge sticky navbar glued to top; symmetrical boring 3-equal-column grids; `linear`/`ease-in-out` transitions; AI-purple gradients; centered hero over dark mesh; generic glassmorphism-on-everything; infinite-loop micro-animations. Also **avoid em-dashes in body copy** (a known AI tell — rewrite with commas/periods; this doc's em-dashes are for you, not the site copy).

**Icons:** switch to **Phosphor (light/regular)** — `@phosphor-icons/react` — ultra-light precise lines; one family; standardize weight. (Supersedes the earlier lucide mention.)

**Signature techniques to apply:**
- **Double-Bezel (nested) cards:** never place a premium card flat on the background — wrap in an outer shell (subtle fill + hairline `--copper`/neutral ring + small padding + large radius `rounded-[1.5–2rem]`) with an inner core (own fill + soft inset highlight + mathematically smaller concentric radius). Machined, physical feel.
- **Button-in-Button CTAs:** primary buttons are pills with generous padding; a trailing arrow sits **inside its own circular wrapper** flush to the right, not naked beside the text.
- **Eyebrow tags:** precede major H1/H2 with a tiny pill badge — uppercase, micro letter-spacing (`tracking-[0.2em]`), `--taupe`/`--laterite`.
- **Macro-whitespace:** section padding `py-24` → `py-40` desktop; let it breathe.

**Motion (use `motion/react`, custom cubic-beziers, respect `prefers-reduced-motion`):**
- Transitions use spring/physical easing (e.g., `cubic-bezier(0.32,0.72,0,1)`), never `linear`/`ease-in-out`.
- **Scroll-entry:** elements fade-up gently (`translate-y-16 + slight blur → 0`, ~700–900ms) via `IntersectionObserver`/`whileInView` — never a `scroll` listener.
- **Fluid-island nav:** the header can be a floating rounded pill detached from the top edge (not glued edge-to-edge); hamburger morphs fluidly into an X; mobile menu opens as a soft full-screen overlay with **staggered** link reveals.
- **Magnetic button hover:** `active:scale-[0.98]` press; the inner icon circle translates + scales slightly on `group-hover` for kinetic tension.
- Keep total motion restrained (dial 5) — one orchestrated hero moment beats scattered effects; over-animation reads AI-generated.

**Performance guardrails (repeat, critical):** transform/opacity only; blur on fixed/sticky only; grain overlay on a fixed `pointer-events-none` pseudo-element; disciplined z-index; `useMotionValue`/`useScroll` not `useState` for continuous values; `next/font` self-host (never `<link>` Google Fonts in prod).

**Pre-flight taste checklist (last filter before ship):** no banned fonts/icons/borders/shadows/layouts/motion; Editorial-Luxury archetype applied; Double-Bezel on major cards; Button-in-Button CTAs; `py-24`+ section rhythm; custom cubic-beziers only; scroll-entry present; graceful mobile single-column collapse; transform/opacity-only animation; reads as "$150k agency build," not "template with nice fonts."

---

## 22. Is it EU compliant? — Yes. Here's exactly what makes it so.

Built to EU requirements from the start (not retrofitted):
1. **GDPR + ePrivacy (cookies):** geo-aware CMP with prior, granular, freely-given consent; **Reject as easy as Accept**; no pre-ticked boxes; non-essential scripts **blocked until consent**; consent logged; cookieless analytics baseline to minimise the surface (§9, §18).
2. **European Accessibility Act (live since 28 June 2025, extraterritorial):** **WCAG 2.2 AA** conformance + a published **accessibility statement** in the served languages + feedback mechanism; **no overlay widgets** (§8).
3. **EU AI Act transparency:** if any AI chat/assistant is placed on the site, users are **told they're interacting with AI** (§9.4).
4. **Data-subject rights + lawful basis:** privacy policy states controller identity, purposes, legal bases, retention, and rights (access/erasure/portability); DSAR route provided; DPA with any processors (§9).
5. **Localized legal + accessibility pages** in EN/DE/FR (and AR/RU) so EU users get compliant notices in their language.

(Same architecture simultaneously satisfies **India DPDP**, **US ADA/CCPA** — see §8–§9. This is not legal advice; have counsel confirm final copy.)

---

## 23. What to send me next (so nothing is bolted on later)
- **Account IDs / credentials** from the §19 table (send whatever you have; I'll lock them in).
- **Accreditation wording**, **faculty roster**, **course dates/fees/currencies**, **Delhi venue details** (Kerala already verified) (§13).
- **CRM/form endpoint** + **WhatsApp Business** number + **ESP** choice.
- **Stack confirm:** Next.js + `next-intl` + shadcn + Tailwind v4 + Motion + Phosphor (recommended) — or TanStack Start if that's the intent.
- **Any other apps/plugins** you want included.
- **Language go/no-go:** confirm EN/DE/FR/AR/RU for launch (and whether to defer Baidu/China as advised).
- Say the word and I'll produce **full per-locale page bodies** (authored to each market's psychology) and the **flagship `/learn/how-to-learn-ayurveda` article** as the content-standard reference.

---
---

# PART III — Chatbot, Conversion & Ad-MCP layer, and the Contact / How-to-Reach / Enquiry pages
### (Follow-up additions + two-location reconciliation)

> **Two-location correction (applies to the whole spec):** the programme is delivered in **exactly two locations — Kerala (the healing village) and Delhi.** Location pages are now `/locations/kerala` + `/locations/delhi` only (Gurgaon/Mumbai removed). Google Business Profiles = Kerala + Delhi. The "From Delhi to Kerala" trust line is now literally accurate.

## 24. AI chatbot — Chatbase (best-practice integration)

Add a **Chatbase** AI agent as the always-on advisor (course guidance, FAQs, fee/date lookups, lead capture), consistent with your existing WhatsApp-handoff model. Chatbase is a strong fit: RAG (answers only from your content), **SOC 2 Type II + GDPR + CCPA with a DPA**, data never used to train models, 80+ languages with **RTL support**, omnichannel (web widget + **WhatsApp** + Messenger + Instagram + API), and AI Actions for lead capture.

**Configuration & best practices (build these in):**
- **Train on:** the site (sitemap) + course pages + FAQs + prospectus content; enable **auto-retrain every 24h** so it stays current. Add Q&A pairs for edge cases; review chat logs and use "Improve Answer."
- **Persona:** "Kairali Ayurveda course advisor" — warm, authentic, clinical-accurate register (matches the brand). **Guardrails:** answer only from configured sources; refuse off-topic; **give no medical/diagnostic advice** (this is a school, not a clinic) — route any health/clinical or specific-enrolment question to a human.
- **Human handoff:** Chatbase has **no native live-chat inbox** → hand off to **WhatsApp** (the care-team / Priya model, `wa.me/919289838797`) and/or create a CRM lead/ticket (Zendesk/HubSpot/Salesforce if used). Wire the "talk to a person" path explicitly.
- **Lead capture → conversion:** capture name + contact + interest in-chat; push to the CRM/form endpoint; fire the GA4 event **`chatbot_lead`** (mark as a conversion, §18). Pull leads via Chatbase API into the CRM.
- **Multilingual:** enable EN/DE/FR/AR/RU; **RTL** for Arabic (widget position mirrors). Auto-detect + localized responses.
- **EU AI Act disclosure (required, §9.4):** the widget must clearly state users are chatting with **an AI assistant**, not a person.
- **Consent-gated (§9):** the Chatbase embed is a third-party script that sets cookies → **load it only after CMP consent** (it's designed to work alongside CMPs; use **domain allowlisting** so the agent only runs on kairali.guru). 
- **Design:** custom-style the widget to the brand tokens (§3) so it feels native and calm — bottom-corner launcher, unobtrusive, never auto-opens aggressively (consistent with the no-nag premium stance).
- **Ops caveat:** Chatbase bills on message **credits** with a *silent-failure* mode (the widget shows "unavailable" when credits run out) → **monitor usage / set alerts** so it never silently dies. Support can be slow — keep the WhatsApp path as the reliable fallback.
- **Events:** `data-cta`/`dataLayer` on chatbot open + lead (`chatbot_open`, `chatbot_lead`).

*(If native live human handoff or self-hosting/data-sovereignty ever becomes a hard requirement, alternatives are Tidio (native handoff) or Botpress (open-source, self-host) — but Chatbase is the right call for this build.)*

## 25. Conversion infrastructure + ad-management MCP layer

Two separate layers — keep them distinct.

### 25.1 Website conversion tracking (2026 best practice — build into the site)
- **Server-side GTM container** as the backbone (first-party, durable, consent-aware) — route GA4 + ad conversions through it.
- **Meta:** **Pixel + Conversions API (CAPI)** — send key events (enquiry_submit, prospectus_download, chatbot_lead) **server-side** via server-GTM for accuracy/iOS/privacy resilience; consent-gated. (Pixel/CAPI health is even auditable via the Meta MCP below.)
- **Google Ads:** conversion tags + **Enhanced Conversions** (hashed first-party data) + **Consent Mode v2**; import the §18 primary conversions.
- Everything **behind CMP consent**; Consent Mode v2 preserves modelled conversions when EU consent is declined.
- **Yandex Direct** (if RU ads run) + **Meta Pixel** already in the accounts table (§19) — add **Meta CAPI**, **server-side GTM**, and **Google Enhanced Conversions** as build items.

### 25.2 Ad-management MCP layer (marketing-ops automation — connects to your AI agents / n8n, *not* a website requirement)
So your team (via Claude / n8n / Antigravity) can manage and analyse campaigns conversationally. **This is an ops layer** — the website just needs to emit the conversion signals in 25.1; the MCPs sit in your agent stack. Available in 2026:
- **Meta Ads MCP — official** (launched 29 Apr 2026, `mcp.facebook.com/ads`): **read + write** (29 tools — pull performance, launch campaigns *paused*, adjust budgets/bids, manage audiences, audit Pixel/CAPI health). **OAuth login, no API keys**, free in open beta; needs a paid AI tier (e.g., Claude Team). Writes are explicit/staged; new campaigns start paused.
- **Google Ads MCP — official** (`github.com/googleads/google-ads-mcp`): **read-only** (reporting/analysis; cannot modify). Needs a **Google Ads developer token + OAuth2 credentials + Google Ads API enabled** in a Google Cloud project.
- **Cross-platform option:** Pipeboard / GoMarble (Meta + Google + TikTok + more under one auth) if you want a single connector across networks.
- **Fit with your stack:** these plug into your existing **n8n** automation and MCP practice. Prefer the **official** servers for safety; keep writes gated to approval. (Credentials needed are in the updated §27 table.)

## 26. Contact / How-to-Reach / Enquiry pages (reuse the proven KTAHV patterns, adapted for two locations)

We already built and hardened these for the healing village (ayurvedichealingvillage.com). **Reuse the patterns and the fixes** — but adapt for the training entity and the **two locations (Kerala + Delhi)**. Note kairali.guru is *not* under KTAHV's GST clinical-language lock, so the copy can be warmer — but keep the premium/authentic register. Fonts already match (Fraunces / Hanken Grotesk / IBM Plex Mono).

### 26.1 How-to-Reach — per location (indexable: `index, follow, max-image-preview:large`)
Two versions live on the location pages: **`/locations/kerala`** (reuse the KTAHV Kerala data) and **`/locations/delhi`** (new). Section flow (from the proven KTAHV page):
1. **Hero** — eyebrow "Getting here · Directions", H1 ("Finding your way to the Kerala healing village" / "Getting to our Delhi centre"), one subline, optional live IST clock + "phone lines open" status, primary CTA = **WhatsApp to arrange a transfer/visit**.
2. **Arrival options** — three cards: **By air / By rail / By road**, each with distance, approx. time, and a one-line "what to do on arrival."
3. **Pickup/arrival block** — how to request a transfer; what to share (flight/train details, arrival time).
4. **Interactive Google Map embed** — `loading="lazy"` (protect LCP), real coordinates, **Get directions** + **View larger map** buttons.
5. **Distances table** and (Kerala) a wider regional orientation map.
6. **Address block** (this location).
7. **FAQ** (AEO-friendly directional Qs: "How far is the nearest airport?", "Do you arrange pickup?", "Best way from Kochi?").
8. **CTA footer** — WhatsApp + Contact + Enquiry.
9. **Mobile sticky bar** — WhatsApp + Call.

**Kerala verified data (reuse directly):** coordinates **10.727275, 76.710507**; nearest airport **Coimbatore (CJB) ≈ 62 km / ~1 hr** and **Kochi (COK) ≈ 115 km**; rail **Palakkad Junction (PGT) ≈ 18 km**; **NH544** corridor; the venue is the **NABH-accredited healing village**. **Delhi:** address, coordinates, metro/rail/road access, hours = **TODO (please supply, §27)**.

**Schema:** `EducationalOrganization` (the school) + `GeoCoordinates` + `hasMap` + `openingHoursSpecification` + `hasCredential` (NABH, on the Kerala venue) + `BreadcrumbList` + `FAQPage`. (Use `EducationalOrganization`, not `MedicalClinic` — this is a school; the Kerala *venue* is the hospital.)

### 26.2 Enquiry page + thank-you (reuse the KTAHV enquiry pattern)
- **Minimal friction:** required = **Name** + at least one of **Phone/Email**; plus **Preferred location** (Kerala / Delhi / Either), **Programme of interest** (dropdown of the training programmes), and a **required consent checkbox** (links to Privacy Policy). **Honeypot** bot-trap. Inline errors; scroll to first error.
- **"What happens next" 3-step block:** *Enquiry received* → *An advisor calls you* → *Enrolment & joining details.*
- **Contact-channel cards:** WhatsApp (**Recommended** tag) · Send enquiry (**Recommended**) · Call. De-emphasise social cards.
- **WhatsApp CTA = a real link** (`<a href="https://wa.me/919289838797?text=...">`, works with JS off); the prefilled message **records consent** ("Consent given on /enquiry (date)").
- **Adaptation from KTAHV (important):** any callback modal is **click-triggered only — NO exit-intent or timed auto-popup.** (Exit/discount popups were removed on KTAHV for compliance and clash with the premium calm-harbour stance.)
- **Events:** `enquiry_start` (first field focus), `enquiry_submit` (**conversion**), `cta_click` — all with `data-cta`/`data-location` (§18).
- **Thank-you page:** `noindex, follow`; **no dead-end** — keep the warm lead engaged with WhatsApp/Call + "while you wait" links (Learn articles, courses); **hide the Enquire button** on this page; include the privacy line ("Your details are handled confidentially in line with our Privacy Policy"). (No medical/emergency disclaimer needed — this is a school, not a clinic.)

### 26.3 Reusable technical hardening (carry over every KTAHV fix)
- **Prefix all IDs/classes** (e.g. `kg-` / `.kge-`) and make JS **root-guarded + null-safe** — no theme/plugin collisions.
- **FAQ JSON-LD generated from the visible FAQ verbatim** (schema must match on-page text).
- **WCAG contrast on the WhatsApp green:** fill `#128350` (4.79:1), hover `#0F7A47` — not the lighter green that failed.
- **Self-host fonts** (Fraunces / Hanken Grotesk / IBM Plex Mono) — don't rely on `<link>`.
- **Reciprocal hreflang**; declare `og:locale:alternate` **only** for locales that actually exist (the KTAHV bug: `fr_FR` alternate with no FR page — don't repeat it).
- **Standardise the contact URL** — one canonical `/contact` (the `/contact` vs `/contact-us` duplication caused issues).
- **Modal a11y:** focus trap, focus returns to the opener, `aria-modal`, Escape to close, `:focus-visible` styles.
- **Numbers/email (constants):** WhatsApp (care team) **+91 92898 38797** → `wa.me/919289838797`; main line/IVR **+91 9555156156**; email **info@kairali.com**.

## 27. Updated accounts/tools additions (add to §19) + what to send
**New build items:** Chatbase (agent + API key + DPA) · Meta **Conversions API** + **server-side GTM** container · Google Ads **Enhanced Conversions** · (ops) **Meta Ads MCP** (OAuth) + **Google Ads MCP** (developer token + OAuth2 + Google Cloud project) connected to your n8n/agent stack.
**Please send:** the **Delhi training-centre** address + phone + coordinates + hours (Kerala already verified); the Chatbase workspace (or approval to create one); confirmation to run **Meta CAPI + server-side GTM**; and the ad-MCP credentials if you want the ops layer wired now. Everything else stubs and continues.

---
---

# PART IV — Image & media guide (AI is weak at images — follow this exactly)

## 28. Images: art direction, naming, alt text, sources & per-slot briefs

**Read this first — the single most important rule.** For an *authentic 118-year Kerala* brand aimed at HNI buyers, **first-party photography beats stock every time.** You own the real subject — the healing village, the medicinal garden, practising physicians, students in hands-on training, therapy rooms, copper vessels. Real images build **E-E-A-T** (Google + AI engines reward genuine first-party media), read as premium, and can't be faked by a competitor. **Priority order for every slot: (1) reuse/shoot your own authentic image → (2) licensed stock only for generic/supporting slots → (3) the botanical line-art signature (§3.6/§21) for decorative/illustrative slots.** Antigravity must **never** invent or AI-generate photos, and must not hotlink random web images (copyright). It uses only the assets you supply or approved royalty-free stock, and where an image is missing it inserts a **clearly-labelled placeholder with the brief below** so your team drops in the right shot.

### 28.1 The "Kairali look" (art direction — ties to §3.4 / §21)
- **Kerala materiality:** laterite/brick (Laurie-Baker-style) architecture, coconut palms, medicinal garden, backwater/greenery, aged **copper vessels**, real herbs and medicated oils, therapy rooms.
- **Real, appropriate people:** practising Indian/South-Asian physicians and diverse international students; warm, unposed, dignified. Faces that match the story (not generic Western "spa" models).
- **Light & grade:** warm, natural daylight; earthy, slightly desaturated grade consistent with the palette (sandalwood/palm/laterite/turmeric). Soft natural shadows, gentle film-grain warmth — never harsh, clinical-cold, or over-saturated.
- **Composition:** generous negative space (premium), single clear subject, editorial framing. Cinematic wides for heroes; intimate detail shots for texture.

### 28.2 Banned image clichés (these make AI/stock output look cheap — do not use)
Generic spa stock (candles, stacked river stones, orchid-on-a-towel, rolled-towel-and-oil), lotus-floating-on-water, generic praying hands/incense-smoke "mysticism," white-couple-on-a-massage-table stock, any **AI-generated** or obviously fake "Indian/Ayurveda" scenes, hyper-saturated "wellness" imagery, and any image with visible competitor logos/branding or unreleased recognizable faces.

### 28.3 File-naming convention (every image)
`kairali-{page-or-topic}-{subject}-{location}[-{n}].{ext}` — **lowercase, hyphens only** (no spaces, underscores, capitals), **keyword-first** (helps image SEO), served as **WebP + AVIF** with a responsive set (build generates `480w / 800w / 1600w / 2400w`).
Examples: `kairali-kerala-healing-village-hero.webp` · `kairali-panchakarma-shirodhara-training-kerala.webp` · `kairali-medicinal-garden-herbs-kerala.webp` · `dr-deepu-john-ayurvedic-physician-faculty.webp` · `kairali-ayurveda-training-centre-delhi.webp`.

### 28.4 Alt-text convention (every meaningful image)
Formula: **`{who/what} {doing what}, at Kairali's {location}`** — specific, ≤ ~125 chars, one natural keyword, **no "image of/photo of/picture of."** Decorative-only images → `alt=""`. Never keyword-stuff.
- Hero → "Kairali's Ayurvedic healing village among medicinal gardens in Palakkad, Kerala"
- Therapy → "Ayurvedic physician demonstrating Shirodhara oil-stream therapy to trainees at Kairali, Kerala"
- Faculty → "Dr. Deepu John, BAMS MD, chief physician and faculty at Kairali Guru"
- Herbs → "Traditional Ayurvedic herbs and medicated oils in copper vessels prepared at Kairali"
- Delhi venue → "Kairali Guru Ayurveda training centre in Delhi"
*(Localize alt text per locale — EN/DE/FR/AR/RU — same as body content; don't leave English alt on translated pages.)*

### 28.5 Technical specs
| Slot | Aspect | Min size | Loading |
|---|---|---|---|
| Hero (full-bleed) | 16:9 (or 3:2) | ≥ 2400px wide | **LCP → eager + `fetchpriority=high` + preload** |
| Section / card | 4:3 or 1:1 | ~1600px | lazy |
| Portrait (faculty/testimonial) | 3:4 | ~1000px | lazy |
| Open Graph (per page/type) | 1200×630 | exact | n/a |
All: **WebP + AVIF**, responsive `srcset`/`sizes`, **explicit width/height (no CLS)**, quality ~80 (no visible artifacts), min 2000px longest edge for any zoomable image. Add **`ImageObject` schema** on hero, campus, and faculty images. Hero video (Home/Kerala) → poster image + `prefers-reduced-motion`/mobile static fallback (§3.4).

### 28.6 Sources (in priority order)
1. **First-party** (best) — your own shoot / existing library (see shot list, 28.8).
2. **Free-license stock** (verify each license; good for generic/supporting slots): **Unsplash** (`unsplash.com/s/photos/{term}`), **Pexels** (`pexels.com/search/{term}/`), **Pixabay** (`pixabay.com/images/search/{term}/`), **StockCake**. Attribution not required on Unsplash/Pexels but appreciated.
3. **Paid stock** (best for images with recognizable people — includes model/property **releases**): **Adobe Stock, Shutterstock, Getty/iStock, Dreamstime**.

**Curated candidate links** (interim, free-license, mapped to slots) are in **`IMAGE_LINKS_2026-07-09.md`** — verify each license + download from source; first-party still preferred.
> **Licensing rules:** never hotlink random web images (the search references above are *direction only*, not usable assets); verify every stock license for commercial use; any recognizable face needs a **model release** (paid stock includes these; for your own students/patients get **written consent** — also a DPDP requirement); avoid visible third-party branding.

### 28.7 Per-slot image manifest (by archetype — extend the pattern to all pages)
For each slot: **subject/composition** · `filename` · *alt text* · **source** (FP = first-party preferred; Stock-OK) · free-stock search term.

**Home (`/`)**
- Hero — cinematic wide of the Kerala healing village (laterite architecture + garden/palms) *or* a physician-teaching-student moment · `kairali-kerala-healing-village-hero.webp` · "Kairali's Ayurvedic healing village among medicinal gardens in Palakkad, Kerala" · **FP** · stock: `kerala ayurveda architecture`.
- Trust/campus thumb — the NABH teaching hospital building · `kairali-nabh-teaching-hospital-kerala.webp` · "The NABH-accredited teaching hospital at Kairali's Kerala healing village" · **FP**.
- Intent cards ×5 (beginner / yoga teacher / spa-wellness / doctor / international) — small representative portraits/scenes · `kairali-audience-{segment}.webp` · alt per segment · Stock-OK · terms: `yoga teacher india`, `wellness therapist`, `doctor india`, `international student india`.
- Faculty teaser — real physician portrait · `dr-{name}-ayurvedic-physician-faculty.webp` · "Dr. {Name}, {creds}, physician and faculty at Kairali Guru" · **FP (mandatory)**.
- Learn teasers ×3 — article topic images (see Learn) · lazy.

**Course detail (`/courses/*`)**
- Hero — the *specific* training in action (e.g. Panchakarma therapist → hands-on Abhyanga/Shirodhara instruction) · `kairali-{course-slug}-training-kerala.webp` · "{Programme} hands-on training with a physician at Kairali, Kerala" · **FP (strongly preferred)**.
- Hands-on/curriculum — therapy demonstration close-up · `kairali-{course-slug}-hands-on.webp` · **FP**.
- Faculty card — physician portrait (reuse faculty asset).

**Panchakarma pillar (`/panchakarma-training`)**
- Hero — authentic Panchakarma procedure (Shirodhara oil-stream / Kizhi bolus / therapy table) · `kairali-panchakarma-shirodhara-training-kerala.webp` · "Shirodhara therapy demonstrated during Panchakarma training at Kairali, Kerala" · **FP** · stock: `shirodhara ayurveda`, `panchakarma therapy`.
- Therapies grid — Abhyanga, Kizhi, Nasya detail shots · `kairali-panchakarma-{therapy}.webp` · **FP**.

**Kerala pillar / campus (`/kerala-ayurveda-training`, `/about/kerala-campus`, `/locations/kerala`)**
- Village architecture wide, medicinal garden, therapy rooms, regional orientation · `kairali-kerala-{subject}.webp` · **FP** · stock: `kerala backwaters`, `ayurveda garden herbs`.

**Location — Delhi (`/locations/delhi`)**
- Delhi centre exterior + interior/practical space · `kairali-ayurveda-training-centre-delhi.webp` · "Kairali Guru Ayurveda training centre in Delhi" · **FP (TODO — supply Delhi photos, §27)**. (Map embed is not an image asset.)

**Audience pages (`/for/*`)**
- Hero representing the segment (yoga teacher / spa professional / doctor / international student / beginner) · `kairali-for-{segment}.webp` · alt per segment · Stock-OK (FP better) · terms as above.

**Learn articles (`/learn/*`)**
- Topic image or **custom botanical line-art** (§3.6): doshas → an editorial diagram/illustration (not stock); herbs/oils → still life; "what is Panchakarma" → therapy shot · `kairali-learn-{topic}.webp` · topic-specific alt · Stock-OK / **illustration** · terms: `ayurveda herbs`, `ayurvedic oils`.

**Faculty (`/about/faculty`)**
- Consistent physician portraits, same grade/crop (3:4) · `dr-{name}-ayurvedic-physician-faculty.webp` · "Dr. {Name}, {BAMS/MD}, faculty at Kairali Guru" · **FP (mandatory)** + `Person`/`ImageObject` schema.

**Testimonials (`/testimonials`)**
- Student photos (with **consent**) or branded initial-avatars if no photo · `kairali-student-{firstname}-{country}.webp` · "{Name}, {programme} graduate from {country}" · **FP / avatar**.

### 28.8 First-party shot list (give this to your photographer — capture at both locations)
**Kerala healing village:** architecture wides (laterite/brick amid greenery); the NABH hospital building; medicinal-garden rows; therapy rooms set up (Abhyanga table, Shirodhara stand, Kizhi/steam); **physicians teaching students**; students practising hands-on; herb / medicated-oil / **copper-vessel** still lifes; an Ayurvedic meal; candid warm learning moments; campus paths and details. **Delhi centre:** exterior + signage; the classroom/practical space; a session in progress. 
**How to shoot:** warm natural daylight; consistent earthy grade (match the palette); both **landscape and portrait** crops of key scenes; ≥ 3000px; steady/clean. **Consent/releases:** get **written model releases** from every identifiable student/patient (reuse rights **and** DPDP privacy compliance) before publishing.

### 28.9 What to send me (images)
Point me to your **existing image library** (Drive/folder) — I'll map each asset to the slots above, flag gaps, and hand your photographer a precise shot list for only the missing ones. And confirm whether the team will **shoot first-party** (recommended) or wants me to assemble a **royalty-free stock set** with exact links per slot as the interim.

---
---

# PART V — Build hygiene, content integrity & deployment (Antigravity operating notes)

## 29. How to run this in Antigravity + non-negotiable hygiene

**Taste-skill install (exact command):** `npx skills add Leonxlnx/taste-skill` — run this once, then use it for design (per §21). (This is the "taste-skill" referenced throughout.)

**Deployment — SELF-HOST, not Vercel (important).** Antigravity's default flow deploys to Vercel; **override it.** kairali.guru is **self-hosted at Kairali Healing Village infrastructure** (§2). Configure Next.js for self-hosting — **standalone output (Node/Docker)** or **static export** — served behind **Cloudflare** on Kairali's server. Use **GitHub for source control + CI**, but the **deploy target is Kairali's infra, not `vercel.app`.** Do not approve any paid-hosting/domain purchase step.

**Repository hygiene (private + no secrets):**
- Repo is **private**.
- **`.gitignore`** all secrets before the first commit: `.env*`, API keys/tokens, service-account JSON, CMP/analytics/ad credentials, and the `/uploads`, brand-source docs, and original hi-res image files (don't commit sensitive source material).
- **Scan for secrets before every push** (no keys/tokens/passwords in the tree). Never commit account IDs as plaintext — use environment variables.

**Content integrity (never fabricate — compliance + trust safeguard):** Antigravity must **never invent** faculty names or credentials, accreditations, certifications, testimonials/reviews, course curricula, hours, dates, fees, coordinates, distances, or venue details. Where a value is unknown → insert a **clearly-labelled placeholder/stub and ask** (this mirrors the §13/§27 open items). Fabricated credentials or reviews are a legal and E-E-A-T risk, and fake `Review`/`AggregateRating` schema can trigger a Google manual action.

**Operating model (for whoever runs the agent):** paste each prompt/section as **one self-contained block**; approve tool/command permissions when Antigravity **explains** them (use "allow always" only for repeated safe build actions); if an error appears, **paste the error back and ask Antigravity to explain it in plain words, fix it, and retry**. Work **phase by phase** (§11), commit per phase.

**Model selection:** use a **capable model for architecture, i18n, schema, and design phases**; a faster/cheaper model is fine for repetitive page-instance generation. (A low-tier "Flash" model is enough for a one-page site but under-powered for this 40-page multilingual build — don't default to it for the whole project.)

---
---

# PART VI — Error pages, redirects & the KTAHV relationship

## 30. Error pages & redirects (2026 best practice)

Backed by Google (John Mueller, Martin Splitt) and the SEO/Reddit consensus — the short version: **404s are normal and not a penalty; the mistake is mishandling them.**

- **Custom 404 — yes, build a good one.** On-brand and *helpful*, returning a proper **404 status** (never 200). Include: a clear "page not found" message in the brand's calm voice, a **search box**, links to Home + the main sections (Courses, Panchakarma, Kerala, Learn, Enquire), and 2–3 popular links. A tasteful, warm 404 fits the premium feel. **Localize per locale**; `noindex`.
- **Do NOT auto-redirect all 404s to the homepage.** This is the key catch: a blanket 404→homepage redirect creates a **soft 404** (200 status, no relevant content) — Google (Mueller/Splitt) and the SEO community are unanimous that it **hurts UX and SEO**, wastes crawl budget, hides real breakages, and gives **zero** ranking benefit. A timed "redirecting you home…" is the anti-pattern.
- **What "send them to the right page" should actually mean:** on the 404, offer **smart suggestions the user clicks** (closest-match links, search) — the page still returns 404. The *only* legitimate automatic redirect is a **mapped 301** from a specific old URL to its specific new equivalent (below), which fires *before* a 404 happens.
- **301 redirect map (migration):** map every legacy training URL (the old KTAHV `.aspx` pages — e.g. `level-one-advance-...aspx`, `intensive-ayurveda-training-program.aspx`) **one-to-one to its closest real new page** on kairali.guru — never to the homepage. Use **301 (permanent)**, not 302, to preserve link equity.
- **410 (Gone)** for pages permanently removed with no equivalent (speeds de-indexing).
- **Monitor** 404s in Search Console (+ Screaming Frog/Ahrefs); add a targeted **301** for any 404 that has inbound links or real traffic (reclaim equity).
- **Also:** a friendly **500** page on the same shell; error pages must keep the header/footer + language switcher intact and not break the layout.

## 31. Relationship to KTAHV (dedicated portal, cross-linking & canonical)

kairali.guru is the **dedicated education portal** for training programmes that **also appear on the healing-village site, ayurvedichealingvillage.com** (where "Kairali Guru" already exists as the yoga/learning sub-brand). Handle the two-site relationship deliberately:

- **Canonical / no duplicate dilution:** don't publish identical programme copy on both domains competing for the same terms. **Make kairali.guru the canonical home for the *training* programmes**; on KTAHV, keep a short training teaser that **links to kairali.guru** as the dedicated portal. (This portal's copy is authored fresh — see the content pack — not copied from KTAHV.)
- **Cross-link both ways:** kairali.guru links to the healing village for the clinical/retreat context and treatments (ayurvedichealingvillage.com); KTAHV training pages point learners here.
- **Real programme source-of-truth (verified from KTAHV — use, don't fabricate):**
  - **Intensive Ayurveda Training (WAP-HV)** — basics + 5 therapies (Abhyangam, Shirodhara, Podikizhi, Udwarthanam, Kativasti); for spa/wellness professionals, managers, therapists, doctors, dieticians.
  - **Level-One Advanced Ayurveda Training for Wellness Professionals (AATP 1-HV)** — Kairali's most sought-after; basic wellness consultations + performing therapies; theory + practical; ~10-day residential in Kerala.
  - **Advanced Ayurveda Lifestyle Consultant & Therapist Training (AALCT-HV)** — practitioner certification; theory + hands-on + expert guidance; graduates may be considered for Ayurvedic Wellness Consultant roles at Kairali centres.
  - **Yoga Teacher Training** → International Yoga Teacher certification (Vedic philosophy, postures, breathwork, meditation, diet).
  - Tiered depth: 5 therapies → 6 core + Dinacharya/Ritucharya/anatomy → advanced (Prakriti analysis, lifestyle disorders, 9 therapies).
  - Teaching: theory by Ayurvedic Doctors; practicals by Senior Ayurvedic Trainers & Doctors. **Certification body:** Kairali Institute of Panchakarma Therapies / Kairali Ayurvedic Centre Pvt Ltd.
  - Locations (current, per client): **Kerala (residential, stay included) + Delhi (non-residential).** Legacy Mumbai listing excluded.
  - Enrol: valid photo ID + 2 passport photos.
  - **CONFIRMED CURRENT PRICES** (live page, updated 2026-07-08; all **include accommodation + food**, Kerala residential; USD indicative): OAP-HV 1-day/3h ₹18,400 ($307) · TAP-HV 3-day/9h ₹55,200 ($921) · WAP-HV 5-day/15h ₹92,000 ($1,535) · AATP1-HV 10-day/40h ₹184,000 ($3,070) · AALCT-HV 20-day/80h ₹368,000 ($6,140). Full course content in **COURSE_CONTENT_5LANG_2026-07-09.md**. Note: the KTAHV training page is `noindex` → kairali.guru is cleanly the canonical indexed home for training.
- **Image constraint (updates §28):** photography/videography is **not permitted during practical training sessions** — practical-session imagery must be Kairali-approved first-party only; don't shoot or source it freely.

---
---

# PART VII — Real programmes, migration & 301 redirect map (from the live old kairali.guru)

## 32. Real programme ladder & migration facts (verified from the old kairali.guru site)

**The old kairali.guru is being replaced by this build.** Its real programmes, addresses, and testimonials are below — **use these; they supersede any earlier invented course names** (the earlier `/courses/panchakarma-therapist-training`, `/online-ayurveda-course`, `/diploma-…` placeholders are replaced by the real ladder). Panchakarma stays as an *explainer pillar*; the sellable programmes are these:

| Programme | Code | Duration | For | New slug (canonical) |
|---|---|---|---|---|
| One-Day Ayurveda Workshop | OAP | **1 day** | Awareness intro to Ayurveda | `/courses/one-day-ayurveda-workshop` |
| Three-Day Short-Term Certificate | TAP | **3 days** | Detailed introduction | `/courses/three-day-ayurveda-certificate` |
| Intensive Ayurveda Training | WAP | **5 days** | Spa/wellness professionals | `/courses/intensive-ayurveda-training` |
| Level-One Advanced (Wellness Professionals) | AATP-1 | **10 days** | Master all basic Ayurveda therapies | `/courses/level-one-advanced-ayurveda-training` |
| Advanced Lifestyle Consultant & Therapist | AALCT | **20 days** | Master the full therapy service list | `/courses/advanced-lifestyle-consultant-therapist-training` |
| Yoga Teacher Training | — | [confirm] | → International Yoga Teacher cert | `/courses/yoga-teacher-training` |

- **Format:** residential **intensives** (N days), each day = theory + hands-on practical; taught by Ayurvedic Doctors + Senior Trainers. **Certificate by Kairali Institute of Panchakarma Therapies.** *(Not "X days per week" — they are consecutive-day intensives.)*
- **No online course existed on the old site** (all residential) — if you now offer online, add it; otherwise don't imply one.
- **Delhi address (fills the §27 TODO — confirm it's the training venue):** Kairali Ayurvedic Group, **D-130, Block D, Ambedkar Colony, Mehrauli, New Delhi 110030**; **coords 28.507966, 77.181398**; phone **+91-9555156156**. Delhi = **non-residential**.
- **Real testimonials (already published on the old site — reuse; confirm consent to keep):** Tessy Pacheco (Spain) — "the authentic platform to learn Ayurveda without losing its traditional values"; Heena C. Sehgal (Gurgaon); Arti Joshi (Canada).
- **Email — DECISION NEEDED:** old kairali.guru used **info@kairali.guru**; the group standard is **info@kairali.com**. Pick one for the portal (recommend `info@kairali.guru` for the dedicated domain, or `info@kairali.com` for group consistency). Don't assume.
- **Lineage confirmed:** the old footer reads "© Kairali Ayurvedic Group **Since 1908**" — so the 1908 framing is correct (1989 = the Ayurvedic Centre entity; 1908 = the group lineage).
- **Remaining gap:** **current prices, accommodation cost, dates** — not shown on the old site; legacy KTAHV prices are 2019–2020 (**do not reuse**). Send these to finish the course/fee pages.

## 33. 301 redirect map (migration — configure so old URLs auto-forward)

**All 301 (permanent).** Map each old kairali.guru `.aspx` URL to its closest new page — one-to-one, never to the homepage (§30). Old URLs verified live on the current site:

| Old URL (kairali.guru) | → New (301 permanent) |
|---|---|
| `/default.aspx` | `/` |
| `/one-day-ayurveda-workshop-program.aspx` | `/courses/one-day-ayurveda-workshop` |
| `/three-day-short-term-ayurveda-certificate-program.aspx` | `/courses/three-day-ayurveda-certificate` |
| `/intensive-ayurveda-training-program.aspx` | `/courses/intensive-ayurveda-training` |
| `/level-one-advanced-ayurveda-training-program-for-wellness-professionals.aspx` | `/courses/level-one-advanced-ayurveda-training` |
| `/advanced-ayurveda-lifestyle-consultant-and-therapist-training-program.aspx` | `/courses/advanced-lifestyle-consultant-therapist-training` |

- **Unknown legacy `.aspx`** → let it hit the custom **404** (don't blanket-redirect); monitor Search Console and add a mapping for any that has traffic/links.
- **Cross-domain:** the equivalent training `.aspx` pages on **ayurvedichealingvillage.com** should 301 to these kairali.guru pages too — but that's set on the **KTAHV WordPress side** (different domain), so hand that list to Deepu-web.

**Next.js config (drop into `next.config.js`) — locale-agnostic so it fires for the old un-prefixed URLs:**
```js
// next.config.js
module.exports = {
  async redirects() {
    return [
      { source: '/default.aspx', destination: '/', permanent: true },
      { source: '/one-day-ayurveda-workshop-program.aspx', destination: '/courses/one-day-ayurveda-workshop', permanent: true },
      { source: '/three-day-short-term-ayurveda-certificate-program.aspx', destination: '/courses/three-day-ayurveda-certificate', permanent: true },
      { source: '/intensive-ayurveda-training-program.aspx', destination: '/courses/intensive-ayurveda-training', permanent: true },
      { source: '/level-one-advanced-ayurveda-training-program-for-wellness-professionals.aspx', destination: '/courses/level-one-advanced-ayurveda-training', permanent: true },
      { source: '/advanced-ayurveda-lifestyle-consultant-and-therapist-training-program.aspx', destination: '/courses/advanced-lifestyle-consultant-therapist-training', permanent: true },
    ];
  },
};
```
**Or `vercel.json`** (if not using next.config): same pairs under `"redirects": [{ "source": "…", "destination": "…", "permanent": true }]`. **Self-host/nginx:** equivalent `return 301` rules. After launch, **submit the new sitemap** to Search Console/Bing/Yandex and watch the old URLs drop out of the index as the 301s are picked up.

---
---

# PART VII — Verified data from the live old site + redirect configuration

## 32. Verified facts (from the live old kairali.guru + KTAHV) — the old site is being REPLACED

The old `kairali.guru` is a live legacy `.aspx` site being replaced by this build. Real data pulled from it (use directly — no fabrication):

**The real programme ladder (durations confirmed):**
| Code | Programme | Duration | For |
|---|---|---|---|
| OAP | One Day Ayurveda Workshop | **1 day** | General awareness / intro |
| TAP | Three-Day Short-Term Ayurveda Certificate | **3 days** | Detailed introduction |
| WAP | Intensive Ayurveda Training | **5 days** | Spa & wellness professionals |
| AATP-1 | Level-One Advanced for Wellness Professionals | **10 days** | Master basic therapies (residential Kerala) |
| AALCT | Advanced Lifestyle Consultant & Therapist | **20 days** | Complete therapy list, master all services |

Plus **Yoga Teacher Training** (→ International Yoga Teacher) and an **online foundation**. These are the real `/courses/*` pages (supersede the placeholder course names in §6.2). Therapies: Abhyangam, Shirodhara, Podikizhi, Udwarthanam, Kativasti (foundation) → advanced (Prakriti analysis, lifestyle disorders, up to 9 therapies). Certificates: **Kairali Institute of Panchakarma Therapies / Kairali Ayurvedic Centre Pvt Ltd.**

**Delhi location (real — resolves the §27 TODO, but confirm it's the *training* venue vs corporate office):** Kairali Ayurvedic Group, **D-130, Block D, Ambedkar Colony, Mehrauli, New Delhi 110030**; **coordinates 28.507966, 77.181398**; phone **+91 9555156156**. (Non-residential.)

**Kerala (residential, stay + meals included):** coordinates 10.727275, 76.710507 (as before).

**Real testimonials (already public on the old site — confirm consent before reuse):** Tessy Pacheco (Spain) — "authentic platform to learn Ayurveda without losing its traditional values"; Ms Arti Joshi (Canada); Heena C. Sehgal (Gurgaon). Use as real `Review` schema; gather more.

**Lineage confirmed:** the old site's own footer reads "© Kairali Ayurvedic Group Since 1908" — so **"since 1908"** is correct (family lineage); "founded 1989 / 25+ years" refers to the modern Kairali Ayurvedic Centre. Keep the 1908 framing.

**Email discrepancy — decide:** the old site uses **info@kairali.guru**; the spec/standard is **info@kairali.com**. Confirm which the education portal should use (both are owned). Default to info@kairali.com unless you say otherwise.

## 33. Redirect configuration (old kairali.guru `.aspx` → new) — auto-forward, 301

Since the old site is replaced, every old URL **301-redirects** to its new equivalent (never to homepage — §30). Implement in **`next.config.js` → `async redirects()`** (works self-host and on Vercel):

```js
// next.config.js
async redirects() {
  return [
    { source: '/default.aspx', destination: '/', permanent: true },
    { source: '/one-day-ayurveda-workshop-program.aspx', destination: '/courses/one-day-ayurveda-workshop', permanent: true },
    { source: '/three-day-short-term-ayurveda-certificate-program.aspx', destination: '/courses/three-day-ayurveda-certificate', permanent: true },
    { source: '/intensive-ayurveda-training-program.aspx', destination: '/courses/intensive-ayurveda-training', permanent: true },
    { source: '/level-one-advanced-ayurveda-training-program-for-wellness-professionals.aspx', destination: '/courses/level-one-advanced-ayurveda-training', permanent: true },
    { source: '/advanced-ayurveda-lifestyle-consultant-and-therapist-training-program.aspx', destination: '/courses/advanced-lifestyle-consultant-therapist', permanent: true },
    { source: '/Turing.aspx', destination: '/', permanent: true },
    // Gurgaon/Mumbai are dropped → send any old location intent to the two live locations page
    // Catch-all for any other legacy .aspx with no equivalent:
    { source: '/:path*.aspx', destination: '/courses', permanent: true },
  ];
}
```
Notes: keep the mapped one-to-one redirects **above** the catch-all (order matters). Confirm final new slugs match the built `/courses/*` routes. `.aspx` can be case-sensitive on the old server — add lowercase + as-seen variants if logs show both. After launch, watch Search Console "Not found (404)" and add any missed legacy URLs. The full map is also in **`REDIRECTS_old_kairali_guru_to_new_2026-07-09.md`**.
