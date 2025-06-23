/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        op: {
          blue: '#0099DB',
          yellow: '#FFD700',
          red: '#E63946',
          beige: '#FFF3C7',
          brown: '#8B5C2A',
          black: '#222222',
          white: '#FFFFFF',
          orange: '#FF8C00',
        }
      }
    }
  },
  plugins: []
}
