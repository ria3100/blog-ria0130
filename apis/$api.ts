/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './article'
import { Methods as Methods1 } from './article/_contentId@string'
import { Methods as Methods2 } from './tag'
import { Methods as Methods3 } from './tag/_contentId@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/article'
  const PATH1 = '/tag'
  const GET = 'GET'

  return {
    article: {
      _contentId: (val0: string) => {
        const prefix0 = `${PATH0}/${val0}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    tag: {
      _contentId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
