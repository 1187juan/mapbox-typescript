import styled from '@emotion/styled'
import { forwardRef, HTMLAttributes } from 'react'
import { CSSProps } from '../interfaces/styles'

interface ElementProps {
	sx?: CSSProps
	size?: string
	speed?: string
	color?: string
	lineWeight?: string
}
const Element = styled('div')<ElementProps>(
	({
		sx = {},
		size = '100%',
		speed = '1.4s',
		color = 'var(--colors-primary)',
		lineWeight = '.25rem',
	}) => ({
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: lineWeight,
		width: size,
		borderRadius: `calc(${lineWeight} / 2)`,
		overflow: 'hidden',
		transform: 'translate3d(0, 0, 0)',

		'&::before': {
			content: "''",
			position: 'absolute',
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
			backgroundColor: color,
			opacity: 0.1,
		},
		'&::after': {
			content: "''",
			height: '100%',
			width: '100%',
			borderRadius: `calc(${lineWeight} / 2)`,
			animation: `raceBy ${speed} ease-in-out infinite`,
			transform: 'translateX(-100%)',
			backgroundColor: color,
		},
		'@keyframes raceBy': {
			'0%': { transform: 'translateX(-100%)' },
			'100%': { transform: 'translateX(100%)' },
		},

		...sx,
	})
)

interface Props extends HTMLAttributes<HTMLDivElement> {
	sx?: CSSProps
	size?: string
	speed?: string
	color?: string
	lineWeight?: string
}
export const LinearLoader = forwardRef<HTMLDivElement, Props>((props, ref) => {
	return <Element ref={ref} {...props} />
})
