/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        flyToCart: {
          '0%': { transform: 'translate(0, 0)', opacity: 1 },
          '100%': { transform: 'translate(100vw, -100vh)', opacity: 0 },
        },
        scaleCart: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fly-to-cart': 'flyToCart 1s ease forwards',
        'scale-cart': 'scaleCart 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
