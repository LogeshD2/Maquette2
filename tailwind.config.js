/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontSize: {
          'h1': '3.81em',  
          'h2': '3.052em',     
          'h3': '2.441em',     
          'h4': '1.953em',     
          'h5': '1.563em',     
          'h6': '1.25em',     
          'h7': '1em',       
          'h8': '0.8em',     
        },
        colors: {
            white: '#ffffff',             
            gray: '#A9A9A9',    
            black: '#000000',              
            royalBlue: '#4169E1',         
        },
        backgroundImage: {
          'customBackground': "url('assets/background/BackgroundImage.png')",  
        },
      },
    },
    plugins: [],
  }
  