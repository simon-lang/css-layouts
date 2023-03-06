/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#076fcb',
        darkblue: '#1f2f40',
        brand: '#1f9cac',
        success: '#5eb623'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
