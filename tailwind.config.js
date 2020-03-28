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
        'product-sans': ['Product Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      height: {
        '80vh': '80vh',
      },
      maxHeight: {
        '900': '900px',
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
