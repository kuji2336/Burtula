module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
       colors:{
          maincolor: '#00263F',
          burtulawihite:'#FFFFFF',
          baseColor:'#AADBD1',
          baseorange:'#EE3A25'
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
