# Kairali Guru — Redirect config (old site → new) · auto-forward, 301
### The old kairali.guru is being replaced. Every old URL 301s to its new home. · 2026-07-09

**Rule (from §30):** never redirect to the homepage as a catch-all for real pages — that's a soft 404. Map each old URL **one-to-one** to its closest new page; use a single sensible catch-all only for genuinely orphaned legacy `.aspx`.

## Old URLs found on the live legacy site → new destinations
| Old (kairali.guru) | New | Type |
|---|---|---|
| `/default.aspx` | `/` | 301 |
| `/one-day-ayurveda-workshop-program.aspx` | `/courses/one-day-ayurveda-workshop` | 301 |
| `/three-day-short-term-ayurveda-certificate-program.aspx` | `/courses/three-day-ayurveda-certificate` | 301 |
| `/intensive-ayurveda-training-program.aspx` | `/courses/intensive-ayurveda-training` | 301 |
| `/level-one-advanced-ayurveda-training-program-for-wellness-professionals.aspx` | `/courses/level-one-advanced-ayurveda-training` | 301 |
| `/advanced-ayurveda-lifestyle-consultant-and-therapist-training-program.aspx` | `/courses/advanced-lifestyle-consultant-therapist` | 301 |
| `/Turing.aspx` (old captcha) | `/` | 301 |
| any other `*.aspx` (no equivalent) | `/courses` | 301 catch-all (keep last) |

*(Confirm the new `/courses/*` slugs match the built routes before deploying. If server logs show mixed casing on `.aspx`, add lowercase + as-seen variants.)*

## Implementation A — `next.config.js` (recommended; works self-host and on Vercel)
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/default.aspx', destination: '/', permanent: true },
      { source: '/one-day-ayurveda-workshop-program.aspx', destination: '/courses/one-day-ayurveda-workshop', permanent: true },
      { source: '/three-day-short-term-ayurveda-certificate-program.aspx', destination: '/courses/three-day-ayurveda-certificate', permanent: true },
      { source: '/intensive-ayurveda-training-program.aspx', destination: '/courses/intensive-ayurveda-training', permanent: true },
      { source: '/level-one-advanced-ayurveda-training-program-for-wellness-professionals.aspx', destination: '/courses/level-one-advanced-ayurveda-training', permanent: true },
      { source: '/advanced-ayurveda-lifestyle-consultant-and-therapist-training-program.aspx', destination: '/courses/advanced-lifestyle-consultant-therapist', permanent: true },
      { source: '/Turing.aspx', destination: '/', permanent: true },
      { source: '/:path*.aspx', destination: '/courses', permanent: true }, // keep LAST
    ];
  },
};
module.exports = nextConfig;
```

## Implementation B — `vercel.json` (if configuring at the platform)
```json
{
  "redirects": [
    { "source": "/default.aspx", "destination": "/", "permanent": true },
    { "source": "/one-day-ayurveda-workshop-program.aspx", "destination": "/courses/one-day-ayurveda-workshop", "permanent": true },
    { "source": "/three-day-short-term-ayurveda-certificate-program.aspx", "destination": "/courses/three-day-ayurveda-certificate", "permanent": true },
    { "source": "/intensive-ayurveda-training-program.aspx", "destination": "/courses/intensive-ayurveda-training", "permanent": true },
    { "source": "/level-one-advanced-ayurveda-training-program-for-wellness-professionals.aspx", "destination": "/courses/level-one-advanced-ayurveda-training", "permanent": true },
    { "source": "/advanced-ayurveda-lifestyle-consultant-and-therapist-training-program.aspx", "destination": "/courses/advanced-lifestyle-consultant-therapist", "permanent": true },
    { "source": "/Turing.aspx", "destination": "/", "permanent": true },
    { "source": "/:path*.aspx", "destination": "/courses", "permanent": true }
  ]
}
```

## Cross-domain note (KTAHV)
The same programmes also appear on **ayurvedichealingvillage.com** (legacy `.aspx` training pages there too). Those redirects must be configured **on that server** (can't be done from kairali.guru). Recommended: on KTAHV, 301 the training `.aspx` pages to the matching **kairali.guru** course page (since kairali.guru is now canonical for training — §31), or keep a short teaser linking here. Give me the KTAHV training URL list if you want that map too.

## After launch
1. Point the `kairali.guru` DNS at the new deployment.
2. Verify each old URL 301s correctly (test a few in a browser + `curl -I`).
3. Submit the new sitemap in Google/Bing/Yandex; watch Search Console "Not found (404)" for any legacy URL you missed and add it.
