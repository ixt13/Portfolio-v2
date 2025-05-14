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
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174147.22022211688!2d28.693367441011773!3d46.99998498768875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2zQ2hpyJlpbsSDdSwgTW9sZG92YQ!5e0!3m2!1sen!2sro!4v1747247932464!5m2!1sen!2sro'
			></iframe>
		</div>
	)
}
