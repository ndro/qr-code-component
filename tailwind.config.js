module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif']
    },
    extend: {
      fontSize:{
        'base': '15px'
      },
      colors: {
        'light-gray' : 'hsl(212, 45%, 89%)',
        'grayish-blue' : 'hsl(220, 15%, 55%)',
        'dark-blue' : 'hsl(218, 44%, 22%)',
      }
    },
  },
  plugins: [],
}
