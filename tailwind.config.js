const extensions = ['js', 'ts', 'jsx', 'tsx', 'mdx']
const path = ['pages', 'src']

const content = path.map((d) => `./${d}/**/*.{${extensions.join(',')}}`)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content,
  theme: {
    extend: {
      spacing: {
        'm-header': '3.5rem',
        'pc-header': '5rem',
        'm-spacing': '1rem',
        'pc-spacing': '2rem',
      },
      colors: {
        synthwave: {
          text: '#e1f9fd',
          orange: '#F08506',
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
