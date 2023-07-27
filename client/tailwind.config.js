module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#FFFFFF',             // White for a minimal background
        'secondary-background': '#F7F7F7',   // Light gray for layering
        'primary-text': '#000000',           // Black for text
        'secondary-text': '#4F4F4F',         // Dark gray for secondary text
        'border': '#E0E0E0',                 // Light gray for borders
        'dimmed-background': '#DADADA',      // Medium light gray for dimmed elements
        'dark-background': '#333333',        // Dark gray for dark background elements
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
