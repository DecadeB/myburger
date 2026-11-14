# MyBurger — Everyday Burger

Single-page marketing site for **MyBurger**, a burger restaurant brand. Built with **React 19** (functional components + hooks) and **Tailwind CSS v4** — all styling is utility classes; `src/index.css` contains only the Tailwind import and design tokens (colors, fonts, shadow), no hand-written rules.

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

- **Copy & data**: edit `src/data/site.js` — components read everything from there.
- **Colors / fonts**: tokens live in `src/index.css` under `@theme` (`ink #0B0B0F`, `cream #F5F0E6`, `gold #C9A84C`; Inter for headings, Manrope for body, Noto Sans TC for Chinese).
- **Map**: `Location.jsx` embeds Google Maps via `output=embed` (no API key needed). Swap `brand.mapQuery` for a real address.
- **Form**: front-end demo only — wire `Contact.jsx#handleSubmit` to your backend or a form service.

## Notes

- Scroll reveals, counters and the condensed navbar all respect `prefers-reduced-motion`.
- Tested at 375 / 768 / 1280 px; keyboard navigable (skip link, focus rings, ARIA on menu, accordion and form errors).
