import { CSSProperties } from '@emotion/serialize'
import styled from '@emotion/styled'
import { forwardRef, HTMLAttributes } from 'react'
import { CSSProps } from '../interfaces/styles'

type VariantsName = 'h1' | 'h2' | 'h3' | 'h4'
const variants: Record<VariantsName, CSSProperties> = {
	h1: {
		fontSize: '2rem',
		fontWeight: 700,
		lineHeight: '2.25rem',
	},
	h2: {
		fontSize: '1.5rem',
		fontWeight: 600,
		lineHeight: '2rem',
	},
	h3: {
		fontSize: '1.25rem',
		fontWeight: 600,
		lineHeight: '1.5rem',
	},
	h4: {
		fontSize: '1rem',
		fontWeight: 600,
		lineHeight: '1.25rem',
	},
}

interface ElementProps {
	sx?: CSSProps
	variant?: VariantsName
}
const Element = styled('h2')<ElementProps>(({ sx = {}, variant = 'h1' }) => ({
	marginTop: 0,
	marginBottom: 0,
	...variants[variant],
	...sx,
}))
interface Props extends HTMLAttributes<HTMLHeadingElement> {
	sx?: CSSProps
	variant?: VariantsName
}
export const Title = forwardRef<HTMLHeadingElement, Props>((props, ref) => {
	return <Element ref={ref} {...props} />
})
