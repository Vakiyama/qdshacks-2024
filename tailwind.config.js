/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        greenGlow: "0 0 20px 0 #16a34a",
        yellowGlow: "0 0 20px 0 ##fbbf24",
        redGlow: "0 0 20px 0 #b91c1c"
      }
    },
  },
  plugins: [],
};
