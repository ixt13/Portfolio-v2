import { NavButton } from '../NavButton/NavButton'
import styles from './Header.module.scss'
export const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.navigation}>
				<NavButton href={'/'} textContent={'About Me'} />
				<NavButton href={'/resume'} textContent={'Resume'} />
				<NavButton href={'/portfolio'} textContent={'Portfolio'} />
				<NavButton href={'/contacts'} textContent={'Contacts'} />
			</nav>
			<div className={styles.line}></div>
		</header>
	)
}
