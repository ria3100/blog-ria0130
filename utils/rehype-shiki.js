const shiki = require('shiki')
const visit = require('unist-util-visit')
const {
  commonLangIds,
  commonLangAliases,
  otherLangIds,
} = require('shiki-languages')
const hastToString = require('hast-util-to-string')
const u = require('unist-builder')

const languages = [...commonLangIds, ...commonLangAliases, ...otherLangIds]

const attacher = (options) => {
  const settings = options || {}
  const theme = settings.theme || 'nord'
  const useBackground = settings.useBackground && true
  let shikiTheme
  let highlighter

  try {
    shikiTheme = shiki.getTheme(theme)
  } catch (_) {
    try {
      shikiTheme = shiki.loadTheme(theme)
    } catch (_) {
      throw new Error('Unable to load theme: ' + theme)
    }
  }

  const visitor = (node, index, parent) => {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return
    }

    if (useBackground) {
      addStyle(parent, 'background: ' + shikiTheme.bg)
    }

    const lang = codeLanguage(node)

    if (!lang) {
      // Unknown language, fall back to a foreground colour
      addStyle(node, 'color: ' + shikiTheme.settings.foreground)
      return
    }

    const tokens = highlighter.codeToThemedTokens(hastToString(node), lang)
    const tree = tokensToHast(tokens)

    node.children = tree
  }

  const transformer = async (tree) => {
    highlighter = await shiki.getHighlighter({
      theme: shikiTheme,
      langs: languages,
    })
    visit(tree, 'element', visitor)
  }

  return transformer
}

const tokensToHast = (lines) => {
  let tree = []

  for (const line of lines) {
    if (line.length === 0) {
      tree.push(u('text', '\n'))
    } else {
      for (const token of line) {
        tree.push(
          u(
            'element',
            {
              tagName: 'span',
              properties: { style: 'color: ' + token.color },
            },
            [u('text', token.content)]
          )
        )
      }

      tree.push(u('text', '\n'))
    }
  }

  // Remove the last \n
  tree.pop()

  return tree
}

const addStyle = (node, style) => {
  const props = node.properties || {}
  const styles = props.style || []
  styles.push(style)
  props.style = styles
  node.properties = props
}

const codeLanguage = (node) => {
  const className = node.properties.className || []
  let value

  for (const element of className) {
    value = element

    if (value.slice(0, 9) === 'language-') {
      return value.slice(9)
    }
  }

  return null
}

module.exports = attacher
