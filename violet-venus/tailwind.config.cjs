module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds
        'dark-bg': '#0a0e27',
        'dark-card': '#111829',
        'dark-secondary': '#1a1f3a',
        
        // Primary accent colors
        'primary-violet': '#8A2BE2',
        'primary-cyan': '#00FFF0',
        'primary-blue': '#0EA5E9',
        'primary-indigo': '#6366F1',
        
        // Secondary colors
        'accent-pink': '#EC4899',
        'accent-emerald': '#10B981',
        'accent-amber': '#F59E0B',
        
        // Neutral
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
        
        // Legacy space colors
        'space-900': '#020617',
        'space-800': '#05061a',
        'neon-violet': '#8A2BE2',
        'cyan-glow': '#00FFF0',
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '-0.4px' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '-0.2px' }],
        'base': ['16px', { lineHeight: '24px', letterSpacing: '0px' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '0px' }],
        'xl': ['20px', { lineHeight: '32px', letterSpacing: '-0.2px' }],
        '2xl': ['24px', { lineHeight: '36px', letterSpacing: '-0.4px' }],
        '3xl': ['32px', { lineHeight: '40px', letterSpacing: '-0.6px' }],
        '4xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.8px' }],
        '5xl': ['48px', { lineHeight: '56px', letterSpacing: '-1px' }],
        '6xl': ['60px', { lineHeight: '72px', letterSpacing: '-1.2px' }],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      boxShadow: {
        'glow': '0 8px 40px rgba(138,43,226,0.25), 0 0 60px rgba(0,255,240,0.08)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'neon': '0 0 20px rgba(138,43,226,0.4), 0 0 40px rgba(0,255,240,0.2)',
        'neon-lg': '0 0 30px rgba(138,43,226,0.5), 0 0 60px rgba(0,255,240,0.3)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        base: '8px',
        md: '12px',
        lg: '16px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(138,43,226,0.4), 0 0 40px rgba(0,255,240,0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(138,43,226,0.6), 0 0 60px rgba(0,255,240,0.4)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
