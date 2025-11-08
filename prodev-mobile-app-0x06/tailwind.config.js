// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // Core directories for Expo Router
//     "./app/**/*.{js,jsx,ts,tsx}",
//     "./components/**/*.{js,jsx,ts,tsx}",

//     // (Optional) include styles or utility folders if you create them later
//     "./styles/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#34967C", // 🌿 your main brand color (matches ALX tasks)
//         secondary: "#0601B4",
//         accent: "#FAC02B",
//       },
//       fontFamily: {
//         sans: ["System", "ui-sans-serif"],
//         inter: ["Inter", "sans-serif"], // if you ever add Inter font
//       },
//       borderRadius: {
//         xl: "1rem",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color', // Add your custom colors here
      }
    },
  },
  plugins: [],
}