/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#020817',
          900: '#050f24',
          800: '#0a1f3d',
          700: '#0f2d54',
        },
        wave: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        coral: {
          400: '#fb923c',
          500: '#f97316',
        },
        foam: '#e2f4fd',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'wave-slow': 'wave 8s ease-in-out infinite',
        'wave-medium': 'wave 5s ease-in-out infinite 1s',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-2%) translateY(-1%)' },
          '50%': { transform: 'translateX(-4%) translateY(0)' },
          '75%': { transform: 'translateX(-2%) translateY(1%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)',
        'radial-ocean': 'radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
