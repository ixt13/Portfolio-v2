import { abotMeTextContent, technologies } from '@/consts'
import { Carousel } from '../Components/Carousel/Carousel'
import { TechItem } from '../Components/TechItem/TechItem'
import { SwiperSlideProvider } from '../Providers/SwiperSlideProvider/SwiperSlideProvider'
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
			<Carousel>
				{technologies.map((el, index) => (
					<SwiperSlideProvider key={index}>
						<TechItem name={el.name} image={el.image} />
					</SwiperSlideProvider>
				))}
			</Carousel>
			{/* <div className={styles.carousel}>
				<div className={styles.technologiesStackBox}>
					{technologies.map((el, index) => (
						<SwiperSlideProvider key={index}>
							<TechItem name={el.name} image={el.image} />
						</SwiperSlideProvider>
					))}
				</div>
			</div> */}
		</main>
	)
}
