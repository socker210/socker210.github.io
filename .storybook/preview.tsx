import React from 'react'
import type { Preview } from '@storybook/react'
import Font from '../styles/Font'
import GlobalStyles from '../styles/GlobalStyles'
import '../styles/hljs-theme.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <Font>
        <GlobalStyles />
        <Story />
      </Font>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
