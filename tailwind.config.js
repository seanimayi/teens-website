/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'className',
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#1E3A8A", // Deep Royal Blue
          background: "#FFFFFF", // White
          textPrimary: "#111827", // Dark Gray
          textSecondary: "#6B7280", // Medium Gray
          borders: "#E5E7EB", // Light Gray
          success: "#10B981", // Green
          error: "#EF4444", // Red
          warning: "#F59E0B", // Amber
        },
        dark: {
          primary: "#1E3A8A", // Deep Royal Blue
          background: "#000000", // Deep Black
          surface: "#0A0A0A", // Dark Gray
          textPrimary: "#FFFFFF", // White
          textSecondary: "#9CA3AF", // Light Gray
          borders: "#1F2937", // Dark Gray
          success: "#10B981", // Green
          error: "#EF4444", // Red
          warning: "#F59E0B", // Amber
        },
      },
    },
  },
  plugins: [],
};
