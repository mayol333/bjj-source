import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import { MainLayout, Outlet } from './styles'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Categories } from './components/Categories/Categories'
import { Courses } from './components/Courses/Courses'

export const App = () => {
	return (
		<MainLayout>
			<BrowserRouter>
				<Navigation></Navigation>
				<Outlet>
					<Routes>
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="categories" element={<Categories />} />
						<Route path="courses" element={<Courses />} />
					</Routes>
				</Outlet>
			</BrowserRouter>
		</MainLayout>
	)
}
