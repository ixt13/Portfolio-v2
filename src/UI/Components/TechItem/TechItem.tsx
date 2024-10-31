import { iTechnologies } from '@/consts'
import { getWidthFromName } from '@/functions/getWidthFromName'
import Image from 'next/image'
import { FC } from 'react'
import styles from './TechItem.module.scss'
interface iTechItem extends iTechnologies {
	key: number
}

export const TechItem: FC<iTechItem> = ({ name, image, key }) => {
	return (
		<div className={styles.item} key={key}>
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
