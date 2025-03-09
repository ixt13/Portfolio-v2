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
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157595.06366397496!2d28.54634693873052!3d46.99968001871829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2zQ2hpyJlpbsSDdSwgTW9sZG92YQ!5e1!3m2!1sen!2s!4v1741525122110!5m2!1sen!2s'
				loading='eager'
			></iframe>
		</div>
	)
}
