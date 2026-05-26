/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green-dark': '#0A2E1F',
        'brand-green-mid': '#114232',
        'brand-green-light': '#87A922',
        'brand-green-glow': '#A4C639',
        'brand-forest': '#0B3D2E',
        'brand-emerald': '#1B5E3A',
        'brand-tech': '#0F4C35',
        'brand-bg': '#F7FAF5',
        'brand-bg-warm': '#FAFDF8',
        'brand-muted': '#5A7A6B',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(10, 46, 31, 0.08)',
        'glass-hover': '0 16px 48px rgba(10, 46, 31, 0.12)',
        'elevated': '0 4px 16px rgba(10, 46, 31, 0.06), 0 24px 64px rgba(10, 46, 31, 0.08)',
        'elevated-lg': '0 8px 24px rgba(10, 46, 31, 0.08), 0 32px 80px rgba(10, 46, 31, 0.12)',
        'inner-soft': 'inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.1)',
        'btn-depth': '0 4px 12px rgba(10, 46, 31, 0.3), 0 1px 3px rgba(10, 46, 31, 0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
        'btn-depth-hover': '0 8px 24px rgba(10, 46, 31, 0.35), 0 2px 6px rgba(10, 46, 31, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
        'float-card': '0 2px 8px rgba(10,46,31,0.04), 0 8px 24px rgba(10,46,31,0.06), 0 24px 48px rgba(10,46,31,0.08)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-0.5deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(135, 169, 34, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(135, 169, 34, 0.3)' },
        },
      },
      backgroundImage: {
        'gradient-forest': 'linear-gradient(135deg, #0A2E1F 0%, #0F4C35 40%, #1B5E3A 100%)',
        'gradient-tech': 'linear-gradient(135deg, #0B3D2E 0%, #114232 50%, #1A6B4A 100%)',
        'gradient-cta': 'linear-gradient(135deg, #1B5E3A 0%, #114232 40%, #0F4C35 70%, #0A2E1F 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(135,169,34,0.15) 0%, transparent 70%)',
      },
      letterSpacing: {
        'premium': '-0.02em',
        'premium-tight': '-0.03em',
        'wide-premium': '0.15em',
      },
      lineHeight: {
        'premium': '1.08',
        'premium-body': '1.7',
      },
    },
  },
  plugins: [],
}
