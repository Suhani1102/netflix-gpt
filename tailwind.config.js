/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
    // require('tailwind-scrollbar-hide') // Optional, if you want to hide scrollbars sometimes
  ],
};
