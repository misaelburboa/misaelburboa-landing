module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 40rem) { ... }

      md: '768px',
      // => @media (min-width: 48rem) { ... }

      lg: '1024px',
      // => @media (min-width: 64rem) { ... }

      xl: '1280px',
      // => @media (min-width: 80rem) { ... }

      '2xl': '1536px',
      // => @media (min-width: 96rem) { ... }
    },
  },
  plugins: [],
}
