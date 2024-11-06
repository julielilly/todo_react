/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#faf3e0",
        "primary-color": "#f28b82",
        "hover-color": "#f86c6b",
        "header-color": "#3a3a3a",
        "finished-text-color": "#bbb",
        "delete-btn-color": "#ff6f61",
      },
    },
  },
  plugins: [],
};
