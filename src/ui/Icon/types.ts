import { Theme } from '../../styles/styled-components'
import { PropsWithChildren } from 'react'

export interface IconProps extends PropsWithChildren {
	size?: number
	color?: keyof Theme['colors']
}
