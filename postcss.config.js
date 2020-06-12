const isProduction = [
  [
    '@fullhuman/postcss-purgecss',
    {
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
    },
  ],
  ['cssnano', { preset: 'default' }],
]

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'development' ? [] : isProduction),
  ],
}
