'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { iTechnologies, technologies } from '@/consts'
import { shuffleArray } from '@/functions/shuffleArray'
import { FC, useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay } from 'swiper/modules'
import { TechItem } from '../TechItem/TechItem'

import styles from './Carousel.module.scss'
interface iCarousel {
	reverseDirection: boolean
}
export const Carousel: FC<iCarousel> = ({ reverseDirection }) => {
	const [shuffledTechnologies, setShuffledTechnologies] = useState<
		iTechnologies[]
	>([])

	useEffect(() => {
		setShuffledTechnologies(shuffleArray(technologies))
	}, [])

	return (
		<Swiper
			className={styles.swiper}
			modules={[Autoplay]}
			spaceBetween={10}
			slidesPerView={'auto'}
			slidesPerGroup={1}
			loop={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
				reverseDirection: reverseDirection,
			}}
			speed={3500}
			simulateTouch={false}
			allowTouchMove={false}
			preventInteractionOnTransition={true}
		>
			{shuffledTechnologies.map((el, index) => (
				<SwiperSlide className={styles.slide} key={index}>
					<TechItem name={el.name} image={el.image} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
