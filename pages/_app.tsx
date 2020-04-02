import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
const { PageTransition } = require('next-page-transitions')

import '../styles/main.scss'

type Props = {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
}
const MyApp: React.FC<Props> = ({ Component, pageProps }) => (
  <PageTransition timeout={160} classNames="page-transition">
    <Component {...pageProps} />
  </PageTransition>
)

export default MyApp
