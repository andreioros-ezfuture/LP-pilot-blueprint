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
          DEFAULT: '#FF6B35',
          dark: '#E85A2A',
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
        'soft': '0 2px 8px rgba(91, 106, 232, 0.08)',
        'card': '0 4px 20px rgba(91, 106, 232, 0.1)',
        'card-hover': '0 8px 30px rgba(91, 106, 232, 0.15)',
        'button': '0 2px 8px rgba(91, 106, 232, 0.15)',
        'button-hover': '0 4px 16px rgba(91, 106, 232, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
