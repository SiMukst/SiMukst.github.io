/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
          // Primary
          "primary-050": "#FFFAEB",
          "primary-100": "#FCEFC7",
          "primary-200": "#F8E3A3",
          "primary-300": "#F9DA8B",
          "primary-400": "#F7D070",
          "primary-500": "#E9B949",
          "primary-600": "#C99A2E",
          "primary-700": "#A27C1A",
          "primary-800": "#7C5E10",
          "primary-900": "#513C06",  

          // Neutrals
          "neutral-050": "#F7F7F7",
          "neutral-100": "#E1E1E1",
          "neutral-200": "#CFCFCF",
          "neutral-300": "#B1B1B1",
          "neutral-400": "#9E9E9E",
          "neutral-500": "#7E7E7E",
          "neutral-600": "#626262",
          "neutral-700": "#515151",
          "neutral-800": "#3B3B3B",
          "neutral-900": "#222222",  

          // Supporting
          "accent-blue-050": "#DCEEFB",
          "accent-blue-100": "#B6E0FE",
          "accent-blue-200": "#84C5F4",
          "accent-blue-300": "#62B0E8",
          "accent-blue-400": "#4098D7",
          "accent-blue-500": "#2680C2",
          "accent-blue-600": "#186FAF",
          "accent-blue-700": "#0F609B",
          "accent-blue-800": "#0A558C",
          "accent-blue-900": "#003E6B",   

          "accent-orange-050": "#FFEFE6",
          "accent-orange-100": "#FFD3BA",
          "accent-orange-200": "#FAB38B",
          "accent-orange-300": "#EF8E58",
          "accent-orange-400": "#E67635",
          "accent-orange-500": "#C65D21",
          "accent-orange-600": "#AB4E19",
          "accent-orange-700": "#8C3D10",
          "accent-orange-800": "#77340D",
          "accent-orange-900": "#572508", 

          "accent-red-050": "#FFEEEE",
          "accent-red-100": "#FACDCD",
          "accent-red-200": "#F29B9B",
          "accent-red-300": "#E66A6A",
          "accent-red-400": "#D64545",
          "accent-red-500": "#BA2525",
          "accent-red-600": "#A61B1B",
          "accent-red-700": "#911111",
          "accent-red-800": "#780A0A",
          "accent-red-900": "#610404",  

          "accent-green-050": "#E3F9E5",
          "accent-green-100": "#C1EAC5",
          "accent-green-200": "#A3D9A5",
          "accent-green-300": "#7BC47F",
          "accent-green-400": "#57AE5B",
          "accent-green-500": "#3F9142",
          "accent-green-600": "#2F8132",
          "accent-green-700": "#207227",
          "accent-green-800": "#0E5814",
          "accent-green-900": "#05400A",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}

