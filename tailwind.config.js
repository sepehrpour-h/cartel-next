/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/globals.css",
    "./src/app/**/*.{js,ts,jsx,tsx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx}", 
    "./src/app/auth/**/*.{js,ts,jsx,tsx}",
    "./src/app/fonts/**/*.{js,ts,jsx,tsx}",
    "./src/app/home/**/*.{js,ts,jsx,tsx}",
    "./src/app/public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

