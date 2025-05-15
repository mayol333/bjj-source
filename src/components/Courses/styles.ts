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
export const CoursesWrapper = styled.div`
	display: flex;
	justify-content: center;
`
export const CategoriesList = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 20px;
`
