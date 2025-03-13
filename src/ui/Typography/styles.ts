import styled, { css } from 'styled-components'
import { Theme } from '../../styles/styled-components'

type TextStyle =
	| 'displayTitle'
	| 'displayText'
	| 'bodyL'
	| 'semiBold'
	| 'bodyM'
	| 'bodyS'
	| 'bodyXS'
	| 'subtitleL'
	| 'subtitleS'
	| 'buttonL'
	| 'buttonM'
	| 'buttonS'
	| 'menu'

export const Text = styled.p<{ $style: TextStyle; $color?: keyof Theme['colors'] }>`
	${({ $color, theme }) =>
		$color &&
		css`
			color: ${theme.colors[$color]};
		`};
	${({ $style }) => {
		switch ($style) {
			case 'displayTitle':
				return css`
					font-weight: 700;
					font-size: 56px;
				`
			case 'displayText':
				return css`
					font-weight: 400;
					font-size: 20px;
				`
			case 'bodyL':
				return css`
					font-weight: 400;
					font-size: 18px;
				`
			case 'semiBold':
				return css`
					font-weight: 400;
					font-size: 18px;
				`
			case 'bodyM':
				return css`
					font-weight: 400;
					font-size: 16px;
				`
			case 'bodyS':
				return css`
					font-weight: 400;
					font-size: 14px;
				`
			case 'bodyXS':
				return css`
					font-weight: 400;
					font-size: 12px;
				`
			case 'subtitleL':
				return css`
					font-weight: 500;
					font-size: 16px;
				`
			case 'subtitleS':
				return css`
					font-weight: 500;
					font-size: 14px;
				`
			case 'buttonL':
				return css`
					font-weight: 500;
					font-size: 18px;
				`
			case 'buttonM':
				return css`
					font-weight: 500;
					font-size: 16px;
				`
			case 'buttonS':
				return css`
					font-weight: 500;
					font-size: 14px;
				`
			case 'menu':
				return css`
					font-weight: 500;
					font-size: 16px;
				`
		}
	}}
`

export const Heading1 = styled.h1`
	font-weight: 700;
	font-size: 40px;
	color: ${({ theme }) => theme.colors.neutral_100};
`
export const Heading2 = styled.h2`
	font-weight: 700;
	font-size: 32px;
	color: ${({ theme }) => theme.colors.neutral_100};
`
export const Heading3 = styled.h3`
	font-weight: 700;
	font-size: 28px;
	color: ${({ theme }) => theme.colors.neutral_100};
`
export const Heading4 = styled.h4`
	font-weight: 700;
	font-size: 24px;
	color: ${({ theme }) => theme.colors.neutral_100};
`
export const Heading5 = styled.h5`
	font-weight: 700;
	font-size: 20px;
	color: ${({ theme }) => theme.colors.neutral_100};
`
