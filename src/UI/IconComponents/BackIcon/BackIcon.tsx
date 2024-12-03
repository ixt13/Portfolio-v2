import { FC } from 'react'

interface iBackIcon {
	className?: string
	onClick: () => void
}

export const BackIcon: FC<iBackIcon> = ({ className, onClick }) => {
	return (
		<svg
			className={className}
			onClick={e => {
				e.stopPropagation()
				onClick()
			}}
			width='800px'
			height='800px'
			viewBox='0 0 24 24'
			role='img'
			xmlns='http://www.w3.org/2000/svg'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			fill='none'
			color='currentColor'
		>
			<title id='backAltIconTitle'> </title> <path d='M4 12l15-9v18z' />
		</svg>
	)
}
