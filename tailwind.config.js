// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      spacing: {
        '13': '50'
      },
      colors: {
        'Primary': '#D32D2F'
      },
    },


  },
  plugins: [],
}