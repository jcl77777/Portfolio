/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
      },
    },
  },
  plugins: [],
}

