import { Tag } from '../../ui/Tag/Tag'
import { Heading1, Heading3 } from '../../ui/Typography/styles'
import { Icon } from '../../ui/Icon/Icon'
import Plus from '../../assets/plus.svg?react'
import { Text } from '../../ui/Typography/styles'
import { ButtonsWrapper, CategoriesWrapper, InputWrapper, TagWrapper, Wrapper } from './styles'
import { Button } from '../../ui/Button/Button'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { Input } from '../../ui/Input/Input'
import axios from 'axios'

const categories = [
	{ name: 'Programming', id: 0 },
	{ name: 'Design', id: 1 },
	{ name: 'Data Analysis', id: 2 },
	{ name: 'Database', id: 3 },
	{ name: 'AI', id: 4 },
	{ name: 'Cloud Computing', id: 5 },
]

export const Categories = () => {
	const [isInputShown, setIsInputShown] = useState(false)
	const [isInputFilled, setIsInputFilled] = useState('')
	const [tags, setTags] = useState<{ name: string; id: number }[]>([])
	const handleInputShow = () => {
		setIsInputShown(true)
	}
	const handleInputFill: ChangeEventHandler<HTMLInputElement> = (event) => {
		setIsInputFilled(event.target.value)
	}
	const showInputValue = async () => {
		if (isInputFilled.length > 20) {
			return
		}
		try {
			const { data } = await axios.post('http://localhost:8000/tags', {
				name: isInputFilled,
			})
			setTags([...tags, data])
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		const getTags = async () => {
			try {
				const { data } = await axios.get('http://localhost:8000/tags')
				setTags(data)
			} catch (error) {
				console.log(error)
			}
		}
		getTags()
	}, [])
	console.log('data', tags)
	return (
		<Wrapper>
			<Heading1>Manage Tags & Categories</Heading1>
			<div>
				<Heading3>Tags</Heading3>
				<TagWrapper>
					<ButtonsWrapper>
						{tags.map((tag) => (
							<Tag key={tag.id}>
								<Text $style="subtitleL">{tag.name}</Text>
							</Tag>
						))}
						<Button onClick={handleInputShow} disabled={isInputShown} mode="secondary">
							<Icon color="neutral_100">
								<Plus />
							</Icon>
						</Button>
					</ButtonsWrapper>
					{isInputShown && (
						<InputWrapper>
							<Input value={isInputFilled} onChange={handleInputFill} placeholder={'Tag name'}></Input>
							<Button onClick={showInputValue} disabled={!isInputFilled} mode="red">
								<Text $style="subtitleL">Add</Text>
							</Button>
						</InputWrapper>
					)}
				</TagWrapper>
			</div>
			<div>
				<Heading3>Categories</Heading3>
				<TagWrapper>
					<CategoriesWrapper>
						{categories.map((category) => (
							<Tag key={category.id} isBasic>
								<Text $style="subtitleL">{category.name}</Text>
							</Tag>
						))}
					</CategoriesWrapper>
				</TagWrapper>
			</div>
		</Wrapper>
	)
}
