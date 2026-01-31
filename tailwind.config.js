/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  presets: [require('nativewind/preset')],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f56e3d",
        "background-light": "#f8f6f5",
        "background-dark": "#221510",
        "sage-green": "#88a68a",
        "mint-soft": "#e8f2ea",
      },
      fontFamily: {
        regular: ['PlusJakartaSans_400Regular'],
        medium: ['PlusJakartaSans_500Medium'],
        semibold: ['PlusJakartaSans_600SemiBold'],
        bold: ['PlusJakartaSans_700Bold'],
        extrabold: ['PlusJakartaSans_800ExtraBold'],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
};
