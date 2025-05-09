/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:
    {
      Title: ['Title', 'sans-serif'],
      Heading: ['Heading', 'sans-serif'],
      Paragraph: ['Paragraph', 'sans-serif'],

    },
    extend: {
      colors:
      {
        yellow: '#ffec0f',
      },

      animation: {
        fade: 'fadeIn 1s ease-in-out',
      },

      keyframes:
      {
        fadeIn:
        {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },


      borderWidth:
      {
        '14': '14px',
        '10': '10px',
      },

    },
  },
  plugins: [],
}