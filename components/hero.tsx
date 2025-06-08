'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import {
	Search,
	MapPin,
	Star,
	Users,
	CheckCircle,
	Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { AnimatedButton } from '@/components/ui/animated-button'
import { AnimatedCard } from '@/components/ui/animated-card'

export function Hero() {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCity, setSelectedCity] = useState('')

	const cities = [
		'Toshkent',
		'Samarqand',
		'Buxoro',
		'Andijon',
		'Namangan',
		"Farg'ona",
		'Qarshi',
		'Nukus',
	]
	const services = [
		'Santexnik',
		'Elektrik',
		'Duradgor',
		'Rassomlik',
		'Tozalash',
		"Ta'mirlash",
	]

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 12,
			},
		},
	}

	return (
		<section className='relative py-10 lg:py-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden'>
			{/* Background decoration */}
			<div className='absolute inset-0 overflow-hidden'>
				<motion.div
					animate={{
						rotate: [0, 360],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear',
					}}
					className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl'
				/>
				<motion.div
					animate={{
						rotate: [360, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 25,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear',
					}}
					className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl'
				/>
			</div>

			<div className='container relative mx-auto px-4'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					className='grid lg:grid-cols-2 gap-12 items-center'
				>
					<div className='space-y-8'>
						<motion.div variants={itemVariants} className='space-y-4'>
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6 }}
								className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary'
							>
								<Sparkles className='w-4 h-4' />
								#1 Professional Services Platform
							</motion.div>

							<h1 className='text-4xl lg:text-6xl font-bold tracking-tight'>
								Ishonchli
								<motion.span
									className='text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'
									animate={{
										backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
									}}
									transition={{
										duration: 3,
										repeat: Number.POSITIVE_INFINITY,
										ease: 'linear',
									}}
								>
									{' '}
									Mahalliy Ustalar
								</motion.span>
								ni Toping
							</h1>
							<p className='text-xl text-muted-foreground max-w-lg leading-relaxed'>
								Hududingizdagi tasdiqlangan professional ustalar bilan
								bog'laning. Santexnikdan tortib elektrik ishlarigacha, har
								qanday ish uchun to'g'ri mutaxassisni toping.
							</p>
						</motion.div>

						{/* Search Form */}
						<motion.div variants={itemVariants}>
							<AnimatedCard className='bg-background/80 backdrop-blur-sm p-6 border shadow-lg space-y-4'>
								<div className='grid md:grid-cols-2 gap-4'>
									<div className='relative group'>
										<Search className='absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors' />
										<Input
											placeholder='Qanday xizmat kerak?'
											value={searchQuery}
											onChange={e => setSearchQuery(e.target.value)}
											className='pl-10 border-0 bg-muted/50 focus:bg-background transition-all duration-300'
										/>
									</div>
									<Select value={selectedCity} onValueChange={setSelectedCity}>
										<SelectTrigger className='border-0 bg-muted/50 focus:bg-background transition-all duration-300'>
											<MapPin className='h-4 w-4 mr-2' />
											<SelectValue placeholder='Shaharni tanlang' />
										</SelectTrigger>
										<SelectContent>
											{cities.map(city => (
												<SelectItem key={city} value={city}>
													{city}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
								<AnimatedButton
									size='lg'
									className='w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary'
									asChild
								>
									<Link href='/ustalar'>
										<Search className='mr-2 h-4 w-4' />
										Professional Ustalarni Topish
									</Link>
								</AnimatedButton>
							</AnimatedCard>
						</motion.div>

						{/* Popular Services */}
						<motion.div variants={itemVariants} className='space-y-3'>
							<p className='text-sm font-medium text-muted-foreground'>
								Mashhur xizmatlar:
							</p>
							<div className='flex flex-wrap gap-2'>
								{services.map((service, index) => (
									<motion.div
										key={service}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.8 + index * 0.1 }}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											variant='outline'
											size='sm'
											asChild
											className='hover:bg-primary/10 hover:border-primary/20 transition-all duration-300'
										>
											<Link href={`/ustalar?xizmat=${service.toLowerCase()}`}>
												{service}
											</Link>
										</Button>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>

					<motion.div variants={itemVariants} className='relative'>
						{/* Stats Cards */}
						<div className='grid grid-cols-2 gap-4 mb-8'>
							{[
								{ icon: Users, value: '1500+', label: 'Tasdiqlangan Ustalar' },
								{ icon: Star, value: '4.9', label: "O'rtacha Reyting" },
								{
									icon: CheckCircle,
									value: '5000+',
									label: 'Bajarilgan Ishlar',
								},
								{ icon: MapPin, value: '12', label: 'Shahar va Viloyat' },
							].map((stat, index) => {
								const Icon = stat.icon
								return (
									<AnimatedCard
										key={stat.label}
										delay={0.6 + index * 0.1}
										className='bg-background/80 backdrop-blur-sm p-6 border shadow-lg'
									>
										<div className='flex items-center space-x-3'>
											<motion.div
												whileHover={{ rotate: 360 }}
												transition={{ duration: 0.6 }}
												className='p-2 bg-primary/10 rounded-lg'
											>
												<Icon className='h-6 w-6 text-primary' />
											</motion.div>
											<div>
												<motion.p
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ delay: 1 + index * 0.1 }}
													className='text-2xl font-bold'
												>
													{stat.value}
												</motion.p>
												<p className='text-sm text-muted-foreground'>
													{stat.label}
												</p>
											</div>
										</div>
									</AnimatedCard>
								)
							})}
						</div>

						{/* Hero Image Placeholder */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 1.2, duration: 0.8 }}
							className='relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl'
						>
							<motion.div
								animate={{
									scale: [1, 1.05, 1],
									rotate: [0, 1, 0],
								}}
								transition={{
									duration: 6,
									repeat: Number.POSITIVE_INFINITY,
									ease: 'easeInOut',
								}}
								className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'
							/>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.5 }}
								className='absolute bottom-6 left-6 text-white'
							>
								<p className='text-lg font-semibold'>Professional Xizmatlar</p>
								<p className='text-sm opacity-90'>
									Minglab mijozlar tomonidan ishonilgan
								</p>
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
