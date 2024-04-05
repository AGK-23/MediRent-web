/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008080",
        secondary: "#F8C8DC",
        main: "#f87316",
        third: "#008080",
        blue: "#086972",
        customPink: "#F8C8DC",
      },
      

      backgroundImage: {
        HomeImage: "url('assets/slider_1.png')",

      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      },
    },
    // 'sm': '540px',
    screens: {
      
      'xs': '240px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
  plugins: [],
}


