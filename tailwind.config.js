const extensions = ['js', 'ts', 'jsx', 'tsx', 'mdx']
const path = ['pages', 'src']

const content = path.map((d) => `./${d}/**/*.{${extensions.join(',')}}`)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content,
  theme: {
    extend: {
      colors: {
        synthwave: {
          purple: '#140628',
        },
      },
      fontFamily: {
        bungee: ['var(--font-bungee)'],
        notoSansKR: ['var(--font-notoSansKR)'],
      },
    },
  },
  plugins: [],
}
