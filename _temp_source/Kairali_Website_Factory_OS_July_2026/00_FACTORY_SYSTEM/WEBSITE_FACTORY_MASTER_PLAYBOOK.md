# The Website Factory — Master Playbook (Operating System)
### Repeatable pipeline to build world-class, revenue-generating, multilingual websites with an intern + AI (Claude/GPT + Antigravity) · v1.0 · 2026-07-10

This is the operating system. It turns the one-off kairali.guru build into a repeatable, micro-tasked, maker-checker pipeline any intern can run with AI, ending in a live site on Vercel. Companion files: **`GOTCHAS_AND_BEST_PRACTICES.md`** (the wisdom that stops it breaking) and (to be built) a **Prompt Library** + **Project Tracker**.

---

## 0. First principles (never violate)

1. **Revenue is the north star.** Every site exists to generate traffic → leads/sales, and **secondary/cross-sell** beyond the primary brand. Research (keywords/AEO), content (buyer psychology + conversion flow), and QA (do the CTAs/forms actually work) all serve this. A page that ranks but doesn't convert has failed.
2. **Maker–Checker on everything.** No artifact ships on one AI's say-so. A **Maker** produces; a **different Checker** verifies against a checklist and **demands proof, not claims**. (See §3.)
3. **Trust the evidence, not the agent.** Antigravity (and any AI) will say "✅ done" when it isn't. The Checker accepts only: a localhost/live link, terminal output, `curl`'d HTML, a validated schema result, a Lighthouse score, or a grep result. "It's done" is not proof.
4. **Never fabricate.** No invented faculty, prices, testimonials, accreditations, dates, IDs, or stats. Use the client's real facts (their existing sites, documents) or **stub + ask**. Fabrication = legal + trust risk and it *will* surface.
5. **Localize, don't translate.** Non-English content is authored to each market's psychology and uses that market's **real search terms** (native keyword research), never machine-translated English.
6. **Verify against CURRENT best practices, every time.** Training data goes stale and tools change monthly. At set checkpoints, the AI **web-searches the current docs/standards** for the exact tools/standards in play (framework release notes, i18n lib, schema.org/Google Search Central, WCAG, AI-crawler conventions). (See §4.)
7. **Small tasks, clean handoffs.** Work is broken into **micro-tasks** each scoped to a single AI session so nothing overflows context or "breaks down." One task = one focused output = one check.
8. **The playbook self-improves.** Every break or new nuance is logged and folded back in. (See §5.)

---

## 1. Roles & tools

| Role | Who | Does |
|---|---|---|
| **Operator** | the intern (human) | runs the pipeline, pastes prompts, gathers client facts, makes the human-judgment calls, tracks progress |
| **Maker (brain)** | Claude **or** GPT | research, strategy, sitemap, spec, content, keyword research, and **checking** Antigravity's work |
| **Maker (builder)** | Antigravity | writes/edits the codebase, runs commands, deploys |
| **Checker** | a *fresh* Claude/GPT session, or the other model, or a human | verifies each artifact with proof; signs off or sends back |
| **Deployer** | client tech team | takes the handover live on Vercel + domain |

> The "brain" (Claude/GPT) and the "builder" (Antigravity) are **different tools on purpose** — the brain plans + checks, the builder executes. Never let the builder be its own checker.

---

## 2. The pipeline (6 phases → live site)

```
P0 Intake/Setup → P1 Research → P2 Architecture → P3 Content → P4 Build → P5 QA/Battle-test → P6 Handover/Deploy
        │              │              │              │            │             │                    │
     (human+AI)     (Claude)       (Claude)       (Claude)   (Antigravity)  (Antigravity fix     (Claude doc →
                                                              +Claude check)   +Claude audit)      tech team)
```

Each phase = a set of **micro-tasks** (below). Each micro-task has: an ID, a Maker, a Checker, an Output, "Done" criteria, and the **gotchas** to watch (full detail in the Gotchas file). **A phase does not start until the prior phase's assembly artifact is Checker-signed-off.**

---

### PHASE 0 — Intake & Setup
| ID | Micro-task | Maker | Checker | Output / Done when |
|---|---|---|---|---|
| P0.1 | **Project brief**: entity, goal, primary+secondary revenue model, target markets/languages, existing site URL(s), brand assets, known business facts, constraints (legal/brand) | Operator + Claude | Claude | A 1-page brief; all "need from client" items flagged |
| P0.2 | **Tool + account setup**: GitHub repo (private), Antigravity Project (folder added — see gotchas), Vercel, and the accounts checklist (analytics/consent/CRM/etc.) | Operator | — | Repo + Project exist; accounts list started |
| P0.3 | **Folder + naming conventions** set (see §6) | Operator | — | `instructions/`, `keywords/`, `content/` scaffolded |

### PHASE 1 — Research (Maker: Claude · Checker: fresh Claude/GPT + human)
| ID | Micro-task | Output / Done when |
|---|---|---|
| P1.1 | **Old-site teardown** — fetch/crawl the client's existing site(s); extract structure, URL list (for redirects), real facts (prices, addresses, programs), what works/fails | Old-site dossier + real-facts sheet + URL inventory |
| P1.2 | **Competitor discovery** — find 8–15 real competitors (global tier-1 + local); note who ranks and why | Competitor list with URLs |
| P1.3 | **Competitor teardown** — analyze their sitemap, positioning, content depth, schema, keyword targets; find the **gap/wedge** | Competitive analysis + positioning wedge |
| P1.4 | **Keyword research — English** — head/mid/long-tail + questions (AEO); map to intended pages | EN keyword map |
| P1.5 | **Keyword research — per non-EN market** (⚠️ one session per language) — the *real native terms* (verify vs live competitor sites in-language), not translations | One keyword map per language |
| P1.6 | **SEO/AEO gap + strategy** — what to build to rank + get cited by AI engines | SEO/AEO strategy doc |
| P1.7 | **Compliance scan** — GDPR/ePrivacy, EAA/WCAG, DPDP, CCPA per served markets | Compliance requirements list |
| P1.8 | **Current-best-practices verification** (⚠️ web-search now) — current versions/guidance for the stack + SEO + schema + a11y + AI-crawler files | "Current standards as of <date>" note |
| P1.9 | **Research dossier assembly** → **CHECK** | Single research dossier; Checker signs off |

### PHASE 2 — Strategy & Architecture (Maker: Claude · Checker: fresh Claude/GPT + human)
| ID | Micro-task | Output / Done when |
|---|---|---|
| P2.1 | **Sitemap + URL structure** (per-locale routes, hreflang plan) | Sitemap |
| P2.2 | **Page archetypes/templates** (build once, instance many) | Archetype list |
| P2.3 | **Design system** — anti-cliché palette/type/motion (the "taste" layer); avoid template-default look | Design system spec |
| P2.4 | **Tech stack + version check** (⚠️ verify current versions/breaking changes) | Stack decision |
| P2.5 | **Schema + analytics + i18n + compliance + conversion plan** (events, JSON-LD types, consent, RTL, form/CTA/WhatsApp/chatbot) | Technical plan |
| P2.6 | **Build spec assembly** (the master spec Antigravity will follow) → **CHECK** | Build spec; Checker signs off |

### PHASE 3 — Content (Maker: Claude · Checker: fresh Claude/GPT + **native speaker**)
| ID | Micro-task | Output / Done when |
|---|---|---|
| P3.1 | **Core page copy — English** (buyer-psychology-led, conversion-first) | EN content |
| P3.2 | **Product/course/offer content — real facts** (prices/details from client; **no fabrication**) | Offer content with real data |
| P3.3 | **Localized copy per market** (⚠️ one session per language; authored, not translated; per-market psychology + travel/visa/logistics if relevant) | Per-language content packs |
| P3.4 | **Media plan + sourcing** (first-party > licensed stock > illustration; never AI-generate/hotlink; naming + alt conventions) | Media brief + sourced links |
| P3.5 | **Content pack assembly** → **CHECK** (native-speaker review flagged for each non-EN) | Content pack; Checker signs off |

### PHASE 4 — Build (Maker: **Antigravity** · Checker: **Claude**, every task)
> This is where proof-of-work matters most. **Antigravity builds → Claude verifies with objective proof → next task.** Never batch past a failing check.

| ID | Micro-task | Claude verifies (proof) |
|---|---|---|
| P4.0 | **Workspace setup** — Antigravity Project with the folder added; agent organizes files into `instructions/`/`keywords/`/`content/` and confirms it can read them | It lists the files it read; no "file not found" |
| P4.1 | **Scaffold + design system** (framework, tokens, base components, styleguide) | `package.json` + `src/app` exist; styleguide renders; not a template default |
| P4.2 | **i18n + routing + hreflang** (all locales, RTL) | `curl` shows correct `lang`/`dir`; hreflang block reciprocal + x-default |
| P4.3 | **SEO/schema system** (metadata generator, JSON-LD component lib) | Unique titles across pages; JSON-LD present in raw HTML |
| P4.4 | **Templates/archetypes** built once | Each archetype renders; pages are instances |
| P4.5 | **Pages populated with content** (all languages, real prices, no placeholders) | `curl` shows authored text per locale; prices correct; no lorem/fake IDs |
| P4.6 | **Analytics/consent + root files + 301 redirects** (env-var-gated; robots/llms/sitemap; redirect map) | Files served; redirects return 301 to correct pages; no fake IDs |
| P4.7 | **Media wiring** (first-party/stock into `/public`; labelled placeholders where missing) | Images load; no hotlinks; alt text present |

### PHASE 5 — QA / Battle-test (Maker: Antigravity fixes · Checker: Claude audits · Human gate)
| ID | Micro-task | Output / Done when |
|---|---|---|
| P5.1 | **Technical audit** — Lighthouse (Perf/SEO/A11y/BP), SSR-not-JS-injected, exactly one H1/page, meta uniqueness, hreflang | Pass/fail table with real numbers |
| P5.2 | **Schema validation** — Rich Results Test on home/course/FAQ; fix errors (warnings optional) | Valid, errors cleared |
| P5.3 | **Content/i18n completeness** — no English bleed on localized pages, prices exact, no placeholders/`TODO`/fake IDs, correct facts sitewide | English-bleed list = empty (or explicitly deferred) |
| P5.4 | **Conversion/functional audit** — form actually posts somewhere, WhatsApp/tel links real, chatbot real-or-labelled, CTAs work, thank-you pages no dead-end | Every revenue path works |
| P5.5 | **🧑 HUMAN eyeball gate** — Operator opens the site: does it look premium (not templated)? mobile OK on a real phone? RTL correct? native-language quality (native speaker)? | Human sign-off on look/mobile/RTL/language |
| P5.6 | **Fix loop** — Antigravity fixes → Claude re-audits → repeat until green | All P5 checks green |

### PHASE 6 — Handover & Deploy (Maker: Claude doc · Deployer: tech team)
| ID | Micro-task | Output / Done when |
|---|---|---|
| P6.1 | **Handover doc** — server setup (Vercel or self-host), env vars + where each goes, remaining code changes, DNS + SSL, pre-launch checklist, open business decisions | Handover delivered |
| P6.2 | **Deploy** — GitHub → Vercel → connect domain (DNS "grey cloud" if Cloudflare) → SSL | Live on the real domain over HTTPS |
| P6.3 | **Post-launch** — submit sitemaps (Google/Bing/Yandex), enable IndexNow, Google Business Profiles, verify analytics recording, monitor 404s | Indexing + tracking live |

---

## 3. The Maker–Checker protocol (the core discipline)

**For every artifact:**
1. **Maker** produces it and states what it did.
2. **Checker** (a *fresh* AI session or the other model or a human — never the same context that made it) runs the **task's checklist** and **demands proof**.
3. Checker returns one of: **✅ signed off** (with the proof it verified) or **❌ sent back** (with the specific failures).
4. Only ✅ advances.

**Proof standards by artifact type:**
- **Research/strategy/content** → Checker validates facts (no fabrication), completeness vs the brief, and for content: reads a sample in each language (native speaker for non-EN).
- **Code (Antigravity)** → Checker requires *machine evidence*: `curl` of the page, `git log -1`, Lighthouse JSON, Rich Results Test result, a grep for `lorem`/`TODO`/fake IDs, a real localhost/live link. **"It compiles" ≠ "it's correct." "It's done" ≠ proof.**

**Human-only gates (no AI can honestly self-verify these):**
- Does the design look premium vs templated?
- Does it work on a real phone?
- Is the Arabic RTL actually correct?
- Is the DE/FR/AR/RU *good* (native speaker)?
- Are the business facts right (client confirms)?

**The Antigravity-specific rule:** because it over-claims, the loop is always **Antigravity builds → Claude audits with proof → fix → re-audit.** Never accept a build report at face value; always verify the live/localhost artifact.

---

## 4. Current-best-practices verification (anti-staleness)

Run at **two mandatory checkpoints** (P1.8 and P2.4), and any time a tool errors unexpectedly:
- Web-search the **current** state of: the framework (latest version + release notes/breaking changes), the i18n library, **schema.org + Google Search Central** (what rich results still exist — they get retired), **WCAG** current version, the **AI-crawler / llms.txt** conventions, and any library the build depends on.
- Record "verified against current docs as of <date>" in the spec. This is why the site won't be built on stale patterns — and why fewer things break.

---

## 5. The self-improvement loop (makes the factory compound)

- **Log every break/nuance.** Whenever a step fails, an agent misbehaves, or a new trick is found → add an entry to `GOTCHAS_AND_BEST_PRACTICES.md` (symptom → cause → fix → which micro-task to update).
- **Patch the pipeline.** Update the affected micro-task's checklist/prompt so the same failure can't recur. Bump the playbook version.
- **Per-project retro.** After each site goes live, spend one session on: what broke, what took longest, what the Checker caught late → harden the playbook.
- **Result:** each website is faster and cleaner than the last, and the playbook trends toward "world-class by default."

---

## 6. Conventions (reuse across every project)

- **Folders:** `instructions/` (build spec + strategy), `keywords/` (keyword maps), `content/` (per-language copy + redirects + media links). Build prompt + handover at root.
- **Naming:** source-of-truth files = **stable names, overwrite, version inside, history in git** (no `v2` in filenames). Point-in-time artifacts (deltas, keyword snapshots, media lists) = **dated filenames, never overwritten**.
- **Secrets:** never commit `.env`/keys/brand docs (gitignore them); `NEXT_PUBLIC_*` are build-time + public — real secrets go server-side only.
- **Git:** commit author email must be a valid/noreply GitHub email (or the deploy is blocked).
- **One canonical build prompt** per project (checklist-driven: organize → build → verify → deploy), pasted into Antigravity as a **task in a Project** (not a chat).

---

## 7. How an intern runs a project (day-to-day)

1. Open the **Project Tracker** (copy the template per site). It lists every micro-task P0.1 → P6.3 with a status.
2. For each task: open the **Prompt Library**, copy the task's prompt, run it with the Maker (Claude/GPT or Antigravity).
3. Take the output to the **Checker** (fresh AI session / other model / you / native speaker) with the task's checklist. Get ✅ or ❌.
4. On ❌, send back with the specific failures; on ✅, mark done and move to the next task.
5. At human gates (P5.5), *you* open the browser/phone and judge.
6. When P6 is done, the site is live. Run the retro (§5) and improve the playbook.

**Golden rules for the intern:** never let one AI check its own work; never accept "done" without proof; never let the AI invent a fact — make it ask; always eyeball design/mobile/RTL yourself; if a tool errors weirdly, have Claude web-search the current docs.

---

## 8. Suggested improvements (this playbook, evolving)
- Build the **Prompt Library** (a ready prompt per micro-task P0.1→P6.3) and the **Project Tracker template** next — they make this immediately runnable by an intern. *(Ask Claude to generate these.)*
- Add a **"definition of done" checklist per micro-task** (Checker's exact criteria) so checks are objective, not vibes.
- Consider a **scorecard** per site (Lighthouse, schema pass, languages complete, conversion paths working, look-premium rating) so quality is measurable across the portfolio.
- Keep a **shared Gotchas file across all sites** so a lesson learned on site #2 protects site #7.

---
---

# PART II — Idiot-proofing + research-grounded upgrades (v1.1)
### Read with `KNOWLEDGE_BASE_research_expert_future.md`. This makes the pipeline intern-runnable and closes the gaps the research exposed.

## 9. This method IS the expert standard (why it works)
What we do maps 1:1 to the 2026 research consensus (see Knowledge Base Part B): our **build spec** = Spec-Driven Development's "super-prompt"; our **micro-tasks** = spec-driven decomposition aligned to context windows; our **Maker–Checker** = the **Coordinator/Implementor/Verifier** pattern; our **proof-of-work** = "convert 'looks right' into executable evidence." Controlled studies show spec-first cuts AI code errors up to ~50% and regen cycles ~10×. So: **trust the process — it's not homegrown, it's the state of the art.**

## 10. Idiot-proofing — standing rules for the intern (memorize these)
1. **Never let one AI check its own work.** Checker = a *fresh* session / the other model / a human.
2. **Never accept "done" without proof.** Demand a link, terminal output, a validated result, a curl, a grep. (Antigravity over-claims — see Gotchas A2.)
3. **Never let an AI invent a fact.** If a price/name/credential/ID is unknown → make it **stop and ask you**; you get it from the client.
4. **One task at a time.** Don't paste "build the whole site." Micro-tasks only (context decay is the #1 failure — Gotchas H/KB B2).
5. **You judge the human stuff.** Open the browser/phone yourself for: looks-premium, mobile, RTL, native-language quality. AIs cannot honestly self-verify these.
6. **When a tool errors weirdly → have Claude web-search the current docs** before flailing.
7. **Re-load the spec** into each new AI session (agents are stateless; the spec is their memory).
8. **Strong model for spec/architecture; fast model for iteration** — never the reverse (KB B3).

## 11. STOP-and-escalate rules (when the intern must pause and get a human/senior)
Escalate — do **not** let the AI proceed — when:
- A required **business fact is missing** (price, address, credentials, accreditation, legal claim) → get it from the client; never fabricate.
- The AI wants to **make a claim about health/medical/legal/financial** outcomes, or anything regulated.
- A **security/privacy** decision is involved (handling personal data, payments, auth, storing PII).
- The **design looks templated/generic** after a redesign attempt and you can't articulate the fix → get design eyes.
- **Non-English quality** is uncertain → native speaker sign-off required before publish.
- The agent proposes **`git push --force`, deleting files/branches, or rewriting history** → confirm with a senior.
- Two AI outputs **disagree on a fact** → verify against source, don't average.

## 12. Definition of Done (objective acceptance criteria per phase)
A phase is "done" only when its Checker can tick ALL of these (write them EARS-style on each build task: *"WHEN the page loads, the system SHALL return the H1 in raw HTML"*):
- **P1 Research:** every competitor/keyword/compliance item present; all "need-from-client" facts flagged; "verified vs current docs on <date>" recorded.
- **P2 Architecture:** sitemap + archetypes + design system + stack + schema/i18n/analytics plan all in the spec; **topic-cluster structure** defined (pillar+cluster+internal links) — KB A3.
- **P3 Content:** every page has copy in every language (authored, not translated); **GEO standard met** (answer-first intro, a stat per ~150–200 words, expert quote w/ attribution, cited sources, info-dense) — KB A3; real facts only; native-review flagged.
- **P4 Build:** `npm run build` passes; each page's H1/copy in raw HTML (curl); unique titles; JSON-LD present; hreflang reciprocal; no `lorem`/`TODO`/fake IDs (grep); no secrets committed.
- **P5 QA:** Lighthouse targets hit; schema validates (Rich Results); **security review passed** (§13); no English bleed; every conversion path works; human sign-off on look/mobile/RTL/language.
- **P6 Handover/Deploy:** live on the domain over HTTPS; redirects 301 correctly; **measurement live** (§14); handover doc delivered.

## 13. NEW — Security review (P5.x) — because AI code has real vulnerabilities
Research: ~40% of AI-generated code in sensitive contexts is vulnerable; 110k+ surviving AI-introduced issues found in prod (KB B2). Before launch, have the Checker run/verify:
- **Dependency audit** (`npm audit`; fix high/critical).
- **No secrets in the repo** (`git ls-files` + a secret scan; `.env` gitignored).
- **Input handling:** the enquiry/API routes validate + sanitize input; spam protection (Turnstile) server-side; rate-limited.
- **No secrets client-side:** nothing sensitive in `NEXT_PUBLIC_*`; CRM/API keys server-side only.
- **Security headers** (CSP where feasible, HSTS, X-Content-Type-Options, Referrer-Policy).
- **Auth/PII:** if any login/personal-data handling exists, escalate for review (don't let the agent freelance auth).

## 14. NEW — Post-launch growth loop (P6.3, ongoing) — turns a launched site into a compounding revenue asset
This is where secondary-sales revenue actually compounds (KB A3–A4). Set up + schedule:
- **Measurement:** GA4 with **AI-referral channels** (ChatGPT/Perplexity/Gemini/Claude) split out; an **AI-citation monitor** (Otterly/Peec/LLMrefs/Profound); GSC AI-Overview impression share; branded-search tracking.
- **Freshness cadence:** a rolling **content-refresh schedule** — update priority pages within ~90 days (the "citation cliff"). Publish-and-forget = decaying AI visibility.
- **Off-page / entity building:** digital PR, credible directories, community presence (Reddit/forums where relevant), Wikipedia/entity consistency, Google Business Profiles, `sameAs` links — because brands are cited **6.5× more via third-party sources** and PR lifts citations ~239%.
- **Topic-cluster expansion:** keep adding cluster articles around each pillar (topical authority compounds; query fan-out rewards depth).
- **Conversion iteration:** watch which pages convert; A/B test CTAs/forms; fix leaks. A page that ranks/cites but doesn't convert has failed (First Principle #1).

## 15. Effort/time guide (rough, per site — calibrate after 2–3 builds)
- P0 Setup: ~0.5 day · P1 Research: 1–2 days · P2 Architecture: 1 day · P3 Content: 2–4 days (more per extra language) · P4 Build: 1–3 days (agent time + your checks) · P5 QA: 1–2 days · P6 Deploy: 0.5 day + ongoing growth loop.
- **Search reality (set client expectations):** ranking movement ~2–3 months, meaningful traffic ~4–6 months, revenue impact ~6–12 months (KB A4). The site launches fast; *ranking/citation* is a compounding game.

## 16. Good vs bad — quick calibration for the intern
- **Task prompt** — ❌ "make the homepage better" → ✅ "increase section spacing to py-24, one calm hero with readable H1 over a subtle bottom gradient, simplify cards to one accent + thin border; show me localhost."
- **Accepting a build** — ❌ agent says "✅ deployed successfully" → ✅ you open the live URL, curl the H1, run Lighthouse, and *see* it.
- **A fact** — ❌ agent writes a plausible price → ✅ agent writes `{PRICE — confirm with client}` and you fill it.
- **A translation** — ❌ English run through the agent → ✅ authored to the market + native-speaker sign-off.
- **"Done"** — ❌ "all green!" with no evidence → ✅ a pass/fail table with real numbers and the failures listed.

## 17. Immediate next builds for this system (to make it fully turnkey)
1. **Prompt Library** — one ready, copy-paste prompt per micro-task P0.1→P6.3 (with the EARS acceptance criteria embedded). *Highest leverage — it's what the intern pastes.*
2. **Project Tracker template** — a per-site checklist/kanban of all tasks + Checker sign-off + the Definition-of-Done ticks.
3. **A "site scorecard"** — Lighthouse, schema pass, languages complete, security pass, conversion paths, AI-citation frequency, look-premium rating — so quality is measurable across the portfolio.
