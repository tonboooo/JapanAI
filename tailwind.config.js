/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
      },
    },
    extend: {
      colors: {
        // 和紙生成色
        washi: {
          50: '#F8F7F2',
          100: '#F1EFE4',
          200: '#E6E2D3',
          300: '#D8D2BD',
          400: '#C7BEA4',
          500: '#B5AA8A',
          600: '#9A8F6F',
          700: '#7F7559',
          800: '#655C46',
          900: '#4A4334',
        },
        // 輝翠（きすい）- 深い緑色
        kisui: {
          50: '#E6F2ED',
          100: '#CCE5DB',
          200: '#99CBB7',
          300: '#66B193',
          400: '#33976F',
          500: '#007D4B',
          600: '#00643C',
          700: '#004B2D',
          800: '#00321E',
          900: '#00190F',
        },
        // 呂色（ろいろ）- 黒に近い暗い色
        ro: {
          DEFAULT: '#1C1C1C',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#C2C2C2',
          300: '#A3A3A3',
          400: '#858585',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1C1C1C',
          900: '#0A0A0A',
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(4)", opacity: "0" }
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "ripple": "ripple 1s linear forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
