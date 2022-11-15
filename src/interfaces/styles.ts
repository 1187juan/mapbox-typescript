import { CSSProperties } from 'react'

export type CSSProps = CSSProperties | { [key: string]: CSSProps } | {}
