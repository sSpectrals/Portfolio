/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
        pink: {
          DEFAULT: "#ec4899",
          100: "#fbdaeb",
          200: "#f7b6d6",
          300: "#f491c2",
          400: "#f06dad",
          500: "#ec4899",
          600: "#bd3a7a",
          700: "#8e2b5c",
          800: "#5e1d3d",
          900: "#2f0e1f",
        },
        teal: {
          100: "#d2f5f9",
          200: "#a5eaf3",
          300: "#78e0ed",
          400: "#4bd5e7",
          500: "#1ecbe1",
          600: "#18a2b4",
          700: "#127a87",
          800: "#0c515a",
          900: "#06292d",
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
