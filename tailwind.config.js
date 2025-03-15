/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-color': '#A6A8B0',
        'custom-green': '#00ff00',
        'coupon-heading' : '#686B78',
        'background-app' : 'cornsilk'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '1px',
      '4': '4px'
    }

  },
  plugins: [],
}

