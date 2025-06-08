'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
	Wrench,
	Zap,
	Hammer,
	Paintbrush,
	Droplets,
	Home,
	Car,
	Laptop,
	Search,
	Users,
	Star,
	ArrowRight,
	CheckCircle,
	Clock,
	Shield,
} from 'lucide-react'
import Link from 'next/link'
import { AnimatedCard } from '@/components/ui/animated-card'
import { AnimatedButton } from '@/components/ui/animated-button'

const serviceCategories = [
	{
		id: 'uy-xizmatlari',
		title: 'Uy Xizmatlari',
		description: 'Uyingiz uchun barcha kerakli xizmatlar',
		icon: Home,
		color: 'from-blue-500/10 to-blue-600/10',
		iconColor: 'text-blue-600',
		services: [
			{
				name: 'Santexnik',
				description: "Quvur ta'mirlash, o'rnatish va texnik xizmat",
				providers: 150,
				avgPrice: "50,000-150,000 so'm",
				rating: 4.8,
				icon: Wrench,
			},
			{
				name: 'Elektrik',
				description: "Simlar, o'rnatish va elektr ta'mirlash",
				providers: 120,
				avgPrice: "40,000-200,000 so'm",
				rating: 4.9,
				icon: Zap,
			},
			{
				name: 'Duradgor',
				description: "Maxsus mebel, ta'mirlash va o'rnatish",
				providers: 90,
				avgPrice: "60,000-300,000 so'm",
				rating: 4.7,
				icon: Hammer,
			},
			{
				name: 'Rassomlik',
				description: "Ichki va tashqi bo'yash xizmatlari",
				providers: 80,
				avgPrice: "30,000-100,000 so'm",
				rating: 4.6,
				icon: Paintbrush,
			},
		],
	},
	{
		id: 'tozalash',
		title: 'Tozalash Xizmatlari',
		description: 'Professional tozalash va texnik xizmat',
		icon: Droplets,
		color: 'from-cyan-500/10 to-cyan-600/10',
		iconColor: 'text-cyan-600',
		services: [
			{
				name: 'Umumiy Tozalash',
				description: 'Kundalik va haftalik tozalash xizmatlari',
				providers: 200,
				avgPrice: "25,000-80,000 so'm",
				rating: 4.5,
				icon: Droplets,
			},
			{
				name: 'Chuqur Tozalash',
				description: "To'liq va chuqur tozalash xizmatlari",
				providers: 120,
				avgPrice: "100,000-300,000 so'm",
				rating: 4.8,
				icon: Droplets,
			},
			{
				name: 'Oyna Tozalash',
				description: "Professional oyna va ko'zgu tozalash",
				providers: 80,
				avgPrice: "20,000-60,000 so'm",
				rating: 4.7,
				icon: Droplets,
			},
		],
	},
	{
		id: 'texnik-yordam',
		title: 'Texnik Yordam',
		description: "Zamonaviy texnologiyalar bo'yicha yordam",
		icon: Laptop,
		color: 'from-purple-500/10 to-purple-600/10',
		iconColor: 'text-purple-600',
		services: [
			{
				name: "Kompyuter Ta'mirlash",
				description: "PC, laptop va server ta'mirlash",
				providers: 60,
				avgPrice: "50,000-200,000 so'm",
				rating: 4.9,
				icon: Laptop,
			},
			{
				name: "Avtomobil Ta'mirlash",
				description: 'Transport vositalarini texnik xizmat',
				providers: 75,
				avgPrice: "100,000-500,000 so'm",
				rating: 4.6,
				icon: Car,
			},
		],
	},
]

const popularServices = [
	'Santexnik',
	'Elektrik',
	'Duradgor',
	'Rassomlik',
	'Tozalash',
	"Kompyuter Ta'mirlash",
]

export default function ServicesPage() {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [sortBy, setSortBy] = useState('popularity')

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
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
		<div className='min-h-screen bg-background'>
			<Header />

			{/* Hero Section */}
			<section className='py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden'>
				<div className='absolute inset-0'>
					<motion.div
						animate={{
							scale: [1, 1.1, 1],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 20,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'linear',
						}}
						className='absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl'
					/>
				</div>

				<div className='container relative'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-center space-y-6 mb-12'
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.2 }}
							className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary'
						>
							Barcha Xizmatlar
						</motion.div>
						<h1 className='text-4xl lg:text-5xl font-bold'>
							Professional Xizmatlar
							<span className='text-primary block'>
								Sizning Ehtiyojlaringiz Uchun
							</span>
						</h1>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							Uydan tortib biznesgacha, barcha ehtiyojlaringiz uchun
							tasdiqlangan mutaxassislarni toping
						</p>
					</motion.div>

					{/* Search and Filter */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className='max-w-4xl mx-auto'
					>
						<AnimatedCard className='bg-background/80 backdrop-blur-sm p-6 border shadow-lg'>
							<div className='grid md:grid-cols-3 gap-4 mb-4'>
								<div className='relative'>
									<Search className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
									<Input
										placeholder='Xizmat qidirish...'
										value={searchQuery}
										onChange={e => setSearchQuery(e.target.value)}
										className='pl-10'
									/>
								</div>
								<Select
									value={selectedCategory}
									onValueChange={setSelectedCategory}
								>
									<SelectTrigger>
										<SelectValue placeholder='Kategoriya' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='all'>Barcha Kategoriyalar</SelectItem>
										{serviceCategories.map(category => (
											<SelectItem key={category.id} value={category.id}>
												{category.title}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<Select value={sortBy} onValueChange={setSortBy}>
									<SelectTrigger>
										<SelectValue placeholder='Saralash' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='popularity'>
											Mashhurlik bo'yicha
										</SelectItem>
										<SelectItem value='rating'>Reyting bo'yicha</SelectItem>
										<SelectItem value='price'>Narx bo'yicha</SelectItem>
										<SelectItem value='providers'>
											Ustalar soni bo'yicha
										</SelectItem>
									</SelectContent>
								</Select>
							</div>

							{/* Popular Services */}
							<div className='space-y-2'>
								<p className='text-sm font-medium text-muted-foreground'>
									Mashhur xizmatlar:
								</p>
								<div className='flex flex-wrap gap-2'>
									{popularServices.map((service, index) => (
										<motion.div
											key={service}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.6 + index * 0.1 }}
										>
											<Button
												variant='outline'
												size='sm'
												onClick={() => setSearchQuery(service)}
												className='hover:bg-primary/10 hover:border-primary/20'
											>
												{service}
											</Button>
										</motion.div>
									))}
								</div>
							</div>
						</AnimatedCard>
					</motion.div>
				</div>
			</section>

			{/* Service Categories */}
			<section className='py-20'>
				<div className='container'>
					<motion.div
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						className='space-y-16'
					>
						{serviceCategories.map((category, categoryIndex) => {
							const CategoryIcon = category.icon
							return (
								<motion.div
									key={category.id}
									variants={itemVariants}
									className='space-y-8'
								>
									{/* Category Header */}
									<div className='flex items-center space-x-4'>
										<motion.div
											whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
											transition={{ duration: 0.6 }}
											className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl`}
										>
											<CategoryIcon
												className={`h-8 w-8 ${category.iconColor}`}
											/>
										</motion.div>
										<div>
											<h2 className='text-2xl font-bold'>{category.title}</h2>
											<p className='text-muted-foreground'>
												{category.description}
											</p>
										</div>
									</div>

									{/* Services Grid */}
									<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
										{category.services.map((service, serviceIndex) => {
											const ServiceIcon = service.icon
											return (
												<AnimatedCard
													key={service.name}
													delay={categoryIndex * 0.2 + serviceIndex * 0.1}
													className='group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20'
												>
													<CardHeader className='pb-4'>
														<div className='flex items-start justify-between'>
															<motion.div
																whileHover={{ scale: 1.1 }}
																className='p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl'
															>
																<ServiceIcon className='h-6 w-6 text-primary' />
															</motion.div>
															<div className='flex items-center space-x-1'>
																<Star className='h-3 w-3 fill-yellow-400 text-yellow-400' />
																<span className='text-sm font-medium'>
																	{service.rating}
																</span>
															</div>
														</div>
														<CardTitle className='text-lg group-hover:text-primary transition-colors'>
															{service.name}
														</CardTitle>
													</CardHeader>
													<CardContent className='space-y-4'>
														<p className='text-sm text-muted-foreground leading-relaxed'>
															{service.description}
														</p>

														<div className='space-y-2'>
															<div className='flex items-center justify-between text-sm'>
																<span className='text-muted-foreground'>
																	Ustalar:
																</span>
																<div className='flex items-center space-x-1'>
																	<Users className='h-3 w-3' />
																	<span className='font-medium'>
																		{service.providers}+
																	</span>
																</div>
															</div>
															<div className='flex items-center justify-between text-sm'>
																<span className='text-muted-foreground'>
																	O'rtacha narx:
																</span>
																<span className='font-medium text-primary'>
																	{service.avgPrice}
																</span>
															</div>
														</div>

														<div className='flex space-x-2 pt-2'>
															<AnimatedButton
																variant='outline'
																size='sm'
																className='flex-1 group-hover:bg-primary group-hover:text-primary-foreground'
																asChild
															>
																<Link
																	href={`/ustalar?xizmat=${service.name.toLowerCase()}`}
																>
																	Ustalarni Ko'rish
																</Link>
															</AnimatedButton>
															<AnimatedButton
																size='sm'
																className='px-3'
																asChild
															>
																<Link
																	href={`/ustalar?xizmat=${service.name.toLowerCase()}`}
																>
																	<ArrowRight className='h-4 w-4' />
																</Link>
															</AnimatedButton>
														</div>
													</CardContent>
												</AnimatedCard>
											)
										})}
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className='py-20 bg-gradient-to-b from-muted/30 to-background'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center space-y-4 mb-16'
					>
						<h2 className='text-3xl lg:text-4xl font-bold'>
							Nima Uchun UstaTop?
						</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							Bizning platformamiz orqali xizmat olishning afzalliklari
						</p>
					</motion.div>

					<div className='grid md:grid-cols-3 gap-8'>
						{[
							{
								icon: Shield,
								title: 'Tasdiqlangan Ustalar',
								description: 'Barcha ustalar tekshirilgan va tasdiqlangan',
								color: 'from-green-500/10 to-green-600/10',
								iconColor: 'text-green-600',
							},
							{
								icon: Clock,
								title: 'Tez Javob',
								description: "O'rtacha 30 daqiqa ichida javob olasiz",
								color: 'from-blue-500/10 to-blue-600/10',
								iconColor: 'text-blue-600',
							},
							{
								icon: CheckCircle,
								title: 'Kafolat',
								description: 'Barcha ishlar uchun sifat kafolati',
								color: 'from-purple-500/10 to-purple-600/10',
								iconColor: 'text-purple-600',
							},
						].map((feature, index) => {
							const Icon = feature.icon
							return (
								<AnimatedCard
									key={feature.title}
									delay={index * 0.2}
									className='text-center border-0 bg-gradient-to-br from-background to-muted/20'
								>
									<CardContent className='pt-8'>
										<motion.div
											whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
											transition={{ duration: 0.6 }}
											className={`mx-auto w-fit p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-4`}
										>
											<Icon className={`h-8 w-8 ${feature.iconColor}`} />
										</motion.div>
										<h3 className='text-xl font-semibold mb-2'>
											{feature.title}
										</h3>
										<p className='text-muted-foreground'>
											{feature.description}
										</p>
									</CardContent>
								</AnimatedCard>
							)
						})}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center space-y-8'
					>
						<div className='space-y-4'>
							<h2 className='text-3xl lg:text-4xl font-bold'>
								Kerakli Xizmatni Topa Olmadingizmi?
							</h2>
							<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
								Biz bilan bog'laning va sizning maxsus ehtiyojlaringiz uchun
								usta topishda yordam beramiz
							</p>
						</div>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<AnimatedButton size='lg' asChild>
								<Link href='/ustalar'>Barcha Ustalarni Ko'rish</Link>
							</AnimatedButton>
							<AnimatedButton variant='outline' size='lg' asChild>
								<Link href='/aloqa'>Biz Bilan Bog'lanish</Link>
							</AnimatedButton>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
