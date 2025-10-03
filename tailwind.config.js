// tailwind.config.js
export default {
  darkMode: "class", // keep this for dark mode compatibility too
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("light", ".light &"); // enables light: prefix
    },
  ],
};
