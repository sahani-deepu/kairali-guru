# Kairali Website Factory — Operating System (July 2026)

A complete system for building **world-class, revenue-generating, multilingual websites** for Kairali-owned companies — using an intern + AI (Claude/GPT to plan & check, Antigravity to build), on a **maker-checker** model, ending in a live site on Vercel. Includes the reusable **factory system** and the first **worked example** (kairali.guru).

---

## What's inside

### 📁 00_FACTORY_SYSTEM — the reusable operating system (start here)
Use this for **every** new site (products, teas, chemical-free ranges, training, treatment, hospitality — any Kairali brand).
- **`WEBSITE_FACTORY_MASTER_PLAYBOOK.md`** — the pipeline: 6 phases → ~40 micro-tasks (Research → Architecture → Content → Build → QA → Handover), each with a Maker, a Checker, and a Definition of Done. Includes idiot-proofing (standing rules, stop-and-escalate triggers, good/bad examples, time estimates) so an intern can run it.
- **`KNOWLEDGE_BASE_research_expert_future.md`** — the *why*, grounded in current research: the future of search (GEO/AEO — how to get **cited** by AI, not just ranked), and the future of AI-assisted building (Spec-Driven Development, failure modes, security). Cited.
- **`GOTCHAS_AND_BEST_PRACTICES.md`** — the *what breaks* library: symptom → cause → fix, from our build **plus** the industry research. Add to it every project.
- **`PROJECT_PROFILE_TEMPLATE.md`** — **copy this per new site.** Company-agnostic: a site-type selector, per-company brand/design + compliance fields, and the shared Kairali Group context every sibling site inherits.

### 📁 01_KAIRALI_GURU_EXAMPLE — the first built site (worked reference)
The kairali.guru training portal — **live on a Vercel staging URL**, 5 languages (EN/DE/FR/AR/RU), Arabic RTL, real prices, JSON-LD, redirects. Use it as the reference example of a finished project.
- **`KAIRALI_GURU_PROJECT_PROFILE.md`** — every Kairali-specific nuance in one place (the filled version of the template).
- **`BUILD_PROMPT.md`** — the checklist-driven Antigravity build+deploy prompt.
- **`HANDOVER_go_live_2026-07-10.md`** — full tech-team handover (server setup, env vars, code changes, DNS, checklist).
- **`DEPLOY_github_then_vercel.md`** · **`DELTA_2026-07-09.md`** (changelog).
- **`instructions/`** — the master build spec + sitemap/SEO strategy.
- **`keywords/`** — English + native DE/FR/AR/RU keyword maps.
- **`content/`** — all page copy in 5 languages (home/about/courses/locations/travel-visa/buyer-journey), the 301 redirect map, and media sources.

---

## How to use it
1. **Read** `00_FACTORY_SYSTEM/WEBSITE_FACTORY_MASTER_PLAYBOOK.md` — that's the operating manual.
2. **For a new site**, copy `PROJECT_PROFILE_TEMPLATE.md`, pick the site type (e.g. e-commerce/D2C for a teas store), fill the brand's own colours/voice + compliance, and run the pipeline.
3. **Reference** the `01_KAIRALI_GURU_EXAMPLE` folder to see what "done" looks like.
4. Keep the **Gotchas** and **Knowledge Base** open while working; re-verify current best practices at the start of each project (the landscape shifts monthly).

## Kairali Guru — current status (as of July 2026)
✅ Live on Vercel staging · 5 languages · RTL · real prices · valid schema · redirects.
🔧 Before real traffic: connect the enquiry form, wire the real Chatbase agent (+ allowed domains), add analytics keys, native-speaker polish on the deep course/Learn prose, apply the DE/FR/AR/RU keyword optimization.
🚀 Then: point the `kairali.guru` domain at it (DNS), submit sitemaps, create Google Business Profiles.
(Full detail in the handover.)

---
*Core principles: revenue is the north star (traffic → secondary sales) · never fabricate facts · localize don't translate · maker-checker with proof, not claims · self-improving (log every lesson back into the Gotchas). — v1.0, July 2026*
