'use client'

import { SquareIcon } from '@/UI/IconComponents/SquareIcon/SquareIcon'
import styles from './ContactScreen.module.scss'

import facebookIcon from '@/assets/images/facebookIcon.png'
import linkedInIcon from '@/assets/images/linkedInIcon.png'
import telegramIcon from '@/assets/images/telegramIcon.png'
import { LocationGoogleMaps } from '@/UI/Modals/LocationGoogleMaps/LocationGoogleMaps'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
export const ContactScreen = () => {
	const [isShowModal, setIsShowModal] = useState<boolean>(false)
	const [onButtonHover, setOnButtonHover] = useState<boolean>(false)

	const [firstName, setFirstName] = useState<string>()
	const [lastName, setLastName] = useState<string>()
	const [email, setEmail] = useState<string>()
	const [phoneNumber, setPhoneNumber] = useState<string>()
	const [message, setMessage] = useState<string>()
	const [data, setData] = useState<string>('')

	const [isLoading, setLoading] = useState<boolean>()

	const [isError, setError] = useState<boolean>()

	const getTestfn = async () => {
		setLoading(true)
		try {
			const response = await axios.post('api/sendMessage', {
				firstName: firstName,
				lastName: lastName,
				email: email,
				phoneNumber: phoneNumber,
				message: message,
			})
			setData(response.data)
			setMessage('')
			setTimeout(() => {
				setData('')
			}, 3000)
			console.log(response.data)
		} catch (error) {
			setError(!!error)
			setTimeout(() => {
				setError(false)
			}, 3000)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className={styles.contactWrapper}>
			<div className={styles.leftSideBlock}>
				<div className={styles.contactItems}>
					<div className={styles.contactItem}>
						<div className={styles.contactItemTextContent}>
							<p>You can Email me Here</p>
							<p>ixt13@yahoo.com</p>
						</div>
						<a href='mailto:ixt13@yahoo.com'>
							<SquareIcon className={styles.icon} />
						</a>
					</div>

					<div className={styles.contactItem}>
						<div className={styles.contactItemTextContent}>
							<p>Give Me a Call on</p>
							<p>+373 688 555 69</p>
						</div>

						<a href='tel:+37368855569'>
							<SquareIcon className={styles.icon} />
						</a>
					</div>

					<div className={styles.contactItem}>
						<div className={styles.contactItemTextContent}>
							<p>My Current Location</p>
							<p>Freilassing, Germany</p>
						</div>
						<a
							onClick={() => {
								setIsShowModal(true)
							}}
						>
							<SquareIcon className={styles.icon} />
						</a>
					</div>
				</div>

				<div className={styles.socialItems}>
					<p>My social profiles</p>
					<div className={styles.socialIcons}>
						<Link
							href={'https://www.linkedin.com/in/octavian-ceban-96383bb6/'}
							target='_blank'
						>
							<Image
								className={styles.image}
								src={linkedInIcon}
								alt='socialIcon'
							/>
						</Link>
						<Link href={'https://www.facebook.com/okch97/'} target='_blank'>
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
				<p className={styles.rightSideBlockTitle}>Send me a message</p>
				<form
					onSubmit={e => {
						e.preventDefault()

						getTestfn()
					}}
					method='post'
				>
					<div className={styles.inputGroup}>
						<input
							type='text'
							placeholder='First Name'
							id='firstName'
							name='firstName'
							required
							onChange={e => {
								setFirstName(e.target.value)
							}}
						/>

						<input
							type='text'
							placeholder='Last Name'
							id='lastName'
							name='lastName'
							required
							onChange={e => {
								setLastName(e.target.value)
							}}
						/>
					</div>
					<div className={styles.inputGroup}>
						<input
							type='email'
							placeholder='Email'
							id='email'
							name='email'
							required
							onChange={e => {
								setEmail(e.target.value)
							}}
						/>

						<input
							type='number'
							placeholder='Phone Number'
							id='phone'
							name='phone'
							onChange={e => {
								setPhoneNumber(e.target.value)
							}}
						/>
					</div>

					<textarea
						value={message}
						onChange={e => {
							setMessage(e.target.value)
						}}
						placeholder='Your Message here...'
						id='message'
						name='message'
						required
					></textarea>
					<button
						type='submit'
						onMouseEnter={() => {
							setOnButtonHover(true)
						}}
						onMouseLeave={() => {
							setOnButtonHover(false)
						}}
					>
						<p
							className={`${styles.buttonTextContent} ${
								onButtonHover
									? styles.buttonTextContentVisible
									: styles.buttonTextContentHidden
							} `}
						>
							Send
						</p>

						{isLoading ? (
							<div className={styles.loader}></div>
						) : data ? (
							<p className={styles.loadingText}>OK</p>
						) : (
							<SquareIcon className={styles.buttonIcon} />
						)}
					</button>
				</form>
			</div>

			<LocationGoogleMaps
				isShowModal={isShowModal}
				onClick={() => {
					setIsShowModal(false)
				}}
			/>
		</div>
	)
}