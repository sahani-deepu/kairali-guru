# Kairali Guru — Technical Handover & Go-Live Guide
### For the Kairali dev/ops team · everything needed to take kairali.guru live · 2026-07-10

This is the complete handover. Read top to bottom. Sections: current state → access → **deployment (2 options)** → **server setup** → **keys/env vars (where each goes)** → **code changes still needed** → **DNS + SSL** → **pre-launch checklist** → **go-live** → **post-launch** → **open decisions**.

---

## 1. Current state (what exists today)

- **The site is BUILT and LIVE on a staging URL:** `https://kairali-guru-website.vercel.app/` (all 5 languages, Arabic RTL working).
- **Stack:** Next.js 16 (App Router, TypeScript, Turbopack) · Tailwind · next-intl (locales: `en`, `de`, `fr`, `ar`, `ru`) · self-hosted fonts · JSON-LD schema · 149 routes.
- **Repo:** `https://github.com/AbhilashKairali/kairali-guru-website` (PRIVATE).
- **Done & verified:** unique meta titles/descriptions, JSON-LD (EducationalOrganization/Course/FAQ/Breadcrumb), robots.txt, llms.txt, sitemap.xml, hreflang, 301 redirects from old `.aspx` URLs, WhatsApp float button, `tel:` links, Lighthouse Performance ~87–89 / SEO 100.
- **NOT done yet (see §6):** enquiry form is not connected (posts to console), chatbot is a scripted mockup (not real Chatbase), analytics keys are empty, some course-detail/Learn prose still in English pending native review, DE/FR/AR/RU keyword optimization.

**Bottom line:** the site works and can go live on the domain now; the items in §6 are what make it *fully operational* (leads, tracking, chatbot). Decide what's "must-have for launch" vs "add right after."

---

## 2. Access needed (gather these first)

- **GitHub:** access to `AbhilashKairali/kairali-guru-website` (add team as collaborators).
- **Vercel:** the account currently hosting the staging deploy (if keeping Vercel).
- **Domain registrar / DNS** for `kairali.guru` (where the nameservers/DNS records live — likely the registrar or Cloudflare).
- **Google account** for Search Console / Analytics / Tag Manager / Business Profiles.
- **Chatbase account** (the one running the bot on ayurvedichealingvillage.com).

---

## 3. Deployment — choose ONE path

### ✅ Option A — Keep it on Vercel, point the domain at it (RECOMMENDED, fastest)
Vercel is purpose-built for Next.js; near-zero server maintenance, global CDN, auto-SSL, auto-deploy on every git push. **Minimal work: just DNS (see §7).** Best choice unless there's a policy reason to self-host.
- Steps: Vercel → Project → Settings → Domains → add `kairali.guru` and `www.kairali.guru` → Vercel shows the DNS records → add them at your DNS provider (§7) → done.

### ⚙️ Option B — Self-host on Kairali's own server (full control)
Only if you must host on your own infrastructure. Requires the setup in §4. You get full control; you take on OS/SSL/uptime maintenance.

> **Recommendation:** launch on **Option A** now to go live fast and reliably; migrate to Option B later if data-residency/control ever requires it. The codebase supports both (Next.js `standalone` output).

---

## 4. Server setup (ONLY if self-hosting — Option B)

**Server:** a Linux VPS/dedicated server (Ubuntu 22.04/24.04 LTS recommended), min ~2 vCPU / 4 GB RAM, public IP, ports 80 + 443 open.

**4.1 Install Node.js 20 LTS** (Next.js 16 requires Node ≥ 18.18; use 20):
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git
node -v   # should be v20.x
```

**4.2 Get the code & build:**
```bash
git clone https://github.com/AbhilashKairali/kairali-guru-website.git
cd kairali-guru-website
# create the env file FIRST (see §5) — NEXT_PUBLIC_* vars must exist at BUILD time
nano .env.production      # paste the variables from §5
npm ci
npm run build
```
> ⚠️ **Critical:** the `NEXT_PUBLIC_*` variables are baked into the build. They must be present **before** `npm run build`, not just at runtime. If you add/change a key, you must rebuild.

**4.3 Run it with a process manager (PM2):**
```bash
sudo npm install -g pm2
pm2 start npm --name kairali-guru -- start     # runs `next start` on port 3000
pm2 save
pm2 startup      # follow the printed command so it restarts on reboot
```
(Alternatively use the Next.js `standalone` output + Docker — the build already supports `output: 'standalone'`; a Dockerfile can be added if the team prefers containers.)

**4.4 Reverse proxy with Nginx** (serves the site on 80/443 → proxies to Node on 3000):
```bash
sudo apt-get install -y nginx
```
Create `/etc/nginx/sites-available/kairali.guru`:
```nginx
server {
    server_name kairali.guru www.kairali.guru;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```
```bash
sudo ln -s /etc/nginx/sites-available/kairali.guru /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

**4.5 SSL (HTTPS) with Let's Encrypt:**
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d kairali.guru -d www.kairali.guru
```
(Certbot auto-renews. Point the DNS A record to the server IP first — §7.)

**4.6 Auto-deploy on update:** set up a GitHub Action or a webhook/cron that on push runs `git pull && npm ci && npm run build && pm2 reload kairali-guru`. (Vercel does this automatically — a reason to prefer Option A.)

---

## 5. Environment variables / keys — the complete list & WHERE each goes

**Where to enter them:**
- **Option A (Vercel):** Vercel → Project → **Settings → Environment Variables → Production** (then Redeploy).
- **Option B (self-host):** in `.env.production` on the server (present **before** `npm run build`).

| Variable | What it is | Where to get it | Sensitive | Required for launch? |
|---|---|---|---|---|
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 Measurement ID `G-XXXXXXX` | analytics.google.com → Admin → Data Streams | No (public) | Recommended |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container `GTM-XXXXXXX` | tagmanager.google.com | No | Optional |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID | clarity.microsoft.com | No | Optional (great for UX) |
| `NEXT_PUBLIC_YANDEX_METRICA_ID` | Yandex Metrica counter ID (for Russia) | metrica.yandex.com | No | If targeting Russia |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta (Facebook/Instagram) Pixel ID | business.facebook.com → Events Manager | No | If running Meta ads |
| `NEXT_PUBLIC_CHATBASE_BOT_ID` | Chatbase agent/bot ID (same agent as KTAHV) | Chatbase dashboard → the agent → Connect/Embed | No | For the chatbot (§6.2) |
| `NEXT_PUBLIC_CMP_*` (if used) | Consent Management Platform key | Cookiebot / Usercentrics / CookieYes | No | If replacing the local consent modal |
| **Form/CRM** — see §6.1 | Endpoint or API key for enquiry submissions | Your CRM, or Formspree/Getform | **YES if API key** | **Yes — or leads go nowhere** |
| `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile (form spam protection) | dash.cloudflare.com → Turnstile | Secret = **YES** | Recommended with the form |
| `INDEXNOW_KEY` | IndexNow key (instant Bing/Yandex indexing) | self-generate a GUID; host the key file at root | No | Post-launch |

> **Security note:** `NEXT_PUBLIC_*` values are visible in the browser (fine for GA4/GTM/Clarity/Pixel/Chatbase IDs — those are public by design). **Do NOT** put any real *secret* (a CRM API key, Turnstile secret key, SMTP password) in a `NEXT_PUBLIC_` variable. Those belong server-side only — the enquiry form should POST to an internal Next.js API route that holds the secret key server-side (see §6.1).

---

## 6. Code changes still required before/around launch (prioritized)

### 6.1 🔴 Enquiry form — connect it (or leads are lost) — MUST for real traffic
Currently `onSubmit` just does `console.log` + shows success. Options:
- **Simplest:** create a form endpoint on **Formspree / Getform / Basin**, and POST to it. (Or your CRM's inbound webhook.)
- **Best practice:** add a **Next.js API route** (`/api/enquiry`) that receives the POST server-side and forwards to your CRM/email using a **server-side** key (never `NEXT_PUBLIC_`). Add Turnstile validation here for spam.
- Wire the same for the "Request prospectus" / consultation actions.
- Decide destination: your CRM, or a shared inbox (e.g. `info@kairali.com`), or WhatsApp handoff.

### 6.2 🟡 Chatbot — replace the scripted mockup with the real Chatbase agent
Currently a local keyword-matched mockup (not real AI). To make it the same agent as the healing village:
1. In **Chatbase dashboard**, open the agent used on ayurvedichealingvillage.com → copy its **`chatbotId`** → set as `NEXT_PUBLIC_CHATBASE_BOT_ID`.
2. In Chatbase → the agent → **Settings → Security → Allowed Domains** → add `kairali.guru`, `www.kairali.guru`, and the vercel.app URL (else the widget **silently fails**).
3. In code, replace the mockup in `ChatbaseChatbot.tsx` with the real Chatbase embed, loaded **after cookie consent**, keeping the "you're chatting with an AI assistant" disclosure and RTL support.
4. (Persona/quality — e.g. naming it "Priya," no medical advice, WhatsApp handoff — is configured in the **Chatbase dashboard**, not the code.)

### 6.3 🟢 Schema polish (minor — clears Rich Results warnings)
- Change `addressCountry` from `"India"` to ISO code **`"IN"`** in all address schema.
- Add `streetAddress`: Kerala = `"P.O. Olassery, Kodumbu"`; Delhi = `"D-130, Block D, Ambedkar Colony, Mehrauli"`.
- Confirm **Course** schema is detected on course pages (provider + offers/price INR).

### 6.4 🟢 Remaining English on non-English pages (content completeness)
Still English on DE/FR/AR/RU (per the last audit): nav dropdown/footer labels, **course names**, Learn article bodies, and the deep course-syllabus prose. FAQ + Contact were localized. Two parts:
- **UI chrome + course names** → localize now (quick).
- **Learn articles + course-syllabus prose** → your **native speaker** finishes these (can be done on the live site).

### 6.5 🟢 Foreign-language keyword optimization (SEO)
Apply `keywords/KEYWORDS_DE_FR_AR_RU_2026-07-10.md` — put each market's real term ("Ayurveda-Ausbildung", "formation Ayurveda", "دورة الأيورفيدا", "обучение аюрведе") into the localized titles/H1s/first paragraphs. (Prompt is in that file.)

---

## 7. DNS & connecting the domain

**Where:** your DNS provider for `kairali.guru` (registrar or Cloudflare).

**Option A (Vercel):** in Vercel → Domains, add `kairali.guru`. Vercel gives you records — typically:
- Apex `kairali.guru` → **A record** to Vercel's IP (Vercel shows the exact value), or an ALIAS/ANAME.
- `www` → **CNAME** to `cname.vercel-dns.com`.
- **If DNS is on Cloudflare:** set these records to **"DNS only" (grey cloud, NOT orange/proxied)** — otherwise Cloudflare's proxy conflicts with Vercel's SSL and the cert fails. (This exact issue bit us before.)

**Option B (self-host):** point the apex **A record** of `kairali.guru` (and `www`) to your **server's public IP**. Then run certbot (§4.5) for SSL.

**Propagation:** DNS can take minutes to a few hours. Verify with `dig kairali.guru` or an online DNS checker.

---

## 8. Redirects & the old site

- The new site already 301-redirects the old `kairali.guru` `.aspx` URLs (in `next.config`). Once the domain points to the new deployment, these fire automatically. **Verify** a few after go-live (§10).
- **Cross-domain:** the same programmes exist on ayurvedichealingvillage.com. Its training page is `noindex`, so kairali.guru is cleanly canonical. Optional: on the KTAHV server, 301 its old training `.aspx` pages to the matching kairali.guru course pages (must be done on that server).

---

## 9. Pre-launch checklist (tick before pointing the domain)

- [ ] All required env vars entered (§5) and a **rebuild/redeploy** done afterwards.
- [ ] Enquiry form connected and **tested** (submit a test → confirm it arrives).
- [ ] Chatbase bot ID set + `kairali.guru` added to Chatbase Allowed Domains.
- [ ] Schema country code = `IN`; Rich Results Test shows Course/FAQ/Org valid (search.google.com/test/rich-results).
- [ ] Course prices correct on all 5 pages (₹18,400 / ₹55,200 / ₹92,000 / ₹1,84,000 / ₹3,68,000, "incl. accommodation + food").
- [ ] Only Kerala + Delhi referenced (no Gurgaon/Mumbai); 1908 lineage correct.
- [ ] Confirm **portal email** (info@kairali.com vs info@kairali.guru) and **Delhi training address** (see §12).
- [ ] Check on a **real phone** (mobile layout, menu, language switcher, WhatsApp button not overlapping chat).
- [ ] `git` commit author email is the **noreply** address (not `…@MacBook.local`) — else Vercel blocks the deploy.
- [ ] Legal pages present (privacy, terms, refund, accessibility) and consent banner works.

## 10. Go-live steps

1. Do the §9 checklist.
2. **Point `kairali.guru` DNS** at the deployment (§7).
3. Confirm **HTTPS** works (`https://kairali.guru` loads with a valid padlock).
4. Test: homepage in all 5 languages, `/ar` RTL, one course page (price shows), submit the enquiry form, click WhatsApp, open the chatbot.
5. Test 3 old `.aspx` URLs → confirm they 301 to the right new pages (`curl -I https://kairali.guru/intensive-ayurveda-training-program.aspx`).

## 11. Post-launch (do within the first days)

- [ ] **Google Search Console:** add + verify `kairali.guru`, submit `sitemap.xml`.
- [ ] **Bing Webmaster Tools:** add + verify, submit sitemap. Enable **IndexNow**.
- [ ] **Yandex Webmaster + Metrica:** add + verify, submit sitemap (for Russia).
- [ ] **Google Business Profiles:** create/verify for **Kerala** and **Delhi** locations (local SEO).
- [ ] Verify **analytics** is recording (GA4 real-time, Clarity sessions).
- [ ] Confirm **Meta CAPI / Google Ads conversions** if ads will run.
- [ ] **Native-speaker polish** on DE/FR/AR/RU (course prose + Learn articles) — can iterate live.
- [ ] Apply the **DE/FR/AR/RU keyword optimization** (§6.5).
- [ ] Monitor Search Console "Not found (404)" for any legacy URL missed by the redirect map; add 301s as needed.

---

## 12. Open decisions the business must confirm (blockers for full correctness)

1. **Delhi training address** — the D-130 Mehrauli address is the **corporate office**. Is training delivered there, or at another Delhi venue? (Affects location page + schema + Google Business Profile.)
2. **Portal email** — use `info@kairali.com` (group standard) or `info@kairali.guru` (old site used this)? Both are owned. Standardize one across the site.
3. **Booking flow** — the live programmes book via `bookings.ayurvedichealingvillage.com`. Should kairali.guru (a) send bookings there, or (b) use its own enquiry→advisor flow (recommended for premium markets, with the booking link as the direct option)?
4. **Testimonials** — confirm consent to reuse the existing student testimonials (Spain/Canada) on the new site.
5. **Consent platform** — keep the built-in consent modal, or plug in a formal CMP (Cookiebot/Usercentrics) for stricter EU compliance?

---

## 13. Reference files (in the project `content/` + `keywords/` folders)
- `COURSE_CONTENT_5LANG…` — real programmes + prices (all languages)
- `WEBSITE_CONTENT_5LANG…`, `WEBSITE_CONTENT_5LANG_TRAVEL_VISA…`, `BUYER_JOURNEY_AND_LOGISTICS_5LANG…`, `LOCATIONS_kerala_delhi_5LANG…` — page copy in 5 languages
- `REDIRECTS_old_kairali_guru_to_new…` — the 301 map
- `IMAGE_LINKS…`, `PREVIEW_MEDIA…` — media sources (swap for first-party photography over time)
- `keywords/KEYWORDS_DE_FR_AR_RU…` — native keyword map for the 4 non-English locales
- `instructions/kairali_guru_build_spec.md` — the full build spec (design system, schema, compliance, analytics, everything)

**Priority order to finish:** (1) connect the form, (2) real Chatbase + allowed domains, (3) schema `IN` fix, (4) point the domain + SSL, (5) enter analytics keys, (6) submit sitemaps, (7) native-language polish + keyword optimization. Items 1–4 = launch; 5–7 = right after.
