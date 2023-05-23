import type { Meta, StoryObj } from '@storybook/react'
import TypeWriter from './TypeWriter'

type Story = StoryObj<typeof TypeWriter>

const meta: Meta<typeof TypeWriter> = {
  title: 'TypeWriter',
  component: TypeWriter,
}

export const Primary: Story = {
  render: () => (
    <TypeWriter>
      <span>
        <span>HAHA1</span>
        <br />
        <span>HAHA2</span>
      </span>
    </TypeWriter>
  ),
}

export const WithComponent: Story = {
  render: () => {
    const Comp: React.FC = () => {
      return <span className='text-red-400'>Component</span>
    }

    return (
      <TypeWriter>
        <Comp />
      </TypeWriter>
    )
  },
}

export default meta
