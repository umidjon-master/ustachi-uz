import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { HowItWorks } from '@/components/how-it-works'
import { TopProviders } from '@/components/top-providers'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Stats } from '@/components/stats'

export default function HomePage() {
	return (
		<div className='min-h-screen bg-background '>
			<Header />
			<Hero />
			<div className='container mx-auto px-4 py-8'>
				<Stats />
				<Services />
				<HowItWorks />
				<TopProviders />
			</div>
			<Footer />
		
		</div>
	)
}
