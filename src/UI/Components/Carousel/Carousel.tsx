'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { technologies } from '@/consts'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay } from 'swiper/modules'
import { TechItem } from '../TechItem/TechItem'
import './Carousel.css'

export const Carousel = () => {
	return (
		<Swiper
			modules={[Autoplay]}
			spaceBetween={10}
			slidesPerView={7}
			slidesPerGroup={3}
			loop={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			speed={5000}
		>
			<div>
				{technologies.map((el, index) => (
					<SwiperSlide key={index}>
						<TechItem name={el.name} image={el.image} />
					</SwiperSlide>
				))}
			</div>
		</Swiper>
	)
}
