/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        textPrimary: '#2E2E2E',
        textSecondary: '#6B6B6B',
        footer: '#444444',
        accentYellow: '#F9E6A1',
        accentLavender: '#CFC8F2',
        accentTeal: '#9FCBD0',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        lg: '12px',
        xl: '20px',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

