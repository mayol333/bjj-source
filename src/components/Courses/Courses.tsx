import { useEffect, useState } from 'react'
import { CategoriesList, CoursesWrapper, Table, TableData, TableHead, TableRow } from './styles'
import { CourseType } from './types'
import axios from 'axios'
import { Loader } from '../../ui/Loader/Loader'
import { CategoryType } from '../Categories/types'
import { Text } from '../../ui/Typography/styles'
import { Button } from '../../ui/Button/Button'

export const Courses = () => {
	const [courses, setCourses] = useState<CourseType[]>([])
	const [loading, setLoading] = useState(true)
	const [categories, setCategories] = useState<CategoryType[]>([])
	const [selectedCategory, setSelectedCategory] = useState('All')
	const handleCategorySwitch = (name: string) => () => {
		setSelectedCategory(name)
	}

	useEffect(() => {
		const getCategories = async () => {
			try {
				const { data } = await axios.get('http://localhost:8000/categories')
				setCategories(data)
			} catch (error) {
				console.log(error)
			}
		}
		const getCourses = async () => {
			try {
				const { data } = await axios.get('http://localhost:8000/courses')
				setCourses(data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		getCourses()
		getCategories()
	}, [])
	return (
		<>
			<CategoriesList>
				<Button
					onClick={handleCategorySwitch('All')}
					size="small"
					mode={selectedCategory === 'All' ? 'red' : 'secondary'}
				>
					All
				</Button>
				{categories.map(({ id, name }) => (
					<Button
						onClick={handleCategorySwitch(name)}
						size="small"
						mode={selectedCategory === name ? 'red' : 'secondary'}
						key={id}
					>
						<Text $style="subtitleL">{name}</Text>
					</Button>
				))}
			</CategoriesList>
			<CoursesWrapper>
				{loading ? (
					<Loader size={100} />
				) : (
					<Table>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Instructor</TableHead>
							<TableHead>Watch time</TableHead>
							<TableHead>Category</TableHead>
						</TableRow>
						{courses
							.filter(({ category }) =>
								selectedCategory === 'All' ? true : category === selectedCategory
							)
							.map(({ name, instructor, watchTime, category, id }) => (
								<TableRow key={id}>
									<TableData>{name}</TableData>
									<TableData>{instructor}</TableData>
									<TableData>{watchTime}</TableData>
									<TableData>{category}</TableData>
								</TableRow>
							))}
					</Table>
				)}
			</CoursesWrapper>
		</>
	)
}
