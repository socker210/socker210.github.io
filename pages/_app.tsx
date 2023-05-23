import type { ReactNode, ReactElement } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Font from '@styles/Font'
import GlobalStyles from '@styles/GlobalStyles'
import '@styles/hljs-theme.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const component = getLayout(<Component {...pageProps} />)

  return (
    <Font>
      <GlobalStyles />
      {component}
    </Font>
  )
}
