import type { Meta, StoryObj } from '@storybook/react'
import Conveyor from './Conveyor'

type Story = StoryObj<typeof Conveyor>

const meta: Meta<typeof Conveyor> = {
  title: 'Component/ConveyorText',
  component: Conveyor,
}

export const Primary: Story = {
  render: () => (
    <Conveyor>
      <Conveyor.Text>HTML</Conveyor.Text>
      <Conveyor.Text>CSS</Conveyor.Text>
      <Conveyor.Text>Javascript</Conveyor.Text>
      <Conveyor.Text>React</Conveyor.Text>
      <Conveyor.Text>Next.js</Conveyor.Text>
    </Conveyor>
  ),
}

export default meta
