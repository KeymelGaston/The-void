/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: {
          black:   '#0A0A0A',
          surface: '#1A1A1A',
          white:   '#F5F5F5',
          midnight:'#1B2A4A',
          muted:   '#888888',
          border:  '#2A2A2A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1', letterSpacing: '0.08em' }],
        'display-lg': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '0.06em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '0.04em' }],
        'label':      ['0.6875rem',  { lineHeight: '1', letterSpacing: '0.12em' }],
      },
      transitionTimingFunction: {
        'void': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'slow': '800ms',
        'cinematic': '1200ms',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
