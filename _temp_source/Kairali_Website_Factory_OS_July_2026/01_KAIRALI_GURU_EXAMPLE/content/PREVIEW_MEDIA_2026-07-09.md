# Kairali Guru — Preview media (images + videos) + drop-in prompt
### Free-license assets to make the browser preview look alive · 2026-07-09

**Purpose:** so when your team opens the site in a browser, it looks real — not grey placeholders. **These are PREVIEW/placeholder media only.** Before the real launch, swap them for your own healing-village / physician / student photography and video (better for premium + E-E-A-T; faculty/testimonials/venues must be first-party).

**Two rules:** (1) **Download from the source page and put the files in `/public/preview/`** — don't hotlink (Pexels/Pixabay block hotlinking, and it hurts performance). (2) **Verify each license** — Pexels, Pixabay, Coverr, Mixkit, and FreeNatureStock are free for commercial use with no attribution; avoid Vecteezy's attribution-required clips.

---

## VIDEOS (free-license)

### Hero background — Kerala nature b-roll (Home hero, Kerala pillar)
*Calm, cinematic, muted, looping. This is the safe hero — authentic and not a "spa" cliché.*
- Pexels (specific clip): https://www.pexels.com/video/serene-kerala-backwaters-with-lush-greenery-29988893
- Pexels (collection): https://www.pexels.com/search/videos/kerala%20backwaters/
- Pixabay (Kerala 4K): https://pixabay.com/videos/search/kerala/
- Coverr (curated Kerala): https://coverr.co/stock-video-footage/kerala

### Texture / section b-roll — herbs, garden, green nature (Learn, texture bands)
- FreeNatureStock (Fresh Garden Herbs, Garden Chive Flowers): https://freenaturestock.com/videos
- Pixabay (healing nature): https://pixabay.com/videos/search/healing%20nature/
- Pexels (green nature): https://www.pexels.com/search/videos/green%20nature/

### Yoga / meditation (for `/for/yoga-teachers`, calm sections)
- Pixabay (nature + yoga/health): https://pixabay.com/videos/search/nature%20healthy/
- Pixabay (nature relaxation): https://pixabay.com/videos/search/nature%20relaxation/

> **Therapy/Panchakarma video → shoot first-party.** Stock "spa massage" clips read as generic wellness and clash with the clinical/authentic register (§28.2). Use a Kerala nature clip for the hero; keep therapy footage for your own shoot.

**Video technical rules (for the build):** muted + `autoplay` + `loop` + `playsInline`; a **poster image** shows first; **compress** to a small file (short 10–20s loop, ~1080p, low bitrate); respect **`prefers-reduced-motion`** and serve a **static poster on mobile/cellular** (per §3.4/§20). Never let a heavy video block the LCP.

---

## IMAGES
The full per-slot image list (with the "which photo for which page") is in **`IMAGE_LINKS_2026-07-09.md`**. Top picks to seed the preview:
- **Hero / Kerala:** https://www.pexels.com/photo/charming-riverside-house-in-lush-kerala-landscape-34618650 · https://www.pexels.com/photo/scenic-island-retreat-in-kadamakkudy-kerala-30062328
- **Panchakarma/therapy:** https://unsplash.com/s/photos/shirodhara
- **Herbs/oils:** https://www.pexels.com/photo/herbal-jars-vessels-in-forest-23512149 · https://pixabay.com/images/search/mortar%20and%20pestle
- **Yoga (audience):** https://www.pexels.com/photo/yoga-practice-along-the-river-in-rishikesh-33891319

More entry points: Unsplash `unsplash.com/s/photos/{term}` · Pexels `pexels.com/search/{term}/` · Pixabay `pixabay.com/images/search/{term}/`. Terms: `kerala ayurveda`, `kerala architecture`, `ayurveda herbs`, `shirodhara`, `copper vessel`, `medicinal garden`, `yoga teacher india`.

---

## DROP-IN PROMPT (paste into Antigravity to wire the preview media)

```
I want to make the website preview look real for my team — no grey placeholders. I will download a few free stock images and one short video and put them in a folder called /public/preview/.

Please do this:
1. Use the images and the one hero video I place in /public/preview/ as PREVIEW media across the site (hero, section bands, course/pillar/audience images) so every page looks populated.
2. Mark all of these clearly in the code as PREVIEW / TODO-REPLACE with first-party media before launch (a comment and, where possible, a small "preview image" data attribute) so we can find and swap them later.
3. For the hero video: make it muted, autoplay, loop, playsInline, with a poster image that loads first; keep it lightweight; respect prefers-reduced-motion; and show a static poster (not the video) on mobile and slow connections.
4. Keep the real alt text from the image guide on each image (do not leave empty or "image" alt).
5. Do NOT hotlink from stock websites — only use the local files in /public/preview/.
6. After wiring them, run the site locally and give me the localhost link, then (if it's on Vercel) push so the team can see the live preview.

Everything else in the build spec stays the same. These are placeholders only.
```

---

**Reminder:** this is a **dated preview-asset file** (not overwritten). When you send your real image/video library, I'll map your own media to the slots and this stock pack drops away for everything except generic supporting bands.
