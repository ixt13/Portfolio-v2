'use client'

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const Carousel = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={swiper => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			{children}
		</Swiper>
	)
}
