'use client'

import { useAppSelector } from '@/redux/hooks'
import { BackGround } from '@/UI/Components/BackGround/BackGround'
export const BodyProvider = ({
	children,
	className,
}: Readonly<{
	children: React.ReactNode
	className?: string
}>) => {
	const style = useAppSelector(state => state.theme)
	return (
		<html lang='en'>
			<body
				className={className}
				style={{
					...style,
					position: 'relative',
					width: '100vw',
					height: '100vh',
				}}
			>
				<BackGround />
				<div
					style={{
						position: 'relative',
						zIndex: 1,
						width: '100%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{children}
				</div>
			</body>
		</html>
	)
}
