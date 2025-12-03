/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./templates/**/*.html",
    "./dist/**/*.html"
  ],
  theme: {
    extend: {
      // JCINK Theme Colors - Easily customizable
      colors: {
        // Primary brand colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Secondary accent colors
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        // Forum-specific semantic colors
        forum: {
          bg: 'var(--forum-bg, #f8fafc)',
          surface: 'var(--forum-surface, #ffffff)',
          border: 'var(--forum-border, #e2e8f0)',
          text: 'var(--forum-text, #1e293b)',
          'text-muted': 'var(--forum-text-muted, #64748b)',
          accent: 'var(--forum-accent, #0ea5e9)',
          'accent-hover': 'var(--forum-accent-hover, #0284c7)',
        },
        // Category colors for forum organization
        category: {
          1: 'var(--category-1, #ef4444)',
          2: 'var(--category-2, #f97316)',
          3: 'var(--category-3, #eab308)',
          4: 'var(--category-4, #22c55e)',
          5: 'var(--category-5, #06b6d4)',
          6: 'var(--category-6, #8b5cf6)',
        },
        // User group colors
        group: {
          admin: 'var(--group-admin, #dc2626)',
          mod: 'var(--group-mod, #16a34a)',
          member: 'var(--group-member, #2563eb)',
          guest: 'var(--group-guest, #64748b)',
        }
      },
      // Custom spacing for forum elements
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Forum-specific sizing
      width: {
        'sidebar': '280px',
        'avatar-sm': '40px',
        'avatar-md': '80px',
        'avatar-lg': '150px',
        'avatar-xl': '200px',
      },
      height: {
        'avatar-sm': '40px',
        'avatar-md': '80px',
        'avatar-lg': '150px',
        'avatar-xl': '200px',
      },
      // Typography
      fontFamily: {
        'forum': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      // Border radius for forum elements
      borderRadius: {
        'forum': '0.5rem',
        'avatar': '9999px',
      },
      // Box shadows for depth
      boxShadow: {
        'forum': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'forum-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'forum-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'post': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      // Animations
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
      },
      // Max widths for forum container
      maxWidth: {
        'forum': '1200px',
        'forum-wide': '1400px',
      },
      // Z-index scale for forum overlays
      zIndex: {
        'dropdown': '100',
        'sticky': '200',
        'modal': '300',
        'tooltip': '400',
      },
    },
  },
  plugins: [],
  // Enable dark mode with class strategy
  darkMode: 'class',
}
