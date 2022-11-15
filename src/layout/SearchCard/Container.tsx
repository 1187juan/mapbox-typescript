import { Box } from '../../components'

interface Props {
	children: JSX.Element | JSX.Element[]
}

export const Container = ({ children }: Props) => {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: '50%',
				left: 0,
				width: '100%',
				height: '50%',
				overflow: 'auto',
				backgroundColor: 'var(--colors-surface)',

				'@media screen and (min-width: 64rem)': {
					top: '1.5rem',
					left: '1.5rem',
					width: '24rem',
					height: 'calc(100% - 3rem)',
					boxShadow: 'var(--boxShadow01)',
					borderRadius: '.25rem',
				},
			}}
		>
			{children}
		</Box>
	)
}
