import { StyledButton } from './styles'
import { ButtonProps } from './types'

export const Button = ({ children, size = 'medium', onClick, mode = 'primary', disabled }: ButtonProps) => {
	return (
		<StyledButton $size={size} $mode={mode} disabled={disabled} onClick={onClick}>
			{children}
		</StyledButton>
	)
}
