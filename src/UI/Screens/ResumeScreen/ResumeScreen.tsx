import { devSkills, languages, studies, workExperience } from '@/consts'
import { TextContentBlock } from '@/UI/Components/TextContentBlock/TextContentBlock'
import styles from './ResumeScreen.module.scss'

export const ResumeScreen = () => {
	return (
		<main className={styles.mainContent}>
			<TextContentBlock textContent={studies} className={styles.div1} />
			<TextContentBlock textContent={languages} className={styles.div2} />
			<TextContentBlock textContent={workExperience} className={styles.div3} />
			<TextContentBlock textContent={devSkills} className={styles.div4} />
		</main>
	)
}
