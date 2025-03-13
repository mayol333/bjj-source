import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.nav`
	background-color: ${({ theme }) => theme.colors.neutral_10};
	height: 100%;
	padding: 32px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
export const Logo = styled.img`
	width: 186px;
	height: 60px;
`
export const Link = styled(NavLink)`
	background-color: ${({ theme }) => theme.colors.neutral_20};
	width: 100%;
	padding: 15px 20px;
	display: flex;
	gap: 10px;
	align-items: center;
	color: ${({ theme }) => theme.colors.neutral_100};
	text-decoration: none;
	&.active {
		color: ${({ theme }) => theme.colors.neutral_10} !important;
		background-color: ${({ theme }) => theme.colors.neutral_100};
		path {
			color: ${({ theme }) => theme.colors.neutral_10};
		}
	}
`

export const IconWrapper = styled.div`
	width: 18px;
	height: 18px;
	color: ${({ theme }) => theme.colors.neutral_10};
`
