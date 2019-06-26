import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.9.0/css/all.css' integrity='sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E' crossOrigin='anonymous' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='description' content={`junn's website, portfolio, front-end developer`} />
        <meta name='keywords' content='front end, portfolio, junn, socker210, developer' />
        <meta name='og:title' content='Junn | website' />
        <meta name='og:site_name' content='https://socker210.github.io' />
        <meta name='og:description' content={`junn's website, portfolio, front-end developer`} />
        <meta name='og:image' content='og_image.png' />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
