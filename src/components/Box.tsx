import styled from '@emotion/styled'
import { ElementType, forwardRef, HTMLAttributes } from 'react'
import { CSSProps } from '../interfaces/styles'

interface ElementProps {
	sx?: CSSProps
}

const Element = styled('div')<ElementProps>(({ sx = {} }) => ({ ...sx }))
interface Props extends HTMLAttributes<HTMLElement> {
	sx?: CSSProps
	as?: ElementType<any>
}

export const Box = forwardRef<HTMLDivElement, Props>((props, ref) => {
	return <Element ref={ref} {...props} />
})
