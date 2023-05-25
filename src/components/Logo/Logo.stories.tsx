import type { Meta, StoryObj } from '@storybook/react'
import Logo from './Logo'

type Story = StoryObj<typeof Logo>

const meta: Meta<typeof Logo> = {
  title: 'Component/Logo',
  component: Logo,
}

export const Primary: Story = {
  render: () => <Logo />,
}

export default meta
