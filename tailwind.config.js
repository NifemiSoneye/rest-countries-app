// tailwind.config.js
export default {
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("light", ".light &"); // enables light: prefix
    },
  ],
};
