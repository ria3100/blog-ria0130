const path = require('path')

module.exports = {
  pageExtensions: ['tsx'],
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
}
