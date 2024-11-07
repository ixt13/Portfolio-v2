import { PortfolioItem } from '@/UI/Components/PortfolioItem/PortfolioItem'
import styles from './PortfolioScreen.module.scss'
export const PortfolioScreen = () => {
	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<PortfolioItem />
				<PortfolioItem />
				<PortfolioItem />
				<PortfolioItem />
				<PortfolioItem />
				<PortfolioItem />
			</div>
		</main>
	)
}
