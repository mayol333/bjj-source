import styled, { css } from 'styled-components'
import { Theme } from '../../styles/styled-components'

export const StyledTag = styled.div<{ $background: keyof Theme['colors']; $isBasic?: boolean }>`
	padding: 8px;
	border-radius: 25px;
	background-color: ${({ $background, theme }) => theme.colors[$background]};
	display: flex;
	gap: 4px;
	width: fit-content;
	${({ $isBasic }) =>
		$isBasic &&
		css`
			border-radius: 0;
			background-color: ${({ theme }) => theme.colors.neutral_10};
		`}
`
