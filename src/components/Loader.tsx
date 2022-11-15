import styled from '@emotion/styled'
import { SVGAttributes } from 'react'
import { CSSProps } from '../interfaces/styles'

interface ElementProps {
	sx?: CSSProps
	size?: string
	color?: string
	speed?: string
}
const Element = styled('svg')<ElementProps>(
	({
		sx = {},
		size = '2.5rem',
		color = 'var(--colors-primary)',
		speed = '2s',
	}) => ({
		'--uib-size': size,
		'--uib-speed': speed,
		'--uib-color': color,

		height: 'var(--uib-size)',
		width: 'var(--uib-size)',
		verticalAlign: 'middle',
		transformOrigin: 'center',
		animation: 'rotate var(--uib-speed) linear infinite',

		'& > circle': {
			fill: 'none',
			stroke: 'var(--uib-color)',
			strokeDasharray: '1, 200',
			strokeDashoffset: 0,
			strokeLinecap: 'round',
			animation: 'stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite',
		},

		'@keyframes rotate': {
			'100%': {
				transform: 'rotate(360deg)',
			},
		},

		'@keyframes stretch': {
			'0%': {
				strokeDasharray: '1, 200',
				strokeDashoffset: 0,
			},
			'50%': {
				strokeDasharray: '90, 200',
				strokeDashoffset: '-35px',
			},
			'100%': {
				strokeDashoffset: '-124px',
			},
		},

		...sx,
	})
)

interface Props extends SVGAttributes<SVGElement> {
	sx?: CSSProps
	size?: string
	strokeWidth?: number
	color?: string
	speed?: string
}

export const Loader = ({ strokeWidth = 4, ...props }: Props) => {
	return (
		<Element
			as='svg'
			viewBox='25 25 50 50'
			strokeWidth={strokeWidth}
			{...props}
		>
			<circle cx='50' cy='50' r='20' style={{ color: 'red' }} />
		</Element>
	)
}
