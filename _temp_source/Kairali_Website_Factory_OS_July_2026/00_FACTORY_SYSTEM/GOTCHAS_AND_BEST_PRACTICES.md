# Gotchas & Best-Practices Library
### The hard-won wisdom that stops the Website Factory from breaking · living document · v1.0 · 2026-07-10

Every entry is a real lesson from the kairali.guru build. Format: **symptom → cause → fix.** Add to this file every time something breaks (see the Master Playbook §5). Shared across ALL sites — a lesson learned once protects every future build.

---

## A. Antigravity (the builder) — behaviour

**A1. "It just replies with text and never builds anything."**
- *Cause:* it's being treated like a chatbot, and/or **no Project with a folder is set up** — the agent has no filesystem to act on.
- *Fix:* create a **Project** (left sidebar → folder-with-+ → New Project → **Add Folder** → select the project folder → Create). Then paste the prompt as a **task** in the Agent Manager, and **approve** its permission prompts. The tell that it's working: it creates files and asks "Allow this action?" — not paragraphs of text.

**A2. It says "✅ done / the build compiles successfully" but nothing was built.**
- *Cause:* agents over-claim; it may skip the actual work and jump to a success summary.
- *Fix:* **demand proof.** No "done" is accepted without: a **localhost/live link that opens the real site**, `npm run build` real terminal output, `package.json` + `src/app` existing, `curl` of the page. If it can't show a working link, it isn't built.

**A3. It invents IDs/values (e.g. a fake `GTM-XXXX`, a made-up address).**
- *Cause:* it fills gaps with plausible-looking fabrications.
- *Fix:* explicit rule in every build prompt: **never invent IDs, keys, prices, or facts — read from env vars / the content files, or leave empty and tell me.** Then **grep** for fake IDs in QA.

**A4. It claims a task is complete after fixing only one instance.**
- *Cause:* it fixes the example you gave and stops.
- *Fix:* the Checker audits **all** cases (e.g. "check every page type in all languages," "grep the whole codebase"), not the one it demonstrated.

**A5. It force-pushed with `--force` instead of `--force-with-lease`.**
- *Cause:* it picks the blunt command.
- *Fix:* fine on a solo repo, but instruct `--force-with-lease` as the default; avoid habitual force-pushing.

**A6. Scratch/helper files (`.py`, `append_*.js`, `scratch_*`) appear in its actions.**
- *Cause:* it writes throwaway scripts in its **private brain folder** (`~/.gemini/antigravity-ide/brain/.../scratch/`) — outside your repo. Harmless.
- *Fix:* only worry if such a file lands **inside the project or git**. QA check: `git ls-files | grep -E "scratch|append_|\.py$"` should be empty.

**A7. It runs long/background steps and reports before they finish.**
- *Fix:* have it **wait for and paste the real output** (build result, curl) rather than "I'll report once it's done."

**Operating rule for the whole category:** Antigravity is a fast builder but an unreliable self-reporter. **Claude/GPT checks every output with machine evidence.**

---

## B. Git & deployment

**B1. Vercel: "deployment blocked — commit author email is not valid."**
- *Cause:* git stamped commits with the machine default (`user@MacBook.local`), which isn't a real GitHub email.
- *Fix:* set a valid/noreply email in git (not just in GitHub settings — that only covers browser edits): `git config --global user.email "<id>@users.noreply.github.com"`, then `git commit --amend --reset-author --no-edit` and `git push --force-with-lease`. Get the noreply address from GitHub → Settings → Emails (with "Keep my email private" on).

**B2. GitHub commits don't link to the account / no green graph.**
- *Cause:* same fake email — GitHub can't match it to the user.
- *Fix:* same as B1. Verify: the latest commit shows the user's avatar in the repo.

**B3. Custom domain SSL fails behind Cloudflare.**
- *Cause:* the domain's DNS records are **proxied (orange cloud)**, which conflicts with Vercel's certificate issuance.
- *Fix:* set the Vercel DNS records to **"DNS only" (grey cloud)** in Cloudflare.

**B4. `NEXT_PUBLIC_*` env var change didn't take effect.**
- *Cause:* `NEXT_PUBLIC_*` values are **baked in at build time**, not read at runtime.
- *Fix:* after adding/changing one, **rebuild/redeploy**. On self-host, the vars must exist *before* `npm run build`.

**B5. Vercel auto-redeploys on every push** — no separate deploy step. Don't hunt for a "deploy" button; just push and wait ~1–2 min.

---

## C. SEO / AEO (ranking)

**C1. Redirecting all 404s to the homepage.**
- *Cause:* seems helpful; is actually a **soft 404** (200 status, no matching content) — Google penalizes it, wastes crawl budget, no benefit.
- *Fix:* build a **helpful custom 404** (real 404 status, search + top links). Auto-redirect **only** specific old→new URLs via mapped **301s**; never a blanket 404→home.

**C2. Content injected by JavaScript (not in raw HTML).**
- *Cause:* client-only rendering — crawlers/AI may not see it.
- *Fix:* **server-render** the important content (SSR/SSG). Verify with `curl` that H1 + copy are in the raw HTML.

**C3. Every page shares the same `<title>`/meta.**
- *Cause:* a single global fallback instead of per-page metadata.
- *Fix:* unique, keyword-led title + description **per page and per language** (`generateMetadata`). Verify 5 pages have 5 different titles.

**C4. Missing/incorrect hreflang → international pages don't rank right.**
- *Fix:* reciprocal hreflang for every locale + `x-default`, absolute URLs. `curl` and check the block.

**C5. Building for retired rich results.**
- *Cause:* stale training data (e.g. FAQ rich results were retired May 2026; HowTo gone).
- *Fix:* **JSON-LD only**; keep FAQPage schema as an AI-trust signal but don't expect the rich result. **Verify current rich-result support on Google Search Central** at build time.

**C6. Schema warnings: "invalid country code," "missing streetAddress."**
- *Fix:* `addressCountry` = **ISO code** (e.g. `IN`), not the word "India"; add `streetAddress`. Validate with Google Rich Results Test (errors block; warnings are optional).

**C7. Not verifying schema — trusting "it's valid."**
- *Fix:* run the **Rich Results Test** on home/course/FAQ; scroll to "detected items" and confirm the *expected type* is listed (e.g. Course on a course page), not just Organization.

**C8. llms.txt / AI-crawler files oversold.**
- *Reality:* ship `llms.txt` + allow AI search crawlers in robots.txt (cheap, future-proofing), but the real AEO wins are **content + schema + entity consistency + SSR**, not the file.

---

## D. Internationalization (i18n)

**D1. Machine-translating English → non-native, doesn't rank.**
- *Fix:* **author** each language to its market; use that market's **real search terms** (native keyword research). E.g. German = **"Ayurveda-Ausbildung"** (not a translation of "training"); French = **"formation"**; Arabic = **"دورة/دبلوم"** (two spellings of the topic word); Russian = **"обучение/курсы"**. Keep domain-specific proper terms (e.g. Sanskrit) untranslated.

**D2. Menu translated but page bodies still English (or vice-versa).**
- *Cause:* nav labels came from translation files but body content didn't (or links dropped the locale prefix).
- *Fix:* audit **every element** per language — nav, footer, buttons, **product/course names**, body, forms. Use the locale-aware `Link`, not the raw framework link, so navigation keeps the language prefix.

**D3. Locale falls back to English on server-rendered pages.**
- *Cause (Next.js + next-intl):* the locale param resolves async and arrives undefined on some server requests.
- *Fix:* await the request-locale in the i18n config; don't rely on a sync param.

**D4. RTL (Arabic/Hebrew) not truly mirrored.**
- *Fix:* `dir="rtl"` + **CSS logical properties**; mirror nav/carousels/directional icons; **verify on a real device** (RTL bugs hide on mobile). Human gate — an AI can't confirm it looks right.

---

## E. Content integrity & media

**E1. Fabricated faculty/prices/testimonials/accreditations.**
- *Fix:* **never.** Pull real facts from the client's existing sites/docs; otherwise **stub + ask**. (kairali.guru: real prices + programs came from the client's live pages, not invention.)
- *Watch:* legacy pages may have **stale prices** — confirm current figures; don't reuse old ones.

**E2. AI-generated or hotlinked images.**
- *Fix:* **never AI-generate; never hotlink** (stock sites block it and it hurts performance). Priority: **first-party photography > licensed stock (downloaded to `/public`) > illustration.** Missing image → labelled placeholder + brief.
- *Client-specific watch:* some venues **forbid photography during sessions** — practical-session images must be client-approved first-party.

**E3. Stock "spa/wellness" clichés cheapen a premium brand.**
- *Fix:* ban generic candle/lotus/relaxed-model stock; prefer authentic, on-location, culturally-appropriate imagery.

**E4. Naming/alt conventions.**
- *Fix:* keyword-first, lowercase-hyphen, WebP/AVIF, responsive; alt = "{who} {doing what}, at {place}", **localized per locale**; decorative → empty alt.

---

## F. Conversion & functionality (revenue)

**F1. Enquiry form "submitted" but goes nowhere (`console.log`).**
- *Cause:* no backend endpoint wired.
- *Fix:* connect to a form service (Formspree/Getform) or an **internal API route** that forwards to CRM/email with a **server-side** key (never `NEXT_PUBLIC_`). **Don't run ads until leads land somewhere.** Add spam protection (Turnstile) server-side.

**F2. Chatbot looks like AI but is scripted keyword-matching.**
- *Fix:* be honest — either label it clearly, or wire the **real** provider (e.g. Chatbase) with the real bot ID. **Provider gotcha:** the widget **silently fails** unless the live domain is added to the provider's **Allowed Domains**. Persona/guardrails/no-medical-advice live in the **provider dashboard**, not the code.

**F3. Phone numbers not clickable; WhatsApp button overlapping the chat bubble.**
- *Fix:* wrap numbers in `tel:` anchors; a floating WhatsApp button (real `wa.me` link, works without JS) **stacked clear of** the chat launcher; mirror position in RTL. **Two channels on purpose:** WhatsApp = human, chatbot = AI.

**F4. Dead-end thank-you pages.**
- *Fix:* `noindex, follow`; keep the lead moving (WhatsApp/links); no exit/timed popups on premium sites (bad UX + compliance risk).

---

## G. Compliance

**G1. Analytics/marketing scripts firing before consent (EU).**
- *Fix:* geo-aware consent; **block non-essential scripts until consent**; Reject as easy as Accept; Consent Mode where relevant.

**G2. AI chatbot without disclosure (EU AI Act).**
- *Fix:* clearly state "you're chatting with an AI assistant."

**G3. Accessibility (EAA/WCAG) — overlay widgets.**
- *Fix:* build to **WCAG 2.2 AA** + a real accessibility statement; **no overlay-widget shortcuts** (they don't satisfy the law).

**G4. Same content on two client domains competing.**
- *Fix:* pick **one canonical home** per program; cross-link, don't duplicate identical copy. (kairali.guru is canonical for training; the healing-village training page is `noindex`.)

---

## H. Process / meta

**H1. One AI checking its own work → misses its own errors.**
- *Fix:* Checker is always a **fresh session / the other model / a human**.

**H2. Big prompts overflow context / "break down."**
- *Fix:* **micro-tasks**, one focused output each; assemble at phase end.

**H3. Version-suffixed filenames (`spec_v2_final_FINAL.md`) confuse the builder.**
- *Fix:* stable names for source-of-truth (overwrite, version inside, git history); dated names only for point-in-time snapshots.

**H4. Trusting AI on things only a human can judge.**
- *Fix:* explicit **human gates** for: does it look premium, mobile, RTL, native-language quality, business-fact confirmation.

**H5. Stale best-practices baked in.**
- *Fix:* **web-search current docs** at P1.8 + P2.4 and whenever a tool errors oddly. Record the verification date.

---

*Add the next lesson here the moment it happens. This file is the compounding asset of the Website Factory.*

---
---

## I. Research-backed failure modes (from the literature, not just our build)
*Sources in `KNOWLEDGE_BASE_research_expert_future.md`. These are the industry-wide failures — avoid them by design.*

**I1. Context decay / exhaustion (the #1 documented agent failure).**
- *Cause:* agents are stateless; as the codebase grows past the context window, they **forget earlier decisions and silently contradict them**.
- *Fix:* **micro-tasks**; keep the **spec in the repo as the source of truth**; **re-load the spec into every new session**; single-writer rule for hotspot files (routes/configs).

**I2. AI-generated code has real security vulnerabilities.**
- *Evidence:* ~40% of AI code in security-sensitive contexts is vulnerable (Pearce et al., IEEE S&P 2023); 110k+ surviving AI-introduced issues found in prod (arXiv 2026); large shares rated BLOCKER/CRITICAL (SonarQube). Unit tests miss architectural/contract/security defects.
- *Fix:* a **mandatory security review** before launch (Playbook §13): `npm audit`, secret scan, input validation/sanitization on API routes, no secrets in `NEXT_PUBLIC_*`, security headers, escalate anything touching auth/PII.

**I3. Model routing backwards (cheap model on the spec).**
- *Cause:* saving on the wrong step.
- *Fix:* **strong model for spec/architecture, fast/cheap for iteration.** Cheap-on-spec costs more in correction loops than it saves.

**I4. Over-trust / "Dunning-Kruger on steroids."**
- *Cause:* AI output *looks* great; non-experts can't see the rot until it "falls apart" (Addy Osmani).
- *Fix:* the Checker must **know what good looks like** and verify with evidence + human gates. Never ship on vibes.

**I5. One-shotting a whole build → a "jumbled mess."**
- *Cause:* too much in one prompt → inconsistency/duplication ("like 10 devs who never talked").
- *Fix:* divide and conquer; assemble at phase end. (This is why the pipeline is micro-tasked.)

**I6. Ranks on Google but invisible in AI answers.**
- *Cause:* the SEO↔AI-citation overlap has collapsed (<20%); ~90% of ChatGPT citations aren't in Google's top 20; most prompts don't match keywords.
- *Fix:* build to the **GEO standard** (answer-first intro, a stat per ~150–200 words, expert quotes w/ attribution, cited sources, info density, unique first-party data, topic clusters, E-E-A-T) — KB A3.

**I7. Publish-and-forget → AI visibility decays (the 3-month citation cliff).**
- *Fix:* a **content-refresh cadence**; update priority pages within ~90 days.

**I8. On-page only → under-cited.**
- *Cause:* brands are cited 6.5× more via third-party sources; PR lifts citations ~239%; ChatGPT leans on Wikipedia (~48% of factual answers), Perplexity on Reddit (~47% of sources).
- *Fix:* an **off-page/entity program** (PR, directories, community, Wikipedia/entity consistency, GBP, `sameAs`) — KB A3, Playbook §14.

**I9. Measuring only rankings/CTR → can't prove (or grow) revenue.**
- *Fix:* track **AI-referred sessions** (separate GA4 channels) + **AI citation frequency/share of voice** (Otterly/Peec/LLMrefs/Profound) + GSC AI-Overview impression share + branded search — Playbook §14.
