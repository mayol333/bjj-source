import { IconWrapper } from './styles'
import { IconProps } from './types'

export const Icon = ({ children, color = 'neutral_10', size = 16 }: IconProps) => {
	return (
		<IconWrapper $color={color} $size={size}>
			{children}
		</IconWrapper>
	)
}
