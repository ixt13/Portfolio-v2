'use client'

import Link from 'next/link'

import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './NavButton.module.scss'
interface iNavButton {
	textContent: string
	href: string
}

export const NavButton: FC<iNavButton> = ({ textContent, href }) => {
	const path = usePathname()

	const router = useRouter()
	return (
		<Link
			onClick={() => {
				router.push(href)
			}}
			prefetch={false}
			href={href}
			className={`${styles.navButton}   ${path === href && styles.active}`}
		>
			{textContent}
		</Link>
	)
}
