'use client'

import tgImage from '@/assets/images/TelegramImage.jpg'
import Image from 'next/image'
import { useState } from 'react'
import styles from './PortfolioItem.module.scss'
export const PortfolioItem = () => {
	const [showHoverMenu, setShowHoverMenu] = useState<boolean>(false)

	const handleHover = () => {
		setShowHoverMenu(prev => !prev)
	}
	return (
		<div
			onMouseEnter={() => {
				handleHover()
			}}
			onMouseLeave={handleHover}
			className={styles.item}
		>
			<div
				className={
					showHoverMenu ? styles.photoContainerHover : styles.photoContainer
				}
			>
				<Image src={tgImage} alt='pageImage' />
			</div>
			<div
				className={
					showHoverMenu ? styles.hoverContainer : styles.hoverContainerHover
				}
			></div>
		</div>
	)
}
