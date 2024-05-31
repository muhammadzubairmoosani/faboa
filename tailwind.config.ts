import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#264C00",
        "primary-700": "#172E00",
        "primary-900": "#1A4314",
        "gray-400": "#AAADA7",
        "gray-600": "#777B74",
        "secondary-50": "#F9F4EB",
        "secondary-600": "#9A782F",
      },
      fontFamily: {
        sans: ["Heebo", "sans-serif"], // Add Heebo font
      },
    },
  },
  plugins: [],
};
export default config;
