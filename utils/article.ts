import { preval } from 'ts-transformer-preval-macro'

import { mdx2string } from '~/utils/mdx2string'
import { formatSEODate, getSecondsSinceEpoch } from '~/utils/formatters'

const articleFileNames = (): Promise<string[]> => {
  const articleFileNames =
    preval`module.exports = require("fs").readdirSync("./contents")` || []
  return Promise.resolve(articleFileNames)
}

const loadArticle = async (name: string) => {
  const { default: MDXComponent, meta } = await import(
    `../contents/${name}/index.mdx`
  )

  const {
    title,
    tags,
    publishDate,
    modifiedDate,
    seoDescription,
    hideProgressBar = false,
    exclude = false,
  } = meta

  const cleaned_name = name.split('.')[0]

  const formattedPublishDate = formatSEODate(publishDate)
  const formattedModifiedDate = formatSEODate(modifiedDate, true)
  const secondsSinceEpoch = getSecondsSinceEpoch(formattedPublishDate)
  const body = mdx2string(MDXComponent).replace(
    /style="0:background: #272822"/g,
    ''
  )

  const article: Article = {
    title,
    tags,
    publishDate,
    formattedPublishDate,
    modifiedDate,
    formattedModifiedDate,
    seoDescription,
    exclude,
    urlPath: `/${cleaned_name}`,
    fullUrlPath: `/article/${cleaned_name}`,
    canonicalUrl: `/${cleaned_name}`,
    hideProgressBar,
    name: cleaned_name,
    type: 'post',
    secondsSinceEpoch,
    body,
  }

  return article
}

export const getArticles = async () => {
  const fileNameList = await articleFileNames()

  const articles = Promise.all(fileNameList.map(name => loadArticle(name)))

  const sortedList = (await articles)
    .filter(
      article => process.env.NODE_ENV === 'development' || !article.exclude
    )
    .sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch)
    .reverse()

  return sortedList
}

export const getArticle = async (name: string) => {
  const article = await loadArticle(name)

  return article
}
