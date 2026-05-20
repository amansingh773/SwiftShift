/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        orange: {
          400: '#FF8F4A',
          500: '#E8530A',
          600: '#B33E00',
        },
        navy: {
          DEFAULT: '#0D1B2A',
          mid: '#1A2E45',
          dark: '#080F18',
        },
      },
      animation: {
        'fade-up': 'fadeSlideUp 0.7s ease both',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeSlideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
