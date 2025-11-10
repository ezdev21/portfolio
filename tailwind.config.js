/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include all React + TypeScript files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c770f0", // Example: Tailwind blue-800
        secondary: "#9333EA", // Example: Tailwind purple-600
        accent: "#F59E0B", // Example: Tailwind amber-500
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "ui-monospace"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
