/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        varela: ['Varela Round', 'sans-serif'],
      },
      colors: {
        'green': "#0FA060",
        'lt-green': "#15E186",
        'yellow': "#E28D0E",
        'pink': "#FE9AD6",
        'blue': "#5D84E8",
        'white': "#FFFFFF",
        'lt-white': "#F3F5F6",
        'tr-white': "rgba(243, 245, 246, 0.4)",
        'gray': "#7D849D",
        'lt-gray': "#E8E8E8",
        'black': "#2A2A2A",
        'orange': "#FF9900",
        'lt-orange': "#FFAD33",
      }
    },
  },
  plugins: [],
}