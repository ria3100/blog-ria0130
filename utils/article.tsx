import * as React from 'react'
import { preval } from 'ts-transformer-preval-macro'

const ReactDomServer = require('react-dom/server')
const { MDXProvider } = require('@mdx-js/react')

import { formatSEODate, getSecondsSinceEpoch } from '~/utils/formatters'

const articleFileNames = (): Promise<string[]> => {
  const articleFileNames =
    preval`module.exports = require("fs").readdirSync("./article")` || []
  return Promise.resolve(articleFileNames)
}

const createArticleList = (fileNameList: string[]) => {
  return fileNameList
    .map(name => {
      const { default: Component } = require(`../article/${name}/index.mdx`)

      const body: string = ReactDomServer.renderToStaticMarkup(
        <MDXProvider components={{}}>
          <Component />
        </MDXProvider>
      )

      const {
        title,
        tags,
        publishDate,
        modifiedDate,
        seoDescription,
        hideProgressBar = false,
        exclude = false,
      } = require(`../article/${name}/index.mdx`).meta as Meta

      const cleaned_name = name.split('.')[0]

      const formattedPublishDate = formatSEODate(publishDate)
      const formattedModifiedDate = formatSEODate(modifiedDate, true)
      const secondsSinceEpoch = getSecondsSinceEpoch(formattedPublishDate)

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
    })
    .filter(article => !article.exclude)
}

export const getArticles = async () => {
  const fileNameList = await articleFileNames()
  const sortedList = createArticleList(fileNameList)
    .sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch)
    .reverse()

  return sortedList
}
