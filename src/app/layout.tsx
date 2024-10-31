import { Footer } from '@/UI/Components/Footer/Footer'
import { Header } from '@/UI/Components/Header/Header'
import type { Metadata } from 'next'
import '../global.css'
export const metadata: Metadata = {
	title: 'Ceban Octavian',
	description: 'Powered by Next',
}

import { BodyProvider } from '@/UI/Providers/BodyProvider/BodyProvider'
import ClientProvider from '@/UI/Providers/ClientProvider/ClientProvider'
import { Bricolage_Grotesque } from 'next/font/google'

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
		<ClientProvider>
			<BodyProvider className={inter.className}>
				<Header />
				{children}
				<Footer />
			</BodyProvider>
		</ClientProvider>
	)
}
