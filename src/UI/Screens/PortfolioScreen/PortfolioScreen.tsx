import { portfolioPageProjects } from '@/consts'
import { PortfolioItem } from '@/UI/Components/PortfolioItem/PortfolioItem'
import styles from './PortfolioScreen.module.scss'
export const PortfolioScreen = () => {
	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				{portfolioPageProjects.map((el, index) => (
					<PortfolioItem
						key={index}
						image={el.image}
						descriprion={el.descriprion}
						usedTechnologiesIcons={el.usedTechnologiesIcons}
						isLive={el.isLive}
						isGithub={el.isGithub}
					/>
				))}
			</div>
		</main>
	)
}
