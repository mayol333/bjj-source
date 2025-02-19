import { IconProps, SvgModule } from './types'
import { forwardRef, useEffect, useState } from 'react'

import { useTheme } from 'styled-components'

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ src, size = 20, color = 'neutral_10', onClick }, ref) => {
	const [importSvg, setImportSvg] = useState<SvgModule>()
	const theme = useTheme()
	const iconColor = theme.colors[color]
	console.log({ src })
	useEffect(() => {
		const importIcon = async () => {
			try {
				const res = (await import(`../../../assets/${src}.svg?react`)) as SvgModule
				setImportSvg(res)
			} catch (err) {
				console.error(err)
			}
		}
		importIcon()
	}, [src])

	const Svg = importSvg?.default

	if (!Svg) {
		return null
	}

	return (
		<Svg
			ref={ref}
			onClick={onClick}
			width={size}
			height={size}
			style={{ color: iconColor }}
			className={onClick && 'icon-clickable'}
		/>
	)
})

Icon.displayName = 'Icon'
