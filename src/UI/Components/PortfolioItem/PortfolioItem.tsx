'use client'

import { iportfolioPageProjects } from '@/consts'
import { BackIcon } from '@/UI/IconComponents/BackIcon/BackIcon'
import { GithubIcon } from '@/UI/IconComponents/GithubIcon/GithubIcon'
import { LiveIcon } from '@/UI/IconComponents/LiveIcon/LiveIcon'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import styles from './PortfolioItem.module.scss'

interface iPortfolioItem extends iportfolioPageProjects {
	key?: number
}

export const PortfolioItem: FC<iPortfolioItem> = ({
	key,
	image,
	descriprion,
	usedTechnologiesIcons,
	githubLink,
	liveLink,
}) => {
	const [showHoverMenu, setShowHoverMenu] = useState<boolean>(false)

	return (
		<div
			key={key}
			onClick={() => {
				setShowHoverMenu(true)
			}}
			onMouseLeave={() => {
				setShowHoverMenu(false)
			}}
			className={styles.item}
		>
			<div
				className={
					showHoverMenu ? styles.photoContainerHover : styles.photoContainer
				}
			>
				<Image src={image} alt='projectImage' priority={true} />
				<div
					className={
						showHoverMenu ? styles.linksContainerOnHover : styles.linksContainer
					}
				>
					<BackIcon
						onClick={() => {
							setShowHoverMenu(false)
						}}
						className={styles.backIcon}
					/>
					{githubLink && (
						<Link href={githubLink} target='_blank'>
							<GithubIcon />
						</Link>
					)}
					{liveLink && (
						<Link href={liveLink} target='_blank'>
							<LiveIcon />
						</Link>
					)}
				</div>
			</div>
			<div className={showHoverMenu ? styles.itemInfoonHover : styles.itemInfo}>
				<p className={styles.itemDescription}>{descriprion}</p>
				<div>
					{usedTechnologiesIcons.map((el, index) => (
						<div className={styles.itemUsedTechnologies} key={index}>
							{Object.entries(el).map(([techName, techIcon]) => (
								<Image
									className={styles.techIcon}
									key={techName}
									src={techIcon}
									alt={`${techName}Icon`}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
