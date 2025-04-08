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
			<button
				onClick={e => {
					if (e.target === e.currentTarget) {
						onClick()
					}
				}}
			>
				close
			</button>

			<iframe
				className={` ${isShowModal ? styles.iFrame : styles.iFrameHidden}`}
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42867.96905533433!2d12.88498338912344!3d47.81541011776818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47768f690275b547%3A0x41d25a40937b730!2s83404%20Ainring%2C%20Germania!5e0!3m2!1sen!2sen!4v1744120941305!5m2!1sen!2sen'
			></iframe>
		</div>
	)
}
