module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#334D5C',    // Dark blue-gray, reminiscent of a stormy sea
        'cadet-gray': '#6E8A94',  // Lighter blue-gray, like weathered wood
        'almond': '#EFC88B',      // Warm almond for treasure and parchment
        'dim-gray': '#5A6D7C',    // Muted gray-blue for shadows
        'outer-space': '#1C2D3F', // Deep blue-black for night skies
        'light-cyan': '#9CD6DE',  // Light cyan for water and skies
        'sky-blue': '#57A8AC'     // Muted sky blue for water and adventure
    }
    
    

      // colors: {
      //   'gunmetal': '#25323f',
      //   'cadet-gray': '#a3bac0',
      //   'almond': '#f4dcc4',
      //   'dim-gray': '#5e676b',
      //   'outer-space': '#4c555b',
      //   'light-cyan': '#E0FFFF',
      //   'sky-blue': '#87CEEB',
      // }, 
      ,
        keyframes: {
        pulse: {
          '10%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
