import styled from '@emotion/styled'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { CSSProps } from '../interfaces/styles'

type VariantsName = 'solid'
const variants: Record<VariantsName, CSSProps> = {
	solid: {
		minWidth: '10rem',
		padding: '1rem',
		backgroundColor: 'var(--colors-primary)',
		color: 'var(--colors-onPrimary)',
		borderRadius: '.25rem',
		transition: 'scale 100ms ease',

		'&:hover': {
			filter: 'brightness(1.05)',
		},
		'&:active': {
			scale: '.9',
		},
	},
}

interface ElementProps {
	sx?: CSSProps
	variant?: VariantsName
}
const Element = styled('button')<ElementProps>(
	({ sx = {}, variant = 'solid' }) => ({
		fontSize: '1rem',
		fontWeight: 700,
		border: 'none',
		outline: 'none',
		...variants[variant],
		...sx,
	})
)

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	sx?: CSSProps
	variant?: VariantsName
}
export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
	return <Element ref={ref} {...props} />
})
