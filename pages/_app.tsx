import React from 'react'
import { NextComponentType, NextPageContext } from 'next'

import '~/styles/main.scss'
import '~/styles/article.scss'

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}
const MyApp: React.FC<Props> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default MyApp
