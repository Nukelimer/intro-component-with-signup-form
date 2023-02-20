/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['{./src/**/*.{html,js}', './index.html'],
  theme: {
    fontFamily: {
      Inter: 'Inter, sans-serif',
    },

    extend: {
      backgroundImage: {
        mobile: "url('../images/bg-intro-mobile.png') ",
        desktop: "url('../images/bg-intro-desktop.png')",
      },
      colors: {
        red: 'rgba(255, 122, 122, 0.8)',
        green: 'hsl(154, 59%, 51%)',
        blue: 'hsl(248, 32%, 49%)'

      },
    },
  },
  plugins: [],
};
