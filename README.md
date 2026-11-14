# MyBurger — Everyday Burger

Single-page marketing site for **MyBurger**, a burger restaurant brand. Built with **React 19** (functional components + hooks) and **Tailwind CSS v4** — all styling is utility classes; `src/index.css` contains only the Tailwind import and design tokens, no hand-written rules.

## Design language

Visual system follows **McDonald's Hong Kong** (mcdonalds.com.hk): white surfaces, charcoal text, red accents and yellow call-to-action buttons with black text.

| Token | Value | Usage |
| --- | --- | --- |
| `ketchup` | `#db0007` | accents, badges, featured border, links |
| `mustard` | `#ffbc0d` (hover `#ffcc49`) | primary buttons, price stickers, stars |
| `charcoal` | `#292929` (dark bar) | headings, text, footer bottom bar |
| `smoke` / `line` | `#6f6f6f` / `#d6d6d6` | secondary text, borders |
| `cloud` / `mist` | `#f5f5f5` / `#f7f7f7` | alternating section backgrounds |

Buttons are 4px-radius, 48px height (McDonald's spec); cards use 10px radius with soft `0 4px 12px` shadows. The hero is an auto-playing promo carousel with dots/arrows (pauses on hover/focus, respects `prefers-reduced-motion`).


## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Structure

```
index.html                  # SEO meta, Open Graph, JSON-LD (Restaurant), Google Fonts
public/favicon.svg
src/
  main.jsx                  # entry
  index.css                 # @import "tailwindcss" + @theme tokens
  App.jsx                   # section composition + skip link
  data/site.js              # ALL copy & content (nav, services, plans, FAQ, hours…)
  lib/images.js             # Unsplash URL helper
  hooks/useInView.js        # IntersectionObserver hook (reduced-motion aware)
  components/
    Navbar.jsx              # sticky nav, condenses on scroll, mobile menu
    Hero.jsx                # headline, CTA, animated stat counters
    BrandStrip.jsx          # keyword strip
    Services.jsx            # dine-in + catering offering cards
    Story.jsx               # brand story, 3 principles, mid-page CTA
    Gallery.jsx             # masonry portfolio gallery
    Pricing.jsx             # 3-tier pricing table
    Location.jsx            # address/hours + dark-styled Google Maps embed
    Faq.jsx                 # accessible accordion (single-open)
    Contact.jsx             # validated contact form with success state
    Footer.jsx              # closing CTA band + site map
    ui/                     # Button, SectionHeading, Reveal, Counter, icons
```

## Customizing

- **Copy & data**: edit `src/data/site.js` — components read everything from there (including hero slides).
- **Colors / fonts**: tokens live in `src/index.css` under `@theme` (McDonald's HK palette: `#db0007` / `#ffbc0d` / `#292929`; Inter for headings, Manrope for body, Noto Sans TC for Chinese).
- **Map**: `Location.jsx` embeds Google Maps via `output=embed` (no API key needed). Swap `brand.mapQuery` for a real address.
- **Form**: front-end demo only — wire `Contact.jsx#handleSubmit` to your backend or a form service.
- **QA**: `npm run qa` runs the Playwright suite in `scripts/qa.mjs` against `http://127.0.0.1:4173` (start `npm run preview` first). Checks broken images, layout overflow, clipped text, dead anchors, tap-target sizes, text contrast, carousel/menu/accordion/form interactions across 375 / 768 / 1280 px.

## Notes

- Scroll reveals, counters and the condensed navbar all respect `prefers-reduced-motion`.
- Tested at 375 / 768 / 1280 px; keyboard navigable (skip link, focus rings, ARIA on menu, accordion and form errors).
