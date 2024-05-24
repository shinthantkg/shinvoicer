/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1F213A",
          dark: "#141625"
        },
        secondary: "#7B5DF9",
        accent: "#9196C0",
        status: {
          draft: {
            text: "#FFF",
            background: "#DFE3FA0F"
          },
          pending: {
            text: "#F69931",
            background: "#3B2117"
          },
          paid: {
            text: "#31D49B",
            background: "#1F2C3F"
          },
          rejected: {
            text: "#EF4444",
            background: "#FEE2E2"
          }
        },
        white: "#FFF",
      },
      fontFamily: {
        primary: ["League Spartan", "sans-serif"]
      },
      fontSize: {
        "xs": "0.75rem",
        "md": "1.25rem",
        "lg": "1.5rem",
        "xl": "2rem"
      }
    },
  },
  plugins: [],
}

