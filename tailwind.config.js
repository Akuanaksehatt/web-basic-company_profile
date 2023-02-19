const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './utils/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}', 
    './layouts/**/*.{js,ts,jsx,tsx}', 
    './sections/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'primary-indigo': '#6924FF',
        'primary-blue': '#1E2D56',
        'secondary-blue': '#7483AA',
        'light-blue': '#00A5FF',
        'gray-darker': '#181818',
        'dark-brown': '#6f3b32',
        'brown-light': '#b06117',
        'orange-brown': '#F79240',
        'white-pink': '#FFD9B8',
        'brown-satu': '#b5631b',
        'brown-dua': '#e79f4e',
        'brown-tiga': '#994409',
        'brown-empat': '#ca8245'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
