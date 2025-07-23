// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spinY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        spinY: 'spinY 3s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate') // If you have this installed; otherwise remove this line
  ],
};
