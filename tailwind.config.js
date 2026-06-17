export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/Function/**/*.{js,ts,jsx,tsx}", 
  "./src/Pages/**/*.{js,ts,jsx,tsx}",    


  ],
  theme: {
    extend: {
      fontFamily: {
        // Создаем класс font-nunito для Tailwind v3
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
