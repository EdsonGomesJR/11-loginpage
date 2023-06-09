/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        project: "1280px",
      },
      fontFamily: {
        sans: ["Titillium Web", "san-serif"],
      },
      colors: {
        purple: "#7C3AED",
        gray50: "#F8FAFC",
        gray100: "#F1F5F9",
        gray200: "#E2E8F0",
        gray300: "#CBD5E1",
        gray400: "#94A3B8",
        gray500: "#64748B",
        gray600: "#475569",
        gray700: "#334155",
        gray800: "#1E293B",
        gray900: "#0F172A",
      },
      backgroundImage: {
        bgDefault: "url('./assets/loginBackground.svg')",
      },
    },
  },
  plugins: [],
};
