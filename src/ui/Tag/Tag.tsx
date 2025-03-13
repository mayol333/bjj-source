import { StyledTag } from './styles'
import { TagProps } from './types'

export const Tag = ({ isBasic, children, background = 'success' }: TagProps) => {
	return (
		<StyledTag $isBasic={isBasic} $background={background}>
			{children}
		</StyledTag>
	)
}
