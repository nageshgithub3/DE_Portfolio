/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111414",
        secondary: "#181C1C",
        card: "#1E2222",
        "warm-white": "#F2F0E8",
        "muted-gray": "#A5AAA5",
        gold: "#D8B45A",
        "gold-dim": "#B8943A",
        blush: "#E9A9BA",
        "border-dark": "#343939",
        "success-green": "#8FB59B",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        editorial: ["Playfair Display", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.6s ease-out forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "flow-down": "flowDown 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        flowDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
