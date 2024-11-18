/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '200%': '200%',
        '150%': '150%',
        '100%': '100%',
      },
      backgroundImage: {
        'black-blue-gradient': 'linear-gradient(to bottom, black, blue)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        lora: ['Lora', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        worksans: ['Work Sans', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        cabin: ['Cabin', 'sans-serif'],
        amatic: ['Amatic SC', 'cursive'],
        abril: ['Abril Fatface', 'serif'],
        lobster: ['Lobster', 'cursive'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [

  ],
}