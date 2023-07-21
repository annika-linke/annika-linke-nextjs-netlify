/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      beige: "#EBE7E4",
      petrol: "#285963",
      chestnut: "#994E36",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        headline: ["var(--font-pathway-gothic-one)"],
        sans: ["var(--font-source-sans-3)"],
      },
    },
  },
  plugins: [],
};
