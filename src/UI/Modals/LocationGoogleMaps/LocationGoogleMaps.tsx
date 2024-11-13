'use client'

import { FC } from 'react'
import styles from './LocationGoogleMaps.module.scss'

interface iLocationGoogleMaps {
	onClick: () => void
	isShowModal: boolean
}

export const LocationGoogleMaps: FC<iLocationGoogleMaps> = ({
	onClick,
	isShowModal,
}) => {
	return (
		<div
			onClick={e => {
				if (e.target === e.currentTarget) {
					onClick()
				}
			}}
			className={`${styles.wrapper}  ${
				isShowModal ? styles.modalShow : styles.modalHidden
			}`}
		>
			<iframe
				className={` ${isShowModal ? styles.iFrame : styles.iFrameHidden}`}
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121214.06285525324!2d12.945962320167686!3d47.83033861156185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4776850cdf65b87b%3A0x41d25a40937b790!2s83395%20Freilassing%2C%20Germany!5e0!3m2!1sen!2s!4v1731330772850!5m2!1sen!2s'
				loading='eager'
			></iframe>
		</div>
	)
}
