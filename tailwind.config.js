/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Geist Mono"', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        'mono': ['"Geist Mono"', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
} 