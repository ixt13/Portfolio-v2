'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './NavButton.module.scss'
interface iNavButton {
	textContent: string
	href: string
}

export const NavButton: FC<iNavButton> = ({ textContent, href }) => {
	const path = usePathname()

	return (
		<Link
			prefetch={false}
			href={href}
			className={`${styles.navButton}   ${path === href && styles.active}`}
		>
			{textContent}
		</Link>
	)
}
