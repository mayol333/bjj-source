import { ReactNode } from 'react'

export interface ButtonProps {
	primary?: boolean
	backgroundColor?: string
	size?: ButtonSize
	onClick?: () => void
	mode?: ButtonMode
	disabled?: boolean
	children: ReactNode
}

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonMode = 'primary' | 'secondary' | 'red'
export interface StyledButtonProps {
	$size?: ButtonSize
	$mode?: ButtonMode
}
