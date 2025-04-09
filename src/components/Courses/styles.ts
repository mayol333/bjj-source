import styled from 'styled-components'

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.neutral_20};
`
export const TableHead = styled.th`
	text-align: left;
	padding: 20px;
`
export const TableData = styled.td`
	text-align: left;
	padding: 20px;
`
export const TableRow = styled.tr`
	padding: 10px;
`
