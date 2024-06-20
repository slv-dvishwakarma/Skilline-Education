import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#262626',
        secondary: '#ff0',
        tertiary: '#FFFFFF',
        fourthly: "#171717",
      },
      keyframes: {
        slideOut: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
        slideIn: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
