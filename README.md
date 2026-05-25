# The Void — Minimal Fashion E-Commerce

A fictional fashion e-commerce store built as a portfolio piece. Dark editorial aesthetic, premium motion design, extreme performance.

## Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) | Framework — HTML-first, zero JS by default |
| [TailwindCSS](https://tailwindcss.com) | Utility-first styling |
| [GSAP](https://gsap.com) + ScrollTrigger | Animations |
| [Lenis](https://github.com/studio-freight/lenis) | Smooth scroll |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Vercel](https://vercel.com) | Deployment |

## Design System

**Palette**
- `#0A0A0A` — Void Black (background)
- `#1A1A1A` — Surface
- `#F5F5F5` — Cold White (text)
- `#1B2A4A` — Midnight (accent)
- `#888888` — Muted (secondary text)

**Typography**
- Display: Cormorant Garamond — Bold Italic, wide letter-spacing
- Body/UI: Inter — Light 300

**Animation Tokens**
- Easing: `power2.out`
- Duration: fast `0.4s` · base `0.8s` · slow `1.2s` · cinematic `1.4s`
- Stagger: `0.1s`
- Trigger: page load + ScrollTrigger at `top 85%`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — single page scroll |
| `/shop` | Full catalog |
| `/shop/[category]` | Category filter |
| `/product/[slug]` | Product detail |
| `/cart` | Cart + checkout |
| `/about` | Brand story |
| `/lookbook` | Editorial campaign |

## Categories

**Apparel:** Tops · Bottoms · Outerwear · Knitwear  
**Accessories:** Bags · Jewelry · Belts

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run build
# Deploy /dist to Vercel
```
