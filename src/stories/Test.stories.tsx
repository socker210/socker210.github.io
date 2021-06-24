import React from 'react'
import { Meta } from '@storybook/react'

const Component: React.FC = () => {
  return <h1>HAHA</h1>
}

export default {
  title: 'Test',
  component: Component,
} as Meta

export const Primary: React.VFC = () => <Component />
