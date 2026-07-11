# Kairali Guru — Master build + deploy prompt (checklist-driven)
**v3.0 · 2026-07-09 · paste this WHOLE file into Antigravity as the task**

You are building **kairali.guru** — a premium, multilingual (EN/DE/FR/AR/RU) Ayurveda training & certification website. Work through the **checklist** below **in order**. This one prompt covers everything: organize → build → verify → GitHub → Vercel.

## How you must work (the whole time)
- **Keep and show a checklist.** After finishing each item, reprint the checklist with each item marked **[x] done**, **[~] in progress**, or **[!] blocked** — so I always see where we are.
- **Find files by name.** They may be in one folder (e.g. `files/`) or subfolders — search the whole workspace. If an exact name isn't found, use the closest match. If something is truly missing, tell me exactly which file and pause.
- **Explain simply. Don't make me use the terminal.** If anything errors: read it, explain it in plain words, fix it, and retry.
- **Ask before big actions** (installing tools, moving files, GitHub login, deploying) and wait for my "yes".
- **The spec governs everything.** If this prompt and the spec conflict, the spec wins. Don't invent scope.

---

## ✅ THE CHECKLIST

### A — Set up
- [ ] **A1.** Organize the files into folders (move by name; closest match if needed): `instructions/` ← build spec + sitemap/strategy; `keywords/` ← keywords; `content/` ← the 5-language content files + redirects + preview-media + image-links. Leave this prompt + deploy notes at the top level.
- [ ] **A2.** Confirm you can open and READ each of these; list any you can't find: **`kairali_guru_build_spec.md`** (the master spec — governs everything), `kairali_guru_sitemap_and_seo_strategy.md`, `kairali_guru_ayurveda_keywords.md`, `COURSE_CONTENT_5LANG_2026-07-09.md` (real programmes + prices), `WEBSITE_CONTENT_5LANG_2026-07-09.md`, `WEBSITE_CONTENT_5LANG_TRAVEL_VISA_2026-07-09.md`, `BUYER_JOURNEY_AND_LOGISTICS_5LANG_2026-07-09.md`, `REDIRECTS_old_kairali_guru_to_new_2026-07-09.md`.
- [ ] **A3.** Read the build spec fully. Briefly list back the main sections so I know you have it.

### B — Build (per the spec)
- [ ] **B1.** Scaffold **Next.js 15** (App Router, TypeScript) + **Tailwind v4** + **shadcn/ui** + **next-intl** (locales EN/DE/FR/AR/RU, Arabic = RTL) + **Motion** + **Phosphor icons**. Install the design skill: `npx skills add Leonxlnx/taste-skill`.
- [ ] **B2.** Build the design system, global components (header/footer/nav/language switcher), i18n + hreflang, the SEO/JSON-LD system, consent + analytics hooks, and the root files (robots.txt, llms.txt, sitemap) — per the spec.
- [ ] **B3.** Build the page templates ONCE (the archetypes in the spec), then create every page as an instance.
- [ ] **B4.** Fill page copy from the **content files, in all 5 languages** — do NOT machine-translate; use the authored text. Use the **real course prices** from `COURSE_CONTENT`.
- [ ] **B5.** Add the **301 redirects** from the redirects file into `next.config.js`.
- [ ] **B6.** Media: if `/public/preview/` has images/video, wire them in; otherwise use clearly-labelled placeholders.

### C — Verify (ALL must pass before deploying)
- [ ] **C1.** `npm run build` succeeds with **no errors**.
- [ ] **C2.** Run it locally, give me the **localhost link**, and confirm every page opens and all 5 languages work (including Arabic right-to-left).
- [ ] **C3.** No secrets in the project. `.gitignore` excludes: `node_modules`, `.next`, `.env*`, any `/uploads`, the brand/spec `.md` docs, and original hi-res images.
- [ ] **C4.** Show me the checklist all green and **wait for my "go"** before deploying.

### D — GitHub (only after C is verified)
- [ ] **D1.** Check I'm signed in to GitHub CLI; if not, show the login link + one-time code and wait.
- [ ] **D2.** Create a **PRIVATE** repo `kairali-guru-website`, push to `main`, give me the repo link, and confirm it's private and no secrets/PDFs were uploaded.

### E — Vercel + domain (after D)
- [ ] **E1.** Guide me: open vercel.com → Continue with GitHub → **Import** `kairali-guru-website` → framework **Next.js** → **Hobby/free** plan.
- [ ] **E2.** BEFORE I deploy: list the **Environment Variables** to add in Vercel (GA4, GTM, Clarity, Yandex Metrica, Chatbase, CMP, Cloudflare/Turnstile, Meta Pixel, form/CRM endpoint) as placeholder names — I paste real values in Vercel, **never in code**.
- [ ] **E3.** Deploy; give me the **live vercel.app link**; confirm pages + languages work.
- [ ] **E4.** Connect **kairali.guru** (Settings → Domains); show the DNS records; if my DNS is on Cloudflare, tell me to set those records to **"DNS only" (grey cloud)** so SSL works. Confirm kairali.guru loads over HTTPS.

---

**Start now with A1, and show me the checklist after each section (A, B, C, D, E).** If at any point you can't proceed, tell me exactly what's blocking you.
