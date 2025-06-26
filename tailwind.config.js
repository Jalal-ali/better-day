/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans React files
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          '"Font Being Rendered"', // Your primary font
          'Georgia',              // Similar serif fallback
          'serif'                 // Generic fallback
        ],
        sans: ['"Your Font"', 'Helvetica', 'Arial', 'sans-serif'], // Default sans-serif stack
        serif: ['Georgia', 'Times New Roman', 'serif'], // Serif fallback
        mono: ['"Fira Code"', 'monospace'], // Monospace stack
      },
    },
  },
  plugins: [],
}