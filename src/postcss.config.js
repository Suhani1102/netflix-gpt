module.exports = {
  plugins: [
    require("@tailwindcss/postcss")(), // 👈 new plugin wrapper
    require("autoprefixer"),
  ],
};
