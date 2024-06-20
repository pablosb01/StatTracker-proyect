/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#C2E812',
        'custom-orange': '#f97316',
        'custom-background': '#13151b',
        'custom-bg': '#0e1015'
      },
      fontFamily: {
        montserrat: 'Montserrat',
        sans: ['Ubuntu' , 'sans-serif'],
        fat: ["Rowdies", 'sans-serif'],
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
