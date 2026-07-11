# Kairali Guru — Deploy: GitHub → Vercel (beginner, copy-paste)

*Run `BUILD_PROMPT.md` first to build the site. Then use these two prompts to publish it. Paste each block into Antigravity once; approve permissions when it explains them.*

**Note on hosting.** Vercel is an excellent host for Next.js and the fastest way to get kairali.guru live. (Moving to the Healing Village server later is a simple swap — just ask.) Two things differ from a simple portfolio deploy: this site has **secrets** (your GA4/Chatbase/CMP/etc. keys → put them in **Vercel Environment Variables, never in the code**), and you'll connect **your real domain kairali.guru**.

---

## Prompt 1 — Publish to GitHub

```
Please publish this kairali.guru project to GitHub. I am not a coder — do it for me and explain each step in simple words. Do not ask me to run terminal commands myself.

First, safety checks:
1. Confirm the website builds successfully (production build, no errors).
2. Scan the whole project for secrets — API keys, tokens, passwords, .env files, service-account JSON. If any exist, move them into a .env file and make sure .env* is in .gitignore. Never commit secrets.
3. Add a .gitignore that excludes: node_modules, .next, .env*, any /uploads folder, the brand/spec .md source documents, and original high-resolution image files. Do not upload private brand documents.
4. Create or update a clear README describing this as the Kairali Guru website (Next.js).

Then:
5. Check if I'm signed in to GitHub CLI. If not, show me the login link and one-time code and wait for me to finish in the browser.
6. Create a new PRIVATE GitHub repository named kairali-guru-website.
7. Commit and push the code to the main branch.
8. Give me the clickable GitHub repository link, and confirm it is private and that no secrets or private documents were uploaded.

Use simple words. If anything breaks, read the error, explain it simply, fix it, and try again.
```

---

## Prompt 2 — Deploy to Vercel + connect the domain

```
My kairali.guru code is now on GitHub. Help me deploy it on Vercel and connect my domain. I am a beginner — guide me step by step in simple words and do whatever you can for me. Do not ask me to run terminal commands.

1. Tell me to open https://vercel.com, click Log In, choose Continue with GitHub, and approve Vercel's access to my repository if asked.
2. Walk me through: Add New → Project → Import the kairali-guru-website repo. Keep the framework as Next.js and the default build settings. Use the free/Hobby plan for now.
3. IMPORTANT — before I click Deploy: tell me to add my Environment Variables in Vercel (Project → Settings → Environment Variables → Production). List exactly which variables to add, with placeholder names, so I can paste my real values (I have them). For example: NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_GTM_ID, NEXT_PUBLIC_CLARITY_ID, NEXT_PUBLIC_YANDEX_METRICA_ID, CHATBASE_KEY, CMP/consent key, CLOUDFLARE/TURNSTILE keys, META_PIXEL_ID, and the form/CRM endpoint. Remind me these go in Vercel only, never in the code.
4. Then tell me to click Deploy and wait until it finishes. Give me the live vercel.app link so I can check it works.
5. Connect my real domain: Project → Settings → Domains → add kairali.guru. Show me exactly which DNS records Vercel asks for, and tell me to add those records at my DNS provider. If my DNS is on Cloudflare, tell me to set those records to "DNS only" (grey cloud) so the SSL certificate works. Explain in simple words how to know when the domain is live.
6. After the domain works, tell me what to verify: kairali.guru loads over HTTPS, every page opens, and all language versions (EN/DE/FR/AR/RU) work.

If Vercel shows a build error, read the Vercel build logs, explain it simply, fix it in the code, push to GitHub, and let Vercel redeploy. Use simple words throughout.
```

---

## After go-live (optional next step)
Submit your sitemap in **Google Search Console**, **Bing Webmaster**, and **Yandex Webmaster**, and turn on **IndexNow** (per the build spec) so Bing/Yandex index new pages instantly. Ask me for that prompt when you're live.

**Reminder:** never paste real API keys into these prompts or into the code — they belong only in Vercel's Environment Variables.
