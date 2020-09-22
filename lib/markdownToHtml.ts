const markdownIt = require('markdown-it')
const markdownItClass = require('@toycode/markdown-it-class')
const meta = require('markdown-it-meta')
const shiki = require('shiki')

const additions = {
  p: 'px-8 mb-8',
  h1: 'text-3xl px-8 mb-8',
  h2: 'text-2xl px-8 mb-8',
  h3: 'text-xl px-8 mb-8',
  ul: 'px-8 mb-8',
}

export const markdownToHtml = async (markdown: string) => {
  return await shiki
    .getHighlighter({ theme: 'monokai' })
    .then((highlighter: any) => {
      const md = markdownIt({
        html: true,
        highlight: (code: string, lang: any) => {
          return highlighter.codeToHtml(code, lang)
        },
      })
        .use(markdownItClass, additions)
        .use(meta)

      return md.render(markdown)
    })
}
