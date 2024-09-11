import { text } from "stream/consumers";
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
        primary: {  
          100: '#0077C2',
          200: '#59a5f5',
          300: '#c8ffff',
        },
        accent: {
          100: '#00BFFF',
          200: '#00619a',
        },
        text: {
          100: '#333333',
          200: '#5c5c5c',
        },
        bg: {
          100: '#FFFFFF',
          200: '#f5f5f5',
          300: '#cccccc',
        },
      },
    },
  },
  plugins: [],
};
export default config;
