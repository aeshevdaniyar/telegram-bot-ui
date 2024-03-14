/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        vela: ["Vela", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#AC6AFF",
        },
        secondary: {
          DEFAULT: "#6C7275",
          foreground: "#E8ECEF",
        },
        foreground: "#141718",
        muted: {
          DEFAULT: "#F3F5F7",
          foreground: "#323735",
        },
        "file-img-bg": "#CCD5DF",
      },
      height: {
        header: "74px",
        "bottom-navigation": "86px",
        46: "180px",
      },
      width: {
        46: "180px",
      },
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
      spacing: {
        4.5: "1.125rem",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
