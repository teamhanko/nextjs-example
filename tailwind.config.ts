import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "brand-color": "#ff2e4c",
      "brand-color-shade-1": "#d62a4c",
      "background-color": "#151C33",
      "brand-contrast-color": "#232A3F",
      "base-color": " #FFFFFF",
      "color-shade-1": " #aaaebf",
      "error-shade": "#FF6068",
      "color-shade-2": "#393F52",
      "link-color": "#b3cdff",
    },
    fontFamily: {
      IBM: ["IBM Plex Sans", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
export default config;
