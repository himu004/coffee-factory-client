/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 3px 3px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 8px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 13px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.25)',
        'none': 'none',
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-textshadow')
  ],
}