module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-10": "var(--blue-10)",
        "blue-50": "var(--blue-50)",
        "gray-10": "var(--gray-10)",
        "gray-20": "var(--gray-20)",
        "gray-40": "var(--gray-40)",
        "gray-70": "var(--gray-70)",
        "gray-90": "var(--gray-90)",
        "green-50": "var(--green-50)",
        "red-40": "var(--red-40)",
        "green-60": "var(--green-60)",
        "red-50": "var(--red-50)",
        "violet-50": "var(--violet-50)",
        white: "var(--white)",
        "yellow-50": "var(--yellow-50)",
        "blue-30": "var(--blue-30)",
        "gray-60": "var(--gray-60)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-1-r": "var(--body-1-r-font-family)",
        "body-2-r": "var(--body-2-r-font-family)",
        "body-3-r": "var(--body-3-r-font-family)",
        "header-1-m": "var(--header-1-m-font-family)",
        "tite-2-m": "var(--tite-2-m-font-family)",
        "title-1-m": "var(--title-1-m-font-family)",
        "title-1-r": "var(--title-1-r-font-family)",
        "body-body-3-regular": "var(--body-body-3-regular-font-family)",
        "caption-caption-1-regular":
          "var(--caption-caption-1-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
