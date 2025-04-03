/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      themeMode: "light", // Example default mode
      darkTheme: "dark",
      lightTheme: "light",
    },
  },
  plugins: [],
}


