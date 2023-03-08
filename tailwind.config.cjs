/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#076fcb',
        darkblue: '#0f1318', // DM BG: #0f1318
        brand: '#1f2532',    // DM Sidebar: #1f2532
        success: '#5eb623'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
