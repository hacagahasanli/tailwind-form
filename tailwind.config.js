/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'login-br': '#E6E6E6',
        'login-main': '#1A4CA1',
      },
    },
  },
  plugins: [],
  content: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.css', // Include your styles.css file here
  ],
}

