import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        main: '#a388ee',
        overlay: 'rgba(0,0,0,0.8)',
        
        // light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',

        // dark mode
        darkBg: '#272733',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121',

        // theme colors
        primary: {
          DEFAULT: "var(--main)",
          foreground: "var(--text)",
        },
        secondary: {
          DEFAULT: "var(--bg)",
          foreground: "var(--text)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--text)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        base: '5px',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'brutal': '4px 1px 0px 0px var(--border)',
        'brutal-lg': '8px 2px 0px 0px var(--border)',
        'brutal-sm': '2px 1px 0px 0px var(--border)',
        light: '4px 1px 0px 0px #000',
        dark: '4px 1px 0px 0px #000',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '1px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-1px',
      },
      fontWeight: {
        base: '500',
        heading: '800',
      },
    },
  },
  plugins: [],
}

export default config
