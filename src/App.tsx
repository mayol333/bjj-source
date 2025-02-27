import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import { MainLayout } from './styles'
import { Dashboard } from './components/Dashboard/Dashboard'

export const App = () => {
	return (
		<MainLayout>
			<BrowserRouter>
				<Navigation></Navigation>
				<Routes>
					<Route path="dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</MainLayout>
	)
}
