import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '../ui/Select/Select'
import { fn } from '@storybook/test'

const meta = {
	title: 'Ui/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		placeholder: 'Select placeholder',
		label: 'Select label',
		onChange: fn(),
		value: 'Select value1',
		options: [
			{ label: 'Select label1', value: 'Select value1' },
			{ label: 'Select label2', value: 'Select value2' },
			{ label: 'Select label3', value: 'Select value3' },
		],
	},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		// mode: "primary",
		// label: "Button",
	},
}
