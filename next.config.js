const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  },
})
