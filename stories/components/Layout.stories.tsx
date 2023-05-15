import React from 'react'
import { Meta, Story } from '@storybook/react'
import Layout from 'components/Layout'
import Moon from 'components/Layout/Moon'

export default {
  title: 'Component/Layout',
  component: Layout,
} as Meta

export const Primary: Story = () => {
  return <Layout />
}

export const PrimaryMoon: Story = () => {
  return <Moon />
}
