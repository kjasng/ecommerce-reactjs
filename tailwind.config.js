/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#333',
      'secondary': '#888',
      'third': '#555',
      'sub-color': '#4040',
      'black': '#000',
      'white': '#fff',
      'transparent': 'transparent',
      'none': 'none'
    },
    extend: {
      scale: ["group-hover"]
    },
  },
  plugins: [],
}

