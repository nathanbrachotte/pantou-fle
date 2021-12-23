module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#F9FAFF',
        background: '#F9FAFF',
        'primary-light': '#BFC0F0',
        'primary-dark': '#1C1E52',
        primary: '#393A73',
        'secondary-very-light': '#FEC0A0',
        'secondary-light': '#FD8061',
        'secondary-dark': '#DE5E78',
        'tertiary-light': '#E6F8FF',
        tertiary: '#00B5FF',
        error: '#DE5E78',
        success: '#24997F',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
