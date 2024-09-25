import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Powered by Next',
}
export const globalStyles = {
	padding: '0px',
	margin: '0px',
}
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body style={globalStyles}>{children}</body>
		</html>
	)
}
