/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        pool: '#EFF5FF',
        grey: '#9699AA',
        denim: '#022959',
        'grey-bern': '#D6D9E6',
        'light-blue': '#ABBCFF',
        'light-grey': '#D6D9E6',
        'medium-grey': '#979797',
        'red-blood': '#EE374A',
        'sky-blue': '#BEE2FD',
        'light-purple': '#928CFF',
        orange: '#FFAF7E',
        purple: '#483EFF'
      },
      spacing: {
        1: '1px',
        2: '2px',
        4: '4px',
        6: '6px',
        8: '4px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        36: '36px',
        40: '40px',
        44: '44px',
        48: '48px',
        52: '52px',
        56: '56px',
        60: '60px',
        100: '100px',
        120: '120px'
      },
      borderRadius: {
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        pill: '999px'
      },
      fontSize: {
        2: '0.125rem',
        4: '0.25rem',
        6: '0.375rem',
        8: '0.5rem',
        10: '0.625rem',
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        30: '1.875rem',
        32: '2rem',
        36: '2.25rem',
        40: '2.5rem',
        46: '2.875rem',
        50: '3.125rem',
        56: '3.5rem',
        60: '3.75rem',
        80: '5rem'
      }
    }
  },
  plugins: []
};
