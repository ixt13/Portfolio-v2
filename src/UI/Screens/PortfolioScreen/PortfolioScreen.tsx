import tgImage from '@/assets/images/TelegramImage.jpg'
import Image from 'next/image'
import styles from './PortfolioScreen.module.scss'
export const PortfolioScreen = () => {
	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.item}>
					<div className={styles.photoContainer}>
						<Image src={tgImage} alt='pageImage' />
					</div>
					<div className={styles.hoverContainer}></div>
				</div>
				<div className={styles.item}>
					<div className={styles.photoContainer}>
						{/* <Image src={tgImage} alt='pageImage' /> */}
					</div>
					<div className={styles.hoverContainer}></div>
				</div>
				<div className={styles.item}>
					<div className={styles.photoContainer}>
						{/* <Image src={tgImage} alt='pageImage' /> */}
					</div>
					<div className={styles.hoverContainer}></div>
				</div>
				<div className={styles.item}>
					<div className={styles.photoContainer}>
						{/* <Image src={tgImage} alt='pageImage' /> */}
					</div>
					<div className={styles.hoverContainer}></div>
				</div>
			</div>
		</main>
	)
}
