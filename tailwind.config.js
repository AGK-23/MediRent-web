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
        third: "#FF0000",
        blue: "#086972",
      },
      // customBlue: "#0c527b",
      // w: "#262626",
      // deepFade: "#554728",
      // red: "#FF0000",
      // blur: "#1096E5",
      // gry: "#666666",
      // b: "#3E7696",
      // r: "#6E6B66",
      // o: "#212121",
      // or:"#FFFFFF"

      backgroundImage: {
        HomeImage: "url('assets/slider_1.jpg')",

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


