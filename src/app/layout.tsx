import { Footer } from '@/UI/Components/Footer/Footer'
import { Header } from '@/UI/Components/Header/Header'
import type { Metadata } from 'next'
import './global.css'
import styles from './layoutWrapper.module.css'

export const metadata: Metadata = {
	title: 'Ceban Octavian',
	description: 'Powered by Next',
}

import { Bricolage_Grotesque } from 'next/font/google'

// При загрузке вариативного шрифта, вес определять не нужно
const inter = Bricolage_Grotesque({
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={inter.className}>
			<body>
				<div className='area'>
					<ul className='circles'>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div
					className={styles.wrapper}
					style={{ position: 'relative', zIndex: '1' }}
				>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
