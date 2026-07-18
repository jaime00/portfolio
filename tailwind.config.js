module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14b8a6', // teal-500
          light: '#5eead4', // teal-300
          dark: '#0d9488' // teal-600
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#1f2937' // gray-800
        }
      },
      fontFamily: {
        display: ['"Black Ops One"', 'system-ui'],
        accent: ['"Ruslan Display"', 'sans-serif']
      },
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(circle, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 100%)',
        'linear-gradient': 'linear-gradient(90deg, white, rgba(10,116,218,0))',
        'aurora-teal':
          'radial-gradient(ellipse at center, rgba(20,184,166,0.35), transparent 70%)'
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
        slower: '700ms'
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        'carousel-keyframe': {
          '0%': { transform: 'translateX(1000%)' },
          '100%': { transform: 'translateX(-1000%)' }
        },
        'fade-in-keyframe': {
          '0%': { opacity: 0, transform: 'translateY(12px) scale(0.98)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' }
        },
        'aurora-drift-1': {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(3%, -5%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.95)' }
        },
        'aurora-drift-2': {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(-5%, 3%) scale(1.1)' },
          '66%': { transform: 'translate(4%, -4%) scale(0.97)' }
        },
        'particle-float': {
          '0%': { transform: 'translateY(0px)', opacity: '0' },
          '20%': { opacity: '0.5' },
          '80%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-30px)', opacity: '0' }
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        'carousel-item': 'carousel-keyframe 30s linear infinite',
        fade: 'fade-in-keyframe 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'aurora-slow': 'aurora-drift-1 18s ease-in-out infinite',
        'aurora-slower': 'aurora-drift-2 26s ease-in-out infinite',
        particle: 'particle-float 12s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite'
      },
      scale: {
        103: '1.03'
      },
      screens: {
        'min-1045': '1045px',
        'min-445': '445px'
      }
    }
  },
  variants: {},
  plugins: []
}
