/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B6AE8',
          dark: '#4858D9',
          light: '#7A86ED',
        },
        cta: {
          DEFAULT: '#F05D2A',
          dark: '#E85A2A',
          light: '#FF7A4D',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        black: '#0A0A0A',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
      },
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem',
        '26': '6.5rem',
      },
      borderRadius: {
        'sm': '8px',
        'DEFAULT': '12px',
        'md': '16px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '28px',
        '3xl': '32px',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(91, 106, 232, 0.06), 0 4px 12px rgba(91, 106, 232, 0.08)',
        'card': '0 2px 4px rgba(91, 106, 232, 0.04), 0 8px 24px rgba(91, 106, 232, 0.1)',
        'card-hover': '0 4px 8px rgba(91, 106, 232, 0.06), 0 12px 36px rgba(91, 106, 232, 0.14)',
        'button': '0 4px 8px rgba(240, 93, 42, 0.2), 0 8px 24px rgba(240, 93, 42, 0.3)',
        'button-hover': '0 4px 8px rgba(240, 93, 42, 0.2), 0 12px 28px rgba(240, 93, 42, 0.35)',
        'elevated': '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        'glow-primary': '0 0 20px rgba(91, 106, 232, 0.15), 0 0 40px rgba(91, 106, 232, 0.08)',
        'glow-cta': '0 0 20px rgba(240, 93, 42, 0.15), 0 0 40px rgba(240, 93, 42, 0.08)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        btnShimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
