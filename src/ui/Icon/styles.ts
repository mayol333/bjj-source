import styled from 'styled-components'
import { Theme } from '../../styles/styled-components'

export const IconWrapper = styled.div<{ $color: keyof Theme['colors']; $size: number }>`
	width: ${({ $size }) => $size}px;
	height: ${({ $size }) => $size}px;
	color: ${({ $color, theme }) => theme.colors[$color]};
`
