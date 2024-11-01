'use client'
import { SwiperSlide } from 'swiper/react'

export const SwiperSlideProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return <SwiperSlide style={{ height: '40px' }}>{children}</SwiperSlide>
}
