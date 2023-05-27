const defaultTheme = require('tailwindcss/defaultTheme')

const extensions = ['js', 'ts', 'jsx', 'tsx', 'mdx']
const path = ['stories', 'pages', 'src']

const content = path.map((d) => `./${d}/**/*.{${extensions.join(',')}}`)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content,
  theme: {
    extend: {
      zIndex: {
        header: defaultTheme.zIndex[10],
      },
      spacing: {
        'm-header': '3.5rem',
        'pc-header': '5rem',
        'm-spacing': '1rem',
        'pc-spacing': '2rem',
      },
      colors: {
        synthwave: {
          primary: '#140628',
          secondary: '#F08506',
          contrastText: '#e1f9fd',
        },
      },
      fontFamily: {
        bungee: ['var(--font-bungee)'],
        notoSansKR: ['var(--font-notoSansKR)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
}
