/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
      'sm' : '460px',
      'md': '640px',
      'lg' : '760px',
      'xl' : '1024px',
      '2xl' : '128px'
    }
    },
    colors : {
      primary : '#043873',
      secondary : '#4F9CF9',
      cream : '#FFE492',
      blue : '#A7CEFC',
      white : '#FFFFFF',
      black : '#212529'
    },
  },
  plugins: [],
}
