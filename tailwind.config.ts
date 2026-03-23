import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", 
        foreground: "#ffffff", 
        void: "#000000",       
        blood: {
          DEFAULT: "#8a0303",  
          light: "#a80b0b",
        },
        silver: "#a1a1aa",     
        border: "#27272a",     
        card: "#0a0a0a",       
        primary: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        secondary: "#121212",
        muted: {
          DEFAULT: "#27272a",
          foreground: "#71717a",
        },
        destructive: "#ef4444",
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 10s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;