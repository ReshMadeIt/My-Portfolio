/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
  extend: {
    keyframes: {
      glow: {
        "0%, 100%": { opacity: 1, transform: "translateY(0px)" },
        "50%": { opacity: 0.8, transform: "translateY(-2px)" }
      }
    },
    animation: {
      glow: "glow 2.5s ease-in-out infinite"
    }
  }
},
  plugins: [],
};

