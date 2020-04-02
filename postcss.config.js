const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelist: ['shiki', 'bg-gray-900', 'p-6', 'text-4xl', 'text-3xl', 'text-xl'],
})

const cssnano = require('cssnano')({ preset: 'default' })

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'development' ? [] : [cssnano, purgecss]),
  ],
}
