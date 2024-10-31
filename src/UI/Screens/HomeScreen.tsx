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
					style={{ width: '340px', height: '500px', border: '2px solid black' }}
				></div>
			</div>
			<div
				style={{
					width: '1100px',
					height: '80px',
					border: '2px solid black',
					display: 'flex',
				}}
			>
				{technologies.map((el, index) => (
					<TechItem key={index} name={el.name} image={el.image} />
				))}
			</div>
		</main>
	)
}
