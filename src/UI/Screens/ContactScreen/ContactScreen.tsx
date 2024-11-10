import { SquareIcon } from '@/UI/IconComponents/SquareIcon/SquareIcon'
import styles from './ContactScreen.module.scss'
export const ContactScreen = () => {
	return (
		<div className={styles.contactWrapper}>
			<div className={styles.leftSideBlock}>
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
			<div className={styles.rightSideBlock}>
				<form action=''>
					<input type='text' />
					<input type='text' />
					<input type='text' />
					<input type='text' />
					<textarea placeholder='Your Message here...' name='' id=''></textarea>
					<button>Send</button>
				</form>
			</div>
		</div>
	)
}
