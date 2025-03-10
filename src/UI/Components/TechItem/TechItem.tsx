import { iTechnologies } from '@/consts'
import Image from 'next/image'
import { FC } from 'react'
import styles from './TechItem.module.scss'

export const TechItem: FC<iTechnologies> = ({ name, image }) => {
	return (
		<div className={styles.item}>
			<p>{name}</p>
			<Image
				src={image}
				className={styles.image}
				style={{ width: 'auto' }}
				alt={name}
			/>
		</div>
	)
}
