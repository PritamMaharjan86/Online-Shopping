/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:
    {
      Title: ['Title', 'sans-serif'],
      Heading: ['Heading', 'sans-serif'],

    },
    extend: {
      colors:
      {
        yellow: '#ffec0f',
      }


    },
  },
  plugins: [],
}