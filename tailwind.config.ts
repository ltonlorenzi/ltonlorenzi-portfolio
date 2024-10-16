import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust this path according to your project structure
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [daisyui],
  darkMode: "class", // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Light background
        foreground: "#171717", // Light text
        primary: "#38B2AC", // Example accent color
        "button-bg": "#4A5568",
        "button-text": "#ffffff",
        // Dark mode colors
        "dark-background": "#0a0a0a",
        "dark-foreground": "#ededed",
        "dark-primary": "#4FD1C5",
        "dark-button-bg": "#2D3748",
        "dark-button-text": "#ffffff",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"], // Enable dark mode variant for background color
      textColor: ["dark"], // Enable dark mode variant for text color
    },
  },
};
export default config;
