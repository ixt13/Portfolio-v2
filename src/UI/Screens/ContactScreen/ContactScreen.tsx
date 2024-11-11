'use client'

import { SquareIcon } from '@/UI/IconComponents/SquareIcon/SquareIcon'
import styles from './ContactScreen.module.scss'

import facebookIcon from '@/assets/images/facebookIcon.png'
import linkedInIcon from '@/assets/images/linkedInIcon.png'
import telegramIcon from '@/assets/images/telegramIcon.png'
import { LocationGoogleMaps } from '@/UI/Modals/LocationGoogleMaps/LocationGoogleMaps'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
export const ContactScreen = () => {
	const [isShowModalMap, setIsShowModalMap] = useState<boolean>(false)

	return (
		<div className={styles.contactWrapper}>
			<div className={styles.leftSideBlock}>
				<div className={styles.contactItems}>
					<div className={styles.contactItem}>
						<div>
							<p>You can Email me Here</p>
							<a href='mailto:octavian@gmail.com'>octavian@gmail.com</a>
						</div>

						<SquareIcon className={styles.icon} />
					</div>

					<div className={styles.contactItem}>
						<div>
							<p>Give Me a Call on</p>
							<a href='tel:+37368855569'>+88 888 888</a>
						</div>

						<SquareIcon className={styles.icon} />
					</div>

					<div className={styles.contactItem}>
						<div>
							<p>Location</p>
							<p>Chisinau , RM</p>
						</div>

						<SquareIcon
							onClick={() => {
								setIsShowModalMap(true)
							}}
							className={styles.icon}
						/>
					</div>
				</div>

				<div className={styles.socialItems}>
					<p>My social profiles</p>
					<div className={styles.socialIcons}>
						<Link href={''} target='_blank'>
							<Image
								className={styles.image}
								src={linkedInIcon}
								alt='socialIcon'
							/>
						</Link>
						<Link href={''} target='_blank'>
							<Image
								className={styles.image}
								src={facebookIcon}
								alt='socialIcon'
							/>
						</Link>
						<Link href={'https://t.me/ixt13'} target='_blank'>
							<Image
								className={styles.image}
								src={telegramIcon}
								alt='socialIcon'
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.rightSideBlock}>
				<form action=''>
					<div className={styles.inputGroup}>
						<input type='text' placeholder='First Name' />
						<input type='text' placeholder='Last Name' />
					</div>

					<div className={styles.inputGroup}>
						<input type='email' placeholder='Email' />
						<input type='number' placeholder='Phone Number' />
					</div>
					<textarea placeholder='Your Message here...' name='' id=''></textarea>
					<button>Send</button>
				</form>
			</div>{' '}
			{isShowModalMap && (
				<LocationGoogleMaps
					onClick={() => {
						setIsShowModalMap(false)
					}}
				/>
			)}
		</div>
	)
}
