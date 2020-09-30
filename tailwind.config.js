module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#f1f2ef',
          '200': '#dadbd3',
          '300': '#c2c4b7',
          '400': '#aaad9b',
          '500': '#92967f',
          '600': '#797c66',
          '700': '#5d604f',
          '800': '#424438',
          '900': '#272821',
        },
        body: {
          bg: '#F5F6F7',
        },
      },
      fontSize: {
        '7rem': '7rem',
      },
      fontFamily: {
        body: [
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      width: {
        '80px': '80px',
        '140px': '140px',
        '280px': '280px',
        '400px': '400px',
      },
      height: {
        '400px': '400px',
        '480px': '480px',
        '60vh': '60vh',
        '80vh': '80vh',
      },
      minHeight: {
        '400': '400px',
      },
      maxHeight: {
        '900': '900px',
        '60vh': '60vh',
      },
      inset: {
        '-50': '-50px',
        '56px': '56px',
      },
      zIndex: {
        '-1': '-1',
      },
      padding: {
        '1px': '1px',
      },
      borderRadius: {
        '3px': '3px',
        '2px': '2px',
      },
      opacity:{
        '80': '.8',
        '85': '.85',
        '90': '.9',
        '95': '.95',
      },
    },

    gradients: theme => ({
      'dance-to-forget': ['30deg', '#FF4E50', '#F9D423'],
      'bora-bora': ['30deg', '#2BC0E4', '#EAECC6'],
    }),
  },
  variants: {},
  plugins: [require('tailwindcss-plugins/gradients')],
}
