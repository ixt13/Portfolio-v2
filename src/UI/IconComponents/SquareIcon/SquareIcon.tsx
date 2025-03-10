import { FC } from 'react'

interface iSquareIcon {
	className: string
	onClick?: () => void
}

export const SquareIcon: FC<iSquareIcon> = ({ className, onClick }) => {
	return (
		<svg
			onClick={onClick}
			viewBox='0 0 24 24'
			fill='none'
			className={className}
		>
			<path
				d='M10.5 9L13.5 12L10.5 15'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z'
				stroke='currentColor'
			/>
		</svg>
	)
}
