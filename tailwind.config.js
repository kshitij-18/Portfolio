/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        light: {
          // Define colors for light mode
          text: '#333', // Default text color for light mode
          background: '#fff', // Default background color for light mode
        },
        dark: {
          // Define colors for dark mode
          text: '#f9f9f9', // Default text color for dark mode
          background: '#333', // Default background color for dark mode
        },
      }
    },
  },
  variants: {
    extend: {
      // Add 'dark' variant to 'textColor' and 'backgroundColor' utilities
      textColor: ['dark'],
      backgroundColor: ['dark'],
    },
  },
  plugins: [require("tailwindcss-animate")],
}