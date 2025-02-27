import { StyledTag } from './styles'
import { TagProps } from './types'

export const Tag = ({ children, background = 'success' }: TagProps) => {
	return <StyledTag $background={background}>{children}</StyledTag>
}
