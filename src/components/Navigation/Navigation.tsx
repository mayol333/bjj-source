import { Link, Wrapper } from './styles'
import Dashboard from '../../assets/dashboard.svg?react'
import Courses from '../../assets/courses.svg?react'
import AffiliateProgram from '../../assets/affiliateProgram.svg?react'
import Earnings from '../../assets/earnings.svg?react'
import Settings from '../../assets/settings.svg?react'
import { Icon } from '../../ui/Icon/Icon'
import { Text } from '../../ui/Typography/styles'
import Categories from '../../assets/categories.svg?react'

export const Navigation = () => {
	return (
		<Wrapper>
			<Link to="/dashboard">
				<Icon color="neutral_100">
					<Dashboard />
				</Icon>
				<Text $style="buttonL">Dashboard</Text>
			</Link>
			<Link to="/courses">
				<Icon color="neutral_100">
					<Courses />
				</Icon>
				<Text $style="buttonL">Courses</Text>
			</Link>
			<Link to="/affiliateProgram">
				<Icon color="neutral_100">
					<AffiliateProgram />
				</Icon>
				<Text $style="buttonL">Affiliate Program</Text>
			</Link>
			<Link to="/earnings">
				<Icon color="neutral_100">
					<Earnings />
				</Icon>
				<Text $style="buttonL">Earnings</Text>
			</Link>
			<Link to="/settings">
				<Icon color="neutral_100">
					<Settings />
				</Icon>
				<Text $style="buttonL">Settings</Text>
			</Link>
			<Link to="/categories">
				<Icon color="neutral_100">
					<Categories />
				</Icon>
				<Text $style="buttonL">Tags & Categories</Text>
			</Link>
		</Wrapper>
	)
}
