import styled from '@emotion/styled'
import { forwardRef, InputHTMLAttributes } from 'react'
import { CSSProps } from '../interfaces/styles'

interface ElementProps {
	sx?: CSSProps
}
const Element = styled('input')<ElementProps>(({ sx = {} }) => ({
	minWidth: 0,
	padding: '1rem',
	fontSize: '1rem',
	backgroundColor: 'var(--colors-outline)',
	border: 'none',
	outline: 'none',
	borderRadius: '.25rem',
	'&:focus, &:hover': {
		backgroundColor: 'var(--colors-hover)',
	},

	...sx,
}))

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	sx?: CSSProps
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
	return <Element ref={ref} {...props} />
})
