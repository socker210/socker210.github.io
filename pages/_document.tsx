import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from 'twin.macro'

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta name='theme-color' content={theme('colors.synthwave.primary')} />
        <meta name='description' content={`Junyong's personal website`} />
        <meta name='keywords' content='Frontend, React, Next.js, Programming' />
        <meta name='og:type' content='blog' />
        <meta name='og:description' content={`Junyong's personal website`} />
        <meta
          name='og:image'
          content='https://socker210.github.io/assets/images/og-image.png'
        />
        <meta name='og:locale' content='ko_KR' />
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
