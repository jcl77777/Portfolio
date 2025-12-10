/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Gradient backgrounds
    'bg-certo-gradient',
    'bg-sparks-gradient',
    'bg-custo-gradient',
    // Custo theme colors (dynamically applied)
    'text-custo-blue',
    'text-custo-blue-light',
    'hover:border-custo-blue',
    'dark:hover:border-custo-blue-light',
    'dark:text-custo-blue-light',
    'from-custo-blue',
    'from-custo-blue-light',
    'to-custo-blue',
    'to-custo-blue-light',
    'dark:from-custo-blue',
    'dark:from-custo-blue-light',
    'dark:to-custo-blue',
    'dark:to-custo-blue-light',
    'dark:shadow-custo-blue/50',
    // Sparks theme colors (dynamically applied)
    'text-sparks-orange',
    'text-sparks-yellow',
    'hover:text-sparks-yellow',
    'hover:border-sparks-orange',
    'dark:hover:border-sparks-yellow',
    'dark:text-sparks-yellow',
    'from-sparks-yellow',
    'from-sparks-orange',
    'to-sparks-yellow',
    'to-sparks-orange',
    'dark:from-sparks-yellow',
    'dark:from-sparks-orange',
    'dark:to-sparks-yellow',
    'dark:to-sparks-orange',
    'dark:shadow-sparks-orange/50',
  ],
  theme: {
    extend: {
      colors: {
        // Portfolio seafoam green theme
        seafoam: {
          50: '#F0F9F4',
          100: '#D9F0E3',
          200: '#B3E1C7',
          300: '#9DC4B1',
          400: '#81B29A',
          500: '#5E8C75',
          600: '#4A7060',
          700: '#3D5A50',
          800: '#2F4640',
          900: '#1F2F2A',
        },
        // Certo purple (for product pages only)
        certo: {
          'purple-light': '#a855f7',
          'purple-dark': '#7c3aed',
          'success': '#32C755',
          'warning': '#FF9400',
          'error': '#FF3B30',
        },
        // Sparks yellow/orange (for product pages only)
        sparks: {
          'yellow': '#FACC15',
          'orange': '#F97316',
        },
        // Custo blue (for product pages only)
        custo: {
          'blue': '#1E7FF0',
          'blue-light': '#4A8FE3',
          'blue-dark': '#3873C7',
        },
      },
      fontFamily: {
        'rounded': [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Rounded"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        'system': [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'seafoam-gradient': 'linear-gradient(135deg, #9DC4B1 0%, #81B29A 100%)',
        'certo-gradient': 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
        'sparks-gradient': 'linear-gradient(135deg, #FACC15 0%, #F97316 100%)',
        'custo-gradient': 'linear-gradient(135deg, #4A8FE3 0%, #1E7FF0 100%)',
      },
    },
  },
  plugins: [],
}

