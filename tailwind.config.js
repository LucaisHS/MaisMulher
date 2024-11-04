/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/index.html",       // Inclua o HTML principal
    "./html/**/*.{html,js}" // Inclua todos os arquivos na pasta src (HTML e JS)
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#00969E', // Adiciona a cor personalizada para reutilização
      },
    },
  },
  plugins: [],
}
