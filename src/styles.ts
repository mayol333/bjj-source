import styled from 'styled-components'

export const MainLayout = styled.div`
	display: grid;
	grid-template-columns: 288px auto;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.black};
`

export const Outlet = styled.section`
	padding: 32px;
`
