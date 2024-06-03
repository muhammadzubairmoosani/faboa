import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY COLORS
        "primary-50": "#E6F0DD",
        "primary-100": "#D7E6C9",
        "primary-200": "#BAD1A3",
        "primary-500": "#264C00",
        "primary-600": "#1E3D00",
        "primary-700": "#172E00",
        // GRAY COLORS
        "gray-25": "#F9FAF9",
        "gray-50": "#F6F7F6",
        "gray-100": "#EAEBE9",
        "gray-200": "#D5D6D3",
        "gray-300": "#BFC2BD",
        "gray-400": "#AAADA7",
        "gray-500": "#959991",
        "gray-600": "#777B74",
        "gray-700": "#5A5C57",
        "gray-800": "#3C3E3B",
        "gray-900": "#1F1F1E",
        "gray-950": "#10100F",
        // SECONDARY COLORS
        "secondary-50": "#F9F4EB",
        "secondary-100": "#F3EAD8",
        "secondary-200": "#E6D5B1",
        "secondary-500": "#C1963B",
        "secondary-600": "#9A782F",
        "secondary-700": "#745A23",
      },
      fontFamily: {
        sans: ["Heebo", "sans-serif"], // Add Heebo font
      },
    },
  },
  plugins: [],
};
export default config;
