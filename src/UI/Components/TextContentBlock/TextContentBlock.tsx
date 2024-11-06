import { iTextContent } from '@/consts'
import { FC } from 'react'
import styles from './TextContentBlock.module.scss'
interface iTextContentBlock {
	textContent?: iTextContent
	className?: string
	grid: string
}
export const TextContentBlock: FC<iTextContentBlock> = ({
	textContent,
	grid,
}) => {
	return (
		<section className={styles.section} style={{ gridArea: grid }}>
			<div className={styles.title}>
				<h4>{textContent?.title}</h4>
			</div>

			<ul>
				{textContent?.textContent.map((el, index) => (
					<div key={index}>
						<li>{el.paragraph}</li>
						{el.description.length > 0 ? <p>{el.description}</p> : ''}
					</div>
				))}
			</ul>
		</section>
	)
}
