import importedImage from '@/assets/images/TelegramImage.jpg'
import { abotMeTextContent } from '@/consts'
import Image from 'next/image'
import { Carousel } from '../../Components/Carousel/Carousel'
import styles from './HomeScreen.module.scss'
export const HomeScreen = () => {
	return (
		<main className={styles.homeWrapper}>
			<div className={styles.userContent}>
				<div className={styles.aboutMeTextBlock}>
					<h3>About Me</h3>
					<p className={styles.aboutMeText}>{abotMeTextContent}</p>
				</div>
				<Image src={importedImage} className={styles.image} alt='image'></Image>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					width: '100%',
				}}
			>
				<Carousel reverseDirection={true} />
				<Carousel reverseDirection={false} />
			</div>
		</main>
	)
}
