import styles from './ResumeScreen.module.scss'

export const ResumeScreen = () => {
	return (
		<main className={styles.mainContent}>
			<div className={styles.secondGroup}>
				<div className={styles.firstGroup}>
					<div className={styles.one}>
						<ul>
							<li className={styles.mainLi}>
								{`College of Microelectronics and Computerized Engineering 2013-2017`}
								<p
									className={styles.secondLi}
								>{`Speciality - Telecommunications`}</p>
							</li>
							<li>
								{`Web Development in Online School SkyPro 2022-2023 (12 month)`}
							</li>
						</ul>
					</div>
					<div className={styles.two}>
						<ul>
							<li>{`English - Elementary A2 Proficiency`}</li>
							<li>{`Russian - Bilingual Proficiency`}</li>
							<li>{`Romanian - Native Proficiency`}</li>
						</ul>
					</div>
				</div>
				<div className={styles.tree}>
					<ul>
						<li>
							{`Orange Store, B2C Sales Administrator/Consultant 2018-2021 
							Responsibilities - Consultation on IT, GSM products, and Orange
							services, motivate and assessed subordinates knowledge within the
							store, maintained and arranged products according to standards.`}
						</li>
						<li>
							{`Dita Estfarm, PC Operator (1C , Emails, MsOffice) 2021-11.2024\n
							`}
							<p>{`Responsibilities - Operated using the 1C program, invoiced,
							maintained records, and dispensed medications to legal entities.`}</p>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.four}>
				<ul>
					<li>{`HTML , CSS/SCSS, JavaScript - basic knowledge`}</li>
					<li>
						{`React.js with ReduxToolkit, React Query, React Router and other modules - entry level+ knowledge`}
					</li>
					<li>{`Node.JS , Express.js, MongoDB - entry level knowledge`}</li>
				</ul>
			</div>
		</main>
	)
}
