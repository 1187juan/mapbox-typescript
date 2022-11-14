import styled from '@emotion/styled'
import { CSSProperties, ElementType, forwardRef, HTMLAttributes } from 'react'

interface ElementProps {
	sx?: CSSProperties | { [key: string]: CSSProperties } | {}
}

const Element = styled('div')<ElementProps>(({ sx = {} }) => ({ ...sx }))

interface Props extends HTMLAttributes<HTMLElement> {
	sx?: CSSProperties | { [key: string]: CSSProperties }
	as?: ElementType<any>
}

export const Box = forwardRef<HTMLDivElement, Props>((props, ref) => {
	return <Element ref={ref} {...props} />
})
