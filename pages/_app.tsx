import React from 'react'
import { NextComponentType, NextPageContext } from 'next'

import '../style/tailwind.css'

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}
const MyApp: React.FC<Props> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default MyApp
