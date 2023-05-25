import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from 'twin.macro'

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta name='theme-color' content={theme('colors.synthwave.primary')} />
        <link rel='icon' href='favicon.ico' sizes='48x48' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
