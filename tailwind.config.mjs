/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        whitish: "#F9FAFF",
        background: "#FFF",
        "primary-light": "#DEDEF7",
        "primary-dark": "#1C1E52",
        primary: "#393A73",
        "secondary-very-light": "#FEC0A0",
        "secondary-light": "#FD8061",
        "secondary-dark": "#DE5E78",
        "tertiary-light": "#E6F8FF",
        tertiary: "#00B5FF",
        error: "#DE5E78",
        success: "#24997F",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        nunito: ["Nunito"],
        "nunito-sans": ["Nunito Sans"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
    },
  },
  plugins: [],
};
