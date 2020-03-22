import jdown from 'jdown'

// ビルド時しか回らないからツリーシェイキング出来なくてもいい
import _ from 'lodash'

export const pageNum = 1

type Option = { [k in 'category' | 'tag']?: string }

export const getContents = async (option: Option = {}) => {
  const content = _(await jdown('./content'))
    .chain()
    .filter(option)
    .sortBy(['createdAt'])
    .value()

  return content as Post[]
}

export const getPageCount = async (option: Option = {}) => {
  const pageCount = _.ceil(_.size(await getContents(option)) / pageNum)

  return pageCount
}

export const getPageCountList = async (option: Option = {}) => {
  const pageCountList = _.range(1, (await getPageCount(option)) + 1)
  return pageCountList
}

export const getPostList = async (page: number, option: Option = {}) => {
  const postList = _.slice(
    await getContents(option),
    (page - 1) * pageNum,
    page * pageNum
  )

  return postList
}
