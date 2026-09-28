/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          ivory: '#FDFBF7',
          cream: '#F7F1E5',
          parchment: '#EFE6D5',
          gold: {
            light: '#F5E6AB',
            DEFAULT: '#D4AF37',
            dark: '#997A15',
            muted: '#C5A059'
          },
          maroon: {
            light: '#8B1E3F',
            DEFAULT: '#600C1F',
            dark: '#3E0513',
            deep: '#2A030C'
          },
          burgundy: {
            light: '#9E2A2B',
            DEFAULT: '#720E1E',
            dark: '#4B0913'
          },
          emerald: {
            light: '#2D6A4F',
            DEFAULT: '#1B4332',
            dark: '#081C15'
          },
          rose: {
            DEFAULT: '#B7415E',
            light: '#E29578'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        hindi: ['"Rozha One"', '"Noto Serif Devanagari"', 'serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.2)',
        'gold-md': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 8px 30px rgba(212, 175, 55, 0.4)',
        'maroon-lg': '0 10px 35px rgba(62, 5, 19, 0.35)',
      }
    },
  },
  plugins: [],
}
