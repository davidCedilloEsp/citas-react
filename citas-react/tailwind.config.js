/** @type {import('tailwindcss').Config} */
export default {
  /*Indicas en que archivos se estara ejecutando o usando 
    taildwind para que en esos archivos esten disponibles las 
    calses de taildwind

    /** busca o utiliza todos los archivos 
    /*.jsx busca todos los archivos con la extencion jsx
    es decir ""./src/**(sin espacio)/*.js" dentro de src busca en todos lados los archivos de tipo jsx
  */
  content: ["./index.html", './src/**/*.jsx'],
  theme: {
    extend: {},
  },
  plugins: [],
}

