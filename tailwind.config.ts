import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0e7673",
        secondary: "#e8292f",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
