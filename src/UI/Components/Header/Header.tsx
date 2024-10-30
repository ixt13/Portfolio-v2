'use client'

import { useAppDispatch } from '@/redux/hooks'
import { setThemeDark } from '@/redux/slicers/themeSlicer'
import Image from 'next/image'
import darkIcon from '../../../assets/images/Vector.png'
import { NavButton } from '../NavButton/NavButton'
import styles from './Header.module.scss'
export const Header = () => {
	const dispatch = useAppDispatch()
	dispatch(setThemeDark())

	return (
		<header className={styles.header}>
			<div className={styles.navGroup}>
				<nav className={styles.navigation}>
					<NavButton href={'/'} textContent={'About Me'} />
					<NavButton href={'/resume'} textContent={'Resume'} />
					<NavButton href={'/portfolio'} textContent={'Portfolio'} />
					<NavButton href={'/contacts'} textContent={'Contacts'} />
				</nav>
				<button>
					<Image
						src={darkIcon}
						alt='Landscape picture'
						style={{ height: '100%', width: '100%' }}
					/>
				</button>
			</div>

			<div className={styles.line}></div>
		</header>
	)
}
