import { Table, TableData, TableHead, TableRow } from './styles'

const coursesData = [
	{ name: 'Alfred', instructor: 'Maria', watchTime: 'Germany', category: 'engineer', id: '1' },
	{ name: 'Centro', instructor: 'Frank', watchTime: 'Mexico', category: 'engineer', id: '2' },
	{ name: 'Ernst', instructor: 'Roland', watchTime: 'Austria', category: 'engineer', id: '3' },
]

export const Courses = () => {
	return (
		<div>
			<Table>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Instructor</TableHead>
					<TableHead>Watch time</TableHead>
					<TableHead>Category</TableHead>
				</TableRow>
				{coursesData.map(({ name, instructor, watchTime, category, id }) => (
					<TableRow key={id}>
						<TableData>{name}</TableData>
						<TableData>{instructor}</TableData>
						<TableData>{watchTime}</TableData>
						<TableData>{category}</TableData>
					</TableRow>
				))}
			</Table>
		</div>
	)
}
