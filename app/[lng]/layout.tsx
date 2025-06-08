import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'
import { MobileNavigation } from '@/components/mobile-navigation'
const inter = Inter({ subsets: ['latin'] })
export async function generateStaticParams() {
	return languages.map(lng => ({ lng }))
}
export const metadata: Metadata = {
	title: 'UstaTop - Professional Services Platform',
	description: 'Connect with trusted local service providers',
	generator: 'v0.dev',
}
interface Props {
	children: React.ReactNode
	params: {
		lng: string
	}
}

export default async function RootLayout({ children, params }: Props) {
	const { lng } = await params

	return (
		<html lang={lng} dir={dir(lng)} suppressHydrationWarning>
			<body className={inter.className} suppressHydrationWarning>
				<Providers>
					<div>{children}</div>
					<Toaster />
					<MobileNavigation />
				</Providers>
			</body>
		</html>
	)
}
