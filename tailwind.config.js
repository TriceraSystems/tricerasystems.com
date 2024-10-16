/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {

        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'background': '#09090b',
        'input': '#27272a'
      }
    }
  },
  plugins: []
};