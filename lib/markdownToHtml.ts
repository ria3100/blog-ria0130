import remark from 'remark'
import html from 'remark-html'

const markdownIt = require('markdown-it')
const markdownItClass = require('@toycode/markdown-it-class')
const shiki = require('shiki')
// import shiki from 'shiki'

const additions = {
  pre: 'shiki bg-gray-900 p-4 mb-6 mt-0 overflow-x-scroll',
  'pre > code': 'codeBlock',
  p: 'px-4 mb-6',
  h1: 'text-3xl px-4 mb-6',
  h2: 'text-2xl px-4 mb-6',
  h3: 'text-xl px-4 mb-6',
  ul: 'px-4 mb-6',
}

export default async function markdownToHtml(markdown: string) {
  const foo = await shiki
    .getHighlighter({ theme: 'monokai' })
    .then((highlighter: any) => {
      const md = markdownIt({
        html: true,
        highlight: (code: string, lang: any) => {
          return highlighter.codeToHtml(code, lang)
        },
      }).use(markdownItClass, additions)

      return md.render(markdown)
    })
  return foo
}
