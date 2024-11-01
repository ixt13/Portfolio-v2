'use client'

import { iTechnologies } from '@/consts'
import { getWidthFromName } from '@/functions/getWidthFromName'
import Image from 'next/image'
import { FC } from 'react'
import styles from './TechItem.module.scss'

export const TechItem: FC<iTechnologies> = ({ name, image }) => {
	return (
		<div className={styles.item}>
			<p>{name}</p>
			<Image
				src={image}
				height={name === 'express' ? 28 : 40}
				width={getWidthFromName(name)}
				alt={name}
			/>
		</div>
	)
}
