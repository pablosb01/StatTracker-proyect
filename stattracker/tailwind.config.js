/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat'
      },
      keyframes: {
        "nav-link-tag": {
          'to': 'width: 0;',
          '100%': 'display: none'
        }
      },
      transitionProperty: {
        'width': 'width',
        'display': 'display'
      }
    },
  },
  plugins: [],
};
