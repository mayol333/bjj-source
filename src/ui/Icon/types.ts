import { FC, SVGProps } from 'react'

import { icons } from './icons'
import { Theme } from '../../styles/styled-components'

export interface IconProps {
	src: (typeof icons)[number]
	size?: number
	color?: keyof Theme['colors']
	onClick?: () => void
}

export interface SvgModule {
	default: FC<SVGProps<SVGSVGElement>>
}
