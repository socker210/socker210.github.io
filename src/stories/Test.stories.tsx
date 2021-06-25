import React from 'react'
import { Meta, Story } from '@storybook/react'

type Props = {
  color: string
}

const Component: React.FC<Props> = ({ color }) => {
  return <h1 style={{ color }}>HAHA</h1>
}

export default {
  title: 'Test',
  component: Component,
} as Meta

const Template: Story<Props> = ({ color }) => <Component color={color} />

export const Primary = Template.bind({})

Primary.args = {
  color: '#FF0000',
}

export const Secondary = Template.bind({})

Secondary.args = {
  color: '#FF00FF',
}
