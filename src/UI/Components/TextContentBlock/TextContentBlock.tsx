import { iTextContent } from '@/consts'
import { SquareIcon } from '@/UI/IconComponents/SquareIcon/SquareIcon'
import { FC } from 'react'
import styles from './TextContentBlock.module.scss'
interface iTextContentBlock {
	textContent?: iTextContent
	className?: string
}
export const TextContentBlock: FC<iTextContentBlock> = ({
	textContent,
	className,
}) => {
	return (
		<section className={`${styles.section} ${className}`}>
			<div className={styles.title}>
				<h4>{textContent?.title}</h4>
			</div>

			<ul>
				{textContent?.textContent.map((el, index) => (
					<div key={index}>
						<div className={styles.container}>
							<SquareIcon className={styles.squareIcon} />
							<li>{el.paragraph}</li>
						</div>
						{el.description.length > 0 ? <p>{el.description}</p> : ''}
					</div>
				))}
			</ul>
		</section>
	)
}
