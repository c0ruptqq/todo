/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.vue"],
  theme: {
    colors: {
      // ...
      'bg': '#1d232a',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

