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
        secondary: {
          light: "#9278FF",
          dark: "#7B5DF9"
        },
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
        body: {
          light: "#FFF",
          dark: "#000"
        },
        white: "#FFF",
        black: "#000"
      },
      fontFamily: {
        primary: ["League Spartan", "sans-serif"]
      },
      fontSize: {
        xs: "0.75rem",
        md: "1.25rem",
        lg: "1.5rem",
        xl: "2rem"
      },
      width: {
        "5v": "calc(5 * 1vw)",
        "100p": "100px",
        "180p": "180px"
      },
      height: {
        "10v": "calc(10 * 1vh)",
        "2/3": "75%",
        "100p": "100px"
      },
      padding: {
        "6v": "6vh",
        "5p": "5px",
        "12p": "12px"
      }
    },
  },
  plugins: [],
}
