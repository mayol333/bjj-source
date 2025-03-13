import { Link, Logo, Wrapper } from './styles'
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
			<Logo src="https://s3-alpha-sig.figma.com/img/6974/64c0/23cf5a876813835eb3701926e486eb78?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rgkSvLYLK9wqvJMnGlFSSxVEgNns95ZXrfZGrZmugsVsa-CDEpuqkhUUi3lKsJY7k-wJPKXxCSOFe5VR5OzI1x9Z0d-MyA80wtzYuHxzUZY367pJoQ5VFP0IwaF1EUxJa6CKg0E1VcwOkmXUZkYigd3E4EoonclUXhYcxYQcaz9a9Hm9~XFy-Hg6Bfdv30oL7H-hbBm-oPZ3Yp5CWu1INbismlKX-HaNxu0btivtJmmZeoGHxDrk8K7TXJZAYciYjHSsKU7xtApVlhg162VBs3Kp2z9Kp3O14y8kYn1hA~U16Hq6AbUNcYnE25hecWJid~P0gWST2QUJpWi6jmt8Mw__" />
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
