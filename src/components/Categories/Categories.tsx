import { Tag } from '../../ui/Tag/Tag'
import { Heading1, Heading3 } from '../../ui/Typography/styles'
import Trending from '../../assets/trending.svg?react'
import { Icon } from '../../ui/Icon/Icon'
import Medal from '../../assets/medal.svg?react'
import Star from '../../assets/star.svg?react'
import { Text } from '../../ui/Typography/styles'
import { TagWrapper, Wrapper } from './styles'

const categories = [
	{ name: 'Programming', id: 0 },
	{ name: 'Design', id: 1 },
	{ name: 'Data Analysis', id: 2 },
	{ name: 'Database', id: 3 },
	{ name: 'AI', id: 4 },
	{ name: 'Cloud Computing', id: 5 },
]

export const Categories = () => {
	return (
		<Wrapper>
			<Heading1>Manage Tags & Categories</Heading1>
			<div>
				<Heading3>Tags</Heading3>
				<TagWrapper>
					<Tag background="orange">
						<Icon color="black">
							<Trending />
						</Icon>
						<Text $color="black" $style="subtitleL">
							Trending
						</Text>
					</Tag>
					<Tag background="success">
						<Icon color="black">
							<Star />
						</Icon>
						<Text $color="black" $style="subtitleL">
							Newly Added
						</Text>
					</Tag>
					<Tag background="error">
						<Icon color="neutral_100">
							<Medal />
						</Icon>
						<Text $style="subtitleL">Staff Pick</Text>
					</Tag>
				</TagWrapper>
			</div>
			<div>
				<Heading3>Categories</Heading3>
				<TagWrapper>
					{/* <Tag isBasic>
						<Text $style="subtitleL">Programming</Text>
					</Tag>
					<Tag isBasic>
						<Text $style="subtitleL">Design</Text>
					</Tag>
					<Tag isBasic>
						<Text $style="subtitleL">Data Analysis</Text>
					</Tag>
					<Tag isBasic>
						<Text $style="subtitleL">Database</Text>
					</Tag>
					<Tag isBasic>
						<Text $style="subtitleL">AI</Text>
					</Tag>
					<Tag isBasic>
						<Text $style="subtitleL">Cloud Computing</Text>
					</Tag> */}
					{categories.map((category) => (
						<Tag key={category.id} isBasic>
							<Text $style="subtitleL">{category.name}</Text>
						</Tag>
					))}
				</TagWrapper>
			</div>
		</Wrapper>
	)
}
