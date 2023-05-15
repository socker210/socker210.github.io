const extensions = ['js', 'ts', 'jsx', 'tsx', 'mdx']
const path = ['app', 'src']

const content = path.map((d) => `./${d}/**/*.{${extensions.join(',')}}`)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content,
  theme: {
    extend: {},
  },
  plugins: [],
}
