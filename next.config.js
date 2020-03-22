const path = require('path')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  },
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
})
