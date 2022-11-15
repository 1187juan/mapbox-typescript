import styled from '@emotion/styled'
import { forwardRef, HTMLAttributes } from 'react'
import { CSSProps } from '../interfaces/styles'

interface ElementProps {
	sx?: CSSProps
}
const Element = styled('p')<ElementProps>(({ sx = {} }) => ({
	marginTop: 0,
	marginBottom: 0,
	...sx,
}))

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	sx?: CSSProps
}
export const Text = forwardRef<HTMLParagraphElement, Props>((props, ref) => {
	return <Element ref={ref} {...props} />
})
