import { abotMeTextContent } from '@/consts'
import { Carousel } from '../Components/Carousel/Carousel'
import styles from './HomeScreen.module.scss'
export const HomeScreen = () => {
	return (
		<main className={styles.homeWrapper}>
			<div className={styles.userContent}>
				<div className={styles.aboutMeTextBlock}>
					<h3>About Me</h3>
					<p className={styles.aboutMeText}>{abotMeTextContent}</p>
				</div>
				<div
					style={{ width: '280px', height: '400px', border: '2px solid black' }}
				></div>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					gap: '18px',
				}}
			>
				<h3>Stack</h3>
				<Carousel />
			</div>
		</main>
	)
}
