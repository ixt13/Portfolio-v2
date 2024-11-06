import { devSkills, languages, studies, workExperience } from '@/consts'
import { TextContentBlock } from '@/UI/Components/TextContentBlock/TextContentBlock'
import styles from './ResumeScreen.module.scss'

export const ResumeScreen = () => {
	return (
		<main className={styles.mainContent}>
			<TextContentBlock textContent={studies} grid={'1 / 1 / 5 / 7'} />
			<TextContentBlock textContent={languages} grid={'5 / 1 / 9 / 7'} />
			<TextContentBlock textContent={workExperience} grid={'1 / 7 / 9 / 13'} />
			<TextContentBlock textContent={devSkills} grid={'9 / 1 / 13 / 13'} />
		</main>
	)
}
