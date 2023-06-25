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
        'aquamarine': '#7FFFD4'
      }
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
