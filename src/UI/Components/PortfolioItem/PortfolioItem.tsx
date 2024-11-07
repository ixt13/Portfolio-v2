'use client'

import Image from 'next/image'

import { iportfolioPageProjects } from '@/consts'
import { FC, useState } from 'react'
import styles from './PortfolioItem.module.scss'

interface iPortfolioItem extends iportfolioPageProjects {
	key?: number
	className?: string
}

export const PortfolioItem: FC<iPortfolioItem> = ({
	key,
	image,
	descriprion,
	usedTechnologiesIcons,
}) => {
	const [showHoverMenu, setShowHoverMenu] = useState<boolean>(false)

	const handleHover = () => {
		setShowHoverMenu(prev => !prev)
	}
	return (
		<div
			key={key}
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
				<Image src={image} alt='projectImage' />
			</div>
			<div className={showHoverMenu ? styles.itemInfoonHover : styles.itemInfo}>
				<p className={styles.itemDescription}>{descriprion}</p>
				<div>
					{usedTechnologiesIcons.map((el, index) => (
						<div className={styles.itemUsedTechnologies} key={index}>
							{Object.entries(el).map(([techName, techIcon]) => (
								<Image
									key={techName}
									src={techIcon}
									alt={`${techName}Icon`}
									height={34}
									width={techName === 'css' || techName === 'mongodb' ? 24 : 34}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
