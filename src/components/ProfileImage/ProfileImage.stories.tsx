import type { Meta, StoryObj } from '@storybook/react'
import ProfileImage from './ProfileImage'

type Story = StoryObj<typeof ProfileImage>

const meta: Meta<typeof ProfileImage> = {
  title: 'Component/ProfileImage',
  component: ProfileImage,
}

export const Primary: Story = {
  render: () => (
    <div tw='w-[min(50vw, 300px)]'>
      <ProfileImage src='assets/images/profile-circle.png' />
    </div>
  ),
}

export default meta
