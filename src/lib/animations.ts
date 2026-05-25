import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Core config ──────────────────────────────────────────
export const EASE    = 'power2.out';
export const DUR     = { fast: 0.4, base: 0.8, slow: 1.2, cinematic: 1.4 };
export const STAGGER = 0.1;
export const Y       = { sm: 16, md: 24, lg: 32 };

// ── Page load timeline ───────────────────────────────────
export function initPageLoad(targets: string | Element[]) {
  return gsap.from(targets, {
    y: Y.md,
    opacity: 0,
    duration: DUR.slow,
    ease: EASE,
    stagger: STAGGER,
    clearProps: 'all',
  });
}

// ── ScrollTrigger fade-up ─────────────────────────────────
export function initScrollFadeUp(targets: string | Element[]) {
  return gsap.from(targets, {
    y: Y.md,
    opacity: 0,
    duration: DUR.slow,
    ease: EASE,
    stagger: STAGGER,
    clearProps: 'all',
    scrollTrigger: {
      trigger: typeof targets === 'string' ? targets : (targets as Element[])[0],
      start: 'top 85%',
      once: true,
    },
  });
}

// ── Navbar hide/show on scroll ────────────────────────────
export function initNavbar(nav: Element) {
  let lastY = 0;

  ScrollTrigger.create({
    onUpdate(self) {
      const dir = self.direction;
      if (dir !== lastY) {
        gsap.to(nav, {
          yPercent: dir === 1 ? -100 : 0,
          duration: DUR.base,
          ease: EASE,
        });
        lastY = dir;
      }
    },
  });
}

// ── Hero timeline ─────────────────────────────────────────
export function initHero(els: {
  label?: Element | null;
  title?: Element | null;
  subtitle?: Element | null;
  cta?: Element | null;
}) {
  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (els.label)    tl.to(els.label,    { y: 0, opacity: 1, duration: DUR.base });
  if (els.title)    tl.to(els.title,    { y: 0, opacity: 1, duration: DUR.cinematic }, '-=0.4');
  if (els.subtitle) tl.to(els.subtitle, { y: 0, opacity: 1, duration: DUR.base },      '-=0.6');
  if (els.cta)      tl.to(els.cta,      { y: 0, opacity: 1, duration: DUR.base },      '-=0.5');

  return tl;
}

// ── Lenis + GSAP ticker integration ──────────────────────
export async function initLenis() {
  const { default: Lenis } = await import('lenis');

  const lenis = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothTouch: false,
  });

  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Sincronizar ScrollTrigger con Lenis
  lenis.on('scroll', ScrollTrigger.update);

  return lenis;
}
