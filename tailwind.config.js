/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#04364A',
        'secondary': '#176B87',
        'third': '#64CCC5',
        'white': '#E5E7EB',
        'black': '#374151',
      },
      fontFamily: {
        'Comfortaa': ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [
    [import('tailwindcss-animate')]
  ],
}
