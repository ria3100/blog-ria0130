const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelist: [
    'shiki',
    'bg-gray-900',
    'p-4',
    'mb-6',
    'px-4',
    'text-3xl',
    'text-2xl',
    'text-xl',
  ],
})

const cssnano = require('cssnano')({ preset: 'default' })

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'development' ? [] : [cssnano, purgecss]),
  ],
}
