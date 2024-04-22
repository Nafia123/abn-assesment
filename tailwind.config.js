/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'selector',

  theme: {
    fontFamily: {
      'sans': ['Roboto', 'uit-sans-serif', 'system-ui']
    },
    extend: {}
  },
  plugins: []
}

