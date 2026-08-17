/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C0C0C',
        foreground: '#D7E2EA',
        'muted-foreground': 'rgba(215, 226, 234, 0.65)',
        'subtle-border': 'rgba(215, 226, 234, 0.15)',
        'surface-dark': '#121212',
        'surface-card': 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'marquee-left': 'marqueeLeft 35s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
