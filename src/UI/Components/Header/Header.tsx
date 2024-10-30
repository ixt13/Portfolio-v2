'use client'

import { useAppSelector } from '@/redux/hooks'
import { setThemeDark, setThemeLight } from '@/redux/slicers/themeSlicer'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import darkIcon from '../../../assets/images/Vector.png'
import lightIcon from '../../../assets/images/vector2.png'
import { NavButton } from '../NavButton/NavButton'
import styles from './Header.module.scss'
export const Header = () => {
	const dispatch = useDispatch()
	const { currentTheme } = useAppSelector(state => state.theme)
	return (
		<header className={styles.header}>
			<div className={styles.navGroup}>
				<nav className={styles.navigation}>
					<NavButton href={'/'} textContent={'About Me'} />
					<NavButton href={'/resume'} textContent={'Resume'} />
					<NavButton href={'/portfolio'} textContent={'Portfolio'} />
					<NavButton href={'/contacts'} textContent={'Contacts'} />
				</nav>
				<button
					onClick={() => {
						if (currentTheme === 'dark') {
							dispatch(setThemeLight())
						} else if (currentTheme === 'light') {
							dispatch(setThemeDark())
						}
					}}
				>
					<Image
						src={currentTheme === 'dark' ? darkIcon : lightIcon}
						alt='Landscape picture'
						style={{ height: '100%', width: '100%' }}
					/>
				</button>
			</div>

			<div className={styles.line}></div>
		</header>
	)
}
