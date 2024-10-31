import { abotMeTextContent, technologies } from '@/consts'
import { TechItem } from '../Components/TechItem/TechItem'
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
			<div className={styles.carousel}>
				<div className={styles.technologiesStackBox}>
					{technologies.map((el, index) => (
						<TechItem key={index} name={el.name} image={el.image} />
					))}
				</div>
			</div>
		</main>
	)
}
