/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#08090D',
          secondary: '#101218',
          card: '#151820',
          hover: '#1B1F2A',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-accent': 'rgba(98, 133, 255, 0.25)',
        },
        electric: {
          DEFAULT: '#6285FF',
          glow: 'rgba(98, 133, 255, 0.35)',
          light: '#8CA6FF',
          dark: '#3D5EC7',
        },
        cyan: {
          electric: '#00F0FF',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#71717A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow-pulse': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      boxShadow: {
        'electric': '0 0 35px -5px rgba(98, 133, 255, 0.3)',
        'electric-sm': '0 0 15px -3px rgba(98, 133, 255, 0.35)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #6285FF 0%, #00F0FF 100%)',
      }
    },
  },
  plugins: [],
}

