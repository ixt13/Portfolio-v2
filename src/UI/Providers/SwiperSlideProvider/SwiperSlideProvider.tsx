'use client'
import { SwiperSlide } from 'swiper/react'

export const SwiperSlideProvider = ({
	children,
	style,
}: Readonly<{
	children: React.ReactNode
	style: object
}>) => {
	return <SwiperSlide style={style}>{children}</SwiperSlide>
}
