import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#DAAF6F',
          light: '#FDF0A7',
          dark: '#AA8250',
        },
        background: {
          DEFAULT: '#120E0A',
          light: '#1A1510',
        },
        accent: {
          DEFAULT: '#FFFFFF',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#C9C9C9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'slow-spin': 'spin 8s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}
