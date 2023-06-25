module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#25323f',
        'cadet-gray': '#a3bac0',
        'almond': '#f4dcc4',
        'dim-gray': '#5e676b',
        'outer-space': '#4c555b',
        'light-cyan': '#E0FFFF',
        'sky-blue': '#87CEEB',

      }, 
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
