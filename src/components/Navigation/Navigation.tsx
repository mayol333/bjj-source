import { Link, Logo, Wrapper } from './styles'
import Dashboard from '../../assets/dashboard.svg?react'
import Courses from '../../assets/courses.svg?react'
import AffiliateProgram from '../../assets/affiliateProgram.svg?react'
import Earnings from '../../assets/earnings.svg?react'
import Settings from '../../assets/settings.svg?react'
import { Icon } from '../../ui/Icon/Icon'
import { Text } from '../../ui/Typography/styles'

export const Navigation = () => {
	return (
		<Wrapper>
			<Logo src="https://s3-alpha-sig.figma.com/img/6974/64c0/23cf5a876813835eb3701926e486eb78?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=budlolt~aJYqX891J27FRHRuDyNLt850Oof~hVpd3TjniNY94EvByeLHh0hMaaRDEl~UhnICs2PKupfOP0HvEIHVCZOreIZXUSpeDaUBpf93679nJG~DQjqqVqtaWD52JO4LQ6t4TfuSmn5tv5IpRidsPfdse0yDQXwmZCaUqZjJJOmlBZ4fF5iFhMzzlv9t8sr1zEgV9P0c39crzW0G58SwU1GtEocKelu9Jj0yu9NAEIkcg7bMe-uoDCUdUvNS~ya2Ucil2DfHdAxQYXw7YV~dsaOUk0bCiZUd2jCsKvn7~32uujGvfvqheOj9pbBG6Yppf3s1X3vLb0Lzl-srCg__" />
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
		</Wrapper>
	)
}
