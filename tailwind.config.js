/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "coffee", "retro"],
  },
  plugins: [ 
    require('daisyui'),
  ],
}

