/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primaryGradient: {
          DEFAULT: 'linear-gradient(90deg, #134e5e, #71b280)',
        },
      },
      fontSize: {
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
      },
    },
  },
  plugins: [],
}

