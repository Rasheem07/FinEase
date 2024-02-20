import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "var( --primary-color)",
        "secondary-color": "var(--secondary-color)",
        "default-black": "var(--default-black)",
        "gray1": "var(--gray-1)",
        "gray2": "var(--gray-2)",
        "gray3": "var(--gray-3)",
        "gray4": "var(--gray-4)",
        "gray5": "var(--gray-5)",
        "gray6": "var(--gray-6)",
        "BG3": "var(--BG3)",
        "BG2": "var(--BG2)",
        "BG1": "var(--BG1)",
        "red": "var(--red)",
        "green": "var(--green)",
        "mainBG": "var(--mainBG)",
        "label-color": "var( --label-color)",
        "page": "var(--page)"
      },
      lineHeight: {
        "line-height": "var(--line-height)"
      },
      boxShadow: {
        "mix1": "var(--shadow1)",
        "mix2": "var(--shadow2)",
        "special": "var(--sha)"
      }
    },
  },
  plugins: [],
};
export default config;
