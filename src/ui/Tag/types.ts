import { Theme } from '../../styles/styled-components'
import { PropsWithChildren } from 'react'

export interface TagProps extends PropsWithChildren {
	background?: keyof Theme['colors']
	isBasic?: boolean
}
