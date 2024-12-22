import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EFED',
          100: '#CCE0DC',
          200: '#99C1B9',
          300: '#66A296',
          400: '#338373',
          500: '#004235',
          600: '#003B30',
          700: '#002E25',
          800: '#00201A',
          900: '#001310',
        },
        secondary: {
          50: '#F5F9F0',
          100: '#E8F2E1',
          200: '#D2E5C3',
          300: '#BBD8A5',
          400: '#A4CB87',
          500: '#8EBB56',
          600: '#7AA842',
          700: '#658F31',
          800: '#507522',
          900: '#3C5C14'
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
