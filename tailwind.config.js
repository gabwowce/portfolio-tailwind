/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./**/*.html","./js/**/*.js"],
  darkMode: "class",
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          DEFAULT:"#635BFF", 50:"#f8f9ffc5", 100:"#E0E3FF", 200:"#C2C7FF",
          300:"#A3ABFF", 400:"#858FFF", 500:"#6A74FF", 600:"#635BFF",
          700:"#5649E8", 800:"#463AC2", 900:"#38309B"
        },
        accent: {
          50:"#f3fffa",100:"#CFFCEB",200:"#A1F5D6",300:"#6BEBBD",
          400:"#3FDEA6",500:"#19C98E",600:"#10A476",700:"#0D825E",
          800:"#0A644A",900:"#074D3A"
        }
      },
      boxShadow:{ card:"0 6px 24px -8px rgba(0,0,0,0.12)" },
      borderRadius:{ xl:"1rem","2xl":"1.25rem" },
      fontFamily:{ sans:["Inter","system-ui","Segoe UI","Roboto","Arial","sans-serif"] }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
