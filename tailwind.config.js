/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        nasa: ['Nasalization', 'sans-serif'],
      }
    },
  
  screens:{
    mobS: '320px',
    mobM: '375px',
    mobL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    big: '2560px',
  },
  },
  plugins: [require("daisyui")],
}
