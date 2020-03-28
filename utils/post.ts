import jdown from 'jdown'

// ビルド時しか回らないからツリーシェイキング出来なくてもいい
import _ from 'lodash'

export const pageNum = 1

type Option = { [k in 'category' | 'tag']?: string }

// const rule = {
//   title: (val: any) => typeof val === 'string',
//   tag: (val: any) => {
//     if (!Array.isArray(val)) return false

//     return val.reduce(
//       (acc: boolean, item: any) => acc && typeof item === 'string',
//       true
//     )
//   },
//   category: (val: any) => typeof val === 'string',
//   createdAt: (val: any) => typeof val === 'number',
// }

// const validate = (contents: { [index: string]: Post }) => {
//   const PostError = Object.keys(contents).reduce((acc, slag) => {
//     // if (Object.keys(content) === Object.keys(rule)) return acc

//     const keys = Object.keys(contents[slag]) as (keyof Post)[]

//     const itemError = keys.reduce((acc, key) => {
//       if (!rule.hasOwnProperty(key)) return acc
//       if (!rule[key as keyof Post](contents[slag][key])) acc.push(key)
//       return acc
//     }, [] as string[])

//     if (itemError.length) acc[slag] = itemError

//     return acc
//   }, {} as { [index: string]: any })

//   return [Object.keys(PostError).length > 0, PostError]
// }

const loadContent = async () => {
  const contents = await jdown('./content')
  // .chain()
  // .sortBy(['createdAt'])
  // .value()

  // const [isError, errors] = validate(contents)

  return { contents }
}

export const getContents = async (option: Option = {}) => {
  const { contents } = await loadContent()

  // if (isError) {
  //   console.log(errors)
  //   return
  // }

  return contents
}

// export const getPageCount = async (option: Option = {}) => {
//   const pageCount = _.ceil(_.size(await getContents(option)) / pageNum)

//   return pageCount
// }

// export const getPageCountList = async (option: Option = {}) => {
//   const pageCountList = _.range(1, (await getPageCount(option)) + 1)
//   return pageCountList
// }

// export const getPostList = async (page: number, option: Option = {}) => {
//   const postList = _.slice(
//     await getContents(option),
//     (page - 1) * pageNum,
//     page * pageNum
//   )

//   return postList
// }
