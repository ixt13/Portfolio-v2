import { iTechnologies } from '@/consts'
import { getWidthFromName } from '@/functions/getWidthFromName'
import Image from 'next/image'
import { FC } from 'react'

interface iTechItem extends iTechnologies {
	key: number
}

export const TechItem: FC<iTechItem> = ({ name, image, key }) => {
	return (
		<div
			style={{
				display: 'flex',
			}}
			key={key}
		>
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
