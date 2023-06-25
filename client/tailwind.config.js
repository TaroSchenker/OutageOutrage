module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#25323f',
        'cadet-gray': '#a3bac0',
        'almond': '#f4dcc4',
        'dim-gray': '#5e676b',
        'outer-space': '#4c555b'
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
