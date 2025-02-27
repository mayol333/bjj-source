import styled from 'styled-components'
import { Theme } from '../../styles/styled-components'

export const StyledTag = styled.div<{ $background: keyof Theme['colors'] }>`
	padding: 8px;
	border-radius: 25px;
	background-color: ${({ $background, theme }) => theme.colors[$background]};
`
