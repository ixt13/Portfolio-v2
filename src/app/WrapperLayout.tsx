'use client'

import { useAppSelector } from '@/redux/hooks'

export default function WrapperLayout({
	children,
	className,
}: Readonly<{
	children: React.ReactNode
	className?: string
}>) {
	const styles = useAppSelector(state => state.theme)

	return (
		<div style={styles} className={className}>
			{children}
		</div>
	)
}
