/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        facebook: "#1877F2",
        github: "#333333",
        google: "#DB4437",
        twitter: "#1DA1F2",
      },
    },
  },
  plugins: [],
}
