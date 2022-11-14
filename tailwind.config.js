/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        brushtheme:{
          primary:'#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3D4451',
          neutral: '#3D4451',
          "base-100": '#FFFFFF'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
