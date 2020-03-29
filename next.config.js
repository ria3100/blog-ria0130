const path = require('path')
const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')({
  // parse mdx files
  extension: /\.mdx?$/,
})

module.exports = withMDX(
  withCSS({
    pageExtensions: ['tsx', 'mdx'],
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/list': { page: '/list' },
      }
    },
    webpack: config => {
      config.resolve.alias['~'] = path.resolve(__dirname)
      return config
    },
  })
)
