import { SquareIcon } from '@/UI/IconComponents/SquareIcon/SquareIcon'
import styles from './ContactScreen.module.scss'

import facebookIcon from '@/assets/images/facebookIcon.png'
import linkedInIcon from '@/assets/images/linkedInIcon.png'
import telegramIcon from '@/assets/images/telegramIcon.png'
import Image from 'next/image'
export const ContactScreen = () => {
	return (
		<div className={styles.contactWrapper}>
			<div className={styles.leftSideBlock}>
				<div className={styles.contactItems}>
					<div className={styles.contactItem}>
						<div>
							<p>You can Email me Here</p>
							<p>octavian@gmail.com</p>
						</div>

						<SquareIcon className={styles.icon} />
					</div>

					<div className={styles.contactItem}>
						<div>
							<p>Give Me a Call on</p>
							<p>+88 888 888</p>
						</div>

						<SquareIcon className={styles.icon} />
					</div>

					<div className={styles.contactItem}>
						<div>
							<p>You can Email me Here</p>
							<p>octavian@gmail.com</p>
						</div>

						<SquareIcon className={styles.icon} />
					</div>
				</div>

				<div className={styles.socialItems}>
					<p>My social profiles</p>
					<div className={styles.socialIcons}>
						<Image
							className={styles.image}
							src={linkedInIcon}
							alt='socialIcon'
						/>
						<Image
							className={styles.image}
							src={facebookIcon}
							alt='socialIcon'
						/>
						<Image
							className={styles.image}
							src={telegramIcon}
							alt='socialIcon'
						/>
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
			</div>
		</div>
	)
}
