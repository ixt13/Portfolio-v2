import { FC } from 'react'
import styles from './SuccesAnimatedIcon.module.scss'

interface iSuccesAnimatedIcon {
	className: string
}

export const SuccesAnimatedIcon: FC<iSuccesAnimatedIcon> = ({ className }) => {
	return (
		<div className={className}>
			<div className={styles.icon}>
				<p className={styles.iconTip}>OK</p>
			</div>
		</div>
	)
}
