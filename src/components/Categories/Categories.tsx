import { Tag } from '../../ui/Tag/Tag'
import { Heading1, Heading3 } from '../../ui/Typography/styles'
import { Icon } from '../../ui/Icon/Icon'
import Plus from '../../assets/plus.svg?react'
import Bin from '../../assets/bin.svg?react'
import { Text } from '../../ui/Typography/styles'
import { ButtonsWrapper, CategoriesWrapper, DeleteButton, InputWrapper, TagWrapper, Wrapper } from './styles'
import { Button } from '../../ui/Button/Button'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { Input } from '../../ui/Input/Input'
import axios from 'axios'
import { CategoryType, TagType } from './types'

export const Categories = () => {
	const [isInputShown, setIsInputShown] = useState(false)
	const [isCategoriesInputShown, setIsCategoriesInputShown] = useState(false)
	const [isInputFilled, setIsInputFilled] = useState('')
	const [isCategoriesInputFilled, setIsCategoriesInputFilled] = useState('')
	const [tags, setTags] = useState<TagType[]>([])
	const [categories, setCategories] = useState<CategoryType[]>([])
	const handleInputShow = () => {
		setIsInputShown(true)
	}
	const handleCategoriesInputShow = () => {
		setIsCategoriesInputShown(true)
	}
	const handleInputFill: ChangeEventHandler<HTMLInputElement> = (event) => {
		setIsInputFilled(event.target.value)
	}
	const handleCategoriesInputFill: ChangeEventHandler<HTMLInputElement> = (event) => {
		setIsCategoriesInputFilled(event.target.value)
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
			setIsInputShown(false)
			setIsInputFilled('')
		} catch (error) {
			console.log(error)
		}
	}
	const showCategoriesInputValue = async () => {
		if (isCategoriesInputFilled.length > 20) {
			return
		}
		try {
			const { data } = await axios.post('http://localhost:8000/categories', {
				name: isCategoriesInputFilled,
			})
			setCategories([...categories, data])
			setIsCategoriesInputShown(false)
			setIsCategoriesInputFilled('')
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
		const getCategories = async () => {
			try {
				const { data } = await axios.get('http://localhost:8000/categories')
				setCategories(data)
			} catch (error) {
				console.log(error)
			}
		}
		getTags()
		getCategories()
	}, [])

	const deleteTag = (tag: number) => async () => {
		try {
			const { data } = await axios.delete<TagType>(`http://localhost:8000/tags/${tag}`)
			console.log(data)
			setTags(tags.filter(({ id }) => id !== data.id))
		} catch (error) {
			console.log(error)
		}
	}
	const deleteCategory = (category: number) => async () => {
		try {
			const { data } = await axios.delete<CategoryType>(`http://localhost:8000/categories/${category}`)
			console.log(data)
			setCategories(categories.filter(({ id }) => id !== data.id))
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Wrapper>
			<Heading1>Manage Tags & Categories</Heading1>
			<div>
				<Heading3>Tags</Heading3>
				<TagWrapper>
					<ButtonsWrapper>
						{tags.map(({ id, name }) => (
							<Tag key={id}>
								<Text $style="subtitleL">{name}</Text>
								<DeleteButton onClick={deleteTag(id)}>
									<Icon color="neutral_100">
										<Bin />
									</Icon>
								</DeleteButton>
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
						{categories.map(({ id, name }) => (
							<Tag key={id} isBasic>
								<Text $style="subtitleL">{name}</Text>
								<DeleteButton onClick={deleteCategory(id)}>
									<Icon color="neutral_100">
										<Bin />
									</Icon>
								</DeleteButton>
							</Tag>
						))}
						<Button onClick={handleCategoriesInputShow} disabled={isCategoriesInputShown} mode="secondary">
							<Icon color="neutral_100">
								<Plus />
							</Icon>
						</Button>
					</CategoriesWrapper>
					{isCategoriesInputShown && (
						<InputWrapper>
							<Input
								value={isCategoriesInputFilled}
								onChange={handleCategoriesInputFill}
								placeholder={'Tag name'}
							></Input>
							<Button onClick={showCategoriesInputValue} disabled={!isCategoriesInputFilled} mode="red">
								<Text $style="subtitleL">Add</Text>
							</Button>
						</InputWrapper>
					)}
				</TagWrapper>
			</div>
		</Wrapper>
	)
}
