module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '56px',
    },
    extend: {
      colors: {
        primary: '#F94892',
        lightPrimary: '#FF8AAE',
        secondary: '#30202e',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};