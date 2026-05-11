/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        fragrance: '#8f7cbc',
        blush: '#f7d9e6',
        cream: '#fff7f2',
        mist: '#c4e7e2',
        charcoal: '#2a2731'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
