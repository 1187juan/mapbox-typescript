import { MouseEventHandler } from 'react'
import { Box, Button, Title } from '../../components'
import { Text } from '../../components/Text'

interface Props {
	title: string
	description: string
	onClick: MouseEventHandler<HTMLElement> | undefined
	onClickDirection: MouseEventHandler<HTMLElement> | undefined
	isActive: boolean
}

export const SearchItem = ({
	title,
	description,
	onClick,
	onClickDirection,
	isActive = false,
}: Props) => {
	return (
		<Box
			as='li'
			sx={{
				padding: '1rem',
				borderBottom: '1px solid var(--colors-outline)',
				overflow: 'hidden',
				backgroundColor: isActive ? 'var(--colors-primary)' : '',
				color: isActive ? 'var(--colors-onPrimary)' : '',
				cursor: 'default',
				'&:hover': {
					backgroundColor: isActive ? '' : 'var(--colors-hover)',
				},
			}}
			onClick={onClick}
		>
			<Title variant='h4'>{title}</Title>
			<Text
				sx={{
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
				}}
			>
				{description}
			</Text>
			<Button
				variant='link'
				onClick={onClickDirection}
				sx={{
					color: isActive ? 'var(--colors-onPrimary)' : 'var(--colors-primary)',
				}}
			>
				Direcciones
			</Button>
		</Box>
	)
}
