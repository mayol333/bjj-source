import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '../ui/Tag/Tag'

const meta = {
	title: 'Ui/Tag',
	component: Tag,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { background: 'success', children: 'Active' },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		// mode: "primary",
		// label: "Button",
	},
}
