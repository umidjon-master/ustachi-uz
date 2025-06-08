'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Search,
	UserCheck,
	Calendar,
	Star,
	Users,
	CreditCard,
	Shield,
	Clock,
	CheckCircle,
	ArrowRight,
	Award,
} from 'lucide-react'
import Link from 'next/link'
import { AnimatedCard } from '@/components/ui/animated-card'
import { AnimatedButton } from '@/components/ui/animated-button'

const steps = [
	{
		id: '01',
		title: 'Xizmat Qidiring',
		description:
			"Kerakli xizmat turini tanlang va hududingizdagi ustalarni ko'ring",
		details: [
			'Xizmat kategoriyasini tanlang',
			'Hududingizni belgilang',
			'Ustalarni taqqoslang',
			"Reyting va sharhlarni o'qing",
		],
		icon: Search,
		color: 'from-blue-500/10 to-blue-600/10',
		iconColor: 'text-blue-600',
	},
	{
		id: '02',
		title: 'Ustani Tanlang',
		description: 'Tajriba, reyting va narx asosida eng mos ustani tanlang',
		details: [
			"Usta profilini ko'ring",
			'Oldingi ishlarini tekshiring',
			"Mijozlar sharhlarini o'qing",
			'Narx va mavjudlikni aniqlang',
		],
		icon: UserCheck,
		color: 'from-green-500/10 to-green-600/10',
		iconColor: 'text-green-600',
	},
	{
		id: '03',
		title: 'Buyurtma Bering',
		description: 'Xizmat tafsilotlarini kiriting va vaqt belgilang',
		details: [
			'Ish tavsifini yozing',
			'Manzil va vaqtni belgilang',
			"Byudjetingizni ko'rsating",
			"Qo'shimcha talablarni qo'shing",
		],
		icon: Calendar,
		color: 'from-purple-500/10 to-purple-600/10',
		iconColor: 'text-purple-600',
	},
	{
		id: '04',
		title: "Baholang va To'lang",
		description: "Ish tugagandan so'ng baholang va to'lov qiling",
		details: [
			'Ish sifatini baholang',
			'Sharh va reyting qoldiring',
			"Xavfsiz to'lov qiling",
			'Kafolat olasiz',
		],
		icon: Star,
		color: 'from-orange-500/10 to-orange-600/10',
		iconColor: 'text-orange-600',
	},
]

const userTypes = [
	{
		id: 'customer',
		title: 'Mijozlar Uchun',
		description: "Xizmat izlayotgan mijozlar uchun qo'llanma",
		icon: Users,
		steps: [
			"Ro'yxatdan o'ting yoki tizimga kiring",
			'Kerakli xizmat turini qidiring',
			'Ustalarni taqqoslang va tanlang',
			'Buyurtma bering va vaqt belgilang',
			"Usta bilan bog'laning",
			"Xizmat tugagandan so'ng baholang",
		],
	},
	{
		id: 'provider',
		title: 'Ustalar Uchun',
		description: "Xizmat ko'rsatuvchilar uchun qo'llanma",
		icon: Award,
		steps: [
			'Professional profil yarating',
			'Xizmatlar va narxlarni belgilang',
			'Hujjatlaringizni tasdiqlang',
			'Buyurtmalarni qabul qiling',
			'Mijozlar bilan ishlang',
			'Daromad oling va reytingni oshiring',
		],
	},
]

const features = [
	{
		icon: Shield,
		title: 'Xavfsizlik',
		description: "Barcha to'lovlar himoyalangan va ustalar tekshirilgan",
		benefits: [
			'SSL shifrlash',
			"Xavfsiz to'lov tizimi",
			'Tasdiqlangan ustalar',
			"24/7 qo'llab-quvvatlash",
		],
	},
	{
		icon: Clock,
		title: 'Tezlik',
		description: 'Tez javob va professional xizmat',
		benefits: [
			'30 daqiqa ichida javob',
			'Bir kunda xizmat',
			'Real-time xabarlar',
			'Tezkor buyurtma berish',
		],
	},
	{
		icon: CreditCard,
		title: "Qulay To'lov",
		description: "Turli to'lov usullari va moslashuvchan narxlar",
		benefits: [
			"Naqd to'lov",
			"Karta orqali to'lov",
			"Online to'lov",
			"Bo'lib to'lash imkoniyati",
		],
	},
]

export default function HowItWorksPage() {
	const [selectedUserType, setSelectedUserType] = useState('customer')
	const [activeStep, setActiveStep] = useState(0)

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
							Qanday Ishlaydi
						</motion.div>
						<h1 className='text-4xl lg:text-5xl font-bold'>
							UstaTop Bilan
							<span className='text-primary block'>
								Professional Xizmat Olish
							</span>
						</h1>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							Bizning platformamiz orqali professional ustalar bilan bog'lanish
							va sifatli xizmat olish juda oson
						</p>
					</motion.div>

					{/* Quick Stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className='grid md:grid-cols-4 gap-6 max-w-4xl mx-auto'
					>
						{[
							{ number: '1500+', label: 'Tasdiqlangan Ustalar' },
							{ number: '5000+', label: 'Bajarilgan Ishlar' },
							{ number: '4.9', label: "O'rtacha Reyting" },
							{ number: '30 daq', label: "O'rtacha Javob Vaqti" },
						].map((stat, index) => (
							<AnimatedCard
								key={stat.label}
								delay={index * 0.1}
								className='text-center p-6'
							>
								<motion.p
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{
										delay: 0.6 + index * 0.1,
										type: 'spring',
										stiffness: 300,
									}}
									className='text-3xl font-bold text-primary'
								>
									{stat.number}
								</motion.p>
								<p className='text-sm text-muted-foreground mt-1'>
									{stat.label}
								</p>
							</AnimatedCard>
						))}
					</motion.div>
				</div>
			</section>

			{/* Main Steps */}
			<section className='py-20'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center space-y-4 mb-16'
					>
						<h2 className='text-3xl lg:text-4xl font-bold'>4 Oddiy Qadam</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							Professional xizmat olish uchun faqat 4 ta oddiy qadamni bajaring
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						className='space-y-12'
					>
						{steps.map((step, index) => {
							const Icon = step.icon
							const isEven = index % 2 === 0

							return (
								<motion.div
									key={step.id}
									variants={itemVariants}
									className={`grid lg:grid-cols-2 gap-12 items-center ${
										!isEven ? 'lg:grid-flow-col-dense' : ''
									}`}
								>
									{/* Content */}
									<div
										className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}
									>
										<div className='flex items-center space-x-4'>
											<motion.div
												whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
												transition={{ duration: 0.6 }}
												className={`p-4 bg-gradient-to-br ${step.color} rounded-2xl relative`}
											>
												<Icon className={`h-8 w-8 ${step.iconColor}`} />
												<motion.div
													initial={{ scale: 0 }}
													whileInView={{ scale: 1 }}
													viewport={{ once: true }}
													transition={{
														delay: 0.3 + index * 0.1,
														type: 'spring',
														stiffness: 300,
													}}
													className='absolute -top-2 -right-2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-sm font-bold rounded-full h-8 w-8 flex items-center justify-center'
												>
													{step.id}
												</motion.div>
											</motion.div>
											<div>
												<h3 className='text-2xl font-bold'>{step.title}</h3>
												<p className='text-muted-foreground'>
													{step.description}
												</p>
											</div>
										</div>

										<div className='space-y-3'>
											{step.details.map((detail, detailIndex) => (
												<motion.div
													key={detail}
													initial={{ opacity: 0, x: -20 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{
														delay: 0.5 + index * 0.1 + detailIndex * 0.1,
													}}
													className='flex items-center space-x-3'
												>
													<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
													<span className='text-muted-foreground'>
														{detail}
													</span>
												</motion.div>
											))}
										</div>

										{index === 0 && (
											<AnimatedButton asChild>
												<Link href='/ustalar'>
													Hoziroq Boshlash
													<ArrowRight className='ml-2 h-4 w-4' />
												</Link>
											</AnimatedButton>
										)}
									</div>

									{/* Visual */}
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: 0.3 + index * 0.1 }}
										className={`${!isEven ? 'lg:col-start-1' : ''}`}
									>
										<div className='relative h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden'>
											<motion.div
												animate={{
													scale: [1, 1.05, 1],
												}}
												transition={{
													duration: 4,
													repeat: Number.POSITIVE_INFINITY,
													ease: 'easeInOut',
												}}
												className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'
											/>
											<div className='absolute bottom-6 left-6 text-white'>
												<p className='text-lg font-semibold'>{step.title}</p>
												<p className='text-sm opacity-90'>{step.description}</p>
											</div>
										</div>
									</motion.div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			{/* User Type Guides */}
			<section className='py-20 bg-gradient-to-b from-muted/30 to-background'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center space-y-4 mb-16'
					>
						<h2 className='text-3xl lg:text-4xl font-bold'>
							Batafsil Qo'llanma
						</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							Sizning rollingizga mos qo'llanmani tanlang
						</p>
					</motion.div>

					<Tabs
						value={selectedUserType}
						onValueChange={setSelectedUserType}
						className='max-w-4xl mx-auto'
					>
						<TabsList className='grid w-full grid-cols-2 mb-8'>
							{userTypes.map(type => {
								const Icon = type.icon
								return (
									<TabsTrigger
										key={type.id}
										value={type.id}
										className='flex items-center space-x-2'
									>
										<Icon className='h-4 w-4' />
										<span>{type.title}</span>
									</TabsTrigger>
								)
							})}
						</TabsList>

						{userTypes.map(type => (
							<TabsContent key={type.id} value={type.id}>
								<AnimatedCard className='p-8'>
									<div className='text-center mb-8'>
										<h3 className='text-2xl font-bold mb-2'>{type.title}</h3>
										<p className='text-muted-foreground'>{type.description}</p>
									</div>

									<div className='grid md:grid-cols-2 gap-6'>
										{type.steps.map((step, index) => (
											<motion.div
												key={index}
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ delay: index * 0.1 }}
												className='flex items-start space-x-4 p-4 rounded-lg bg-muted/30'
											>
												<div className='flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold'>
													{index + 1}
												</div>
												<p className='text-sm'>{step}</p>
											</motion.div>
										))}
									</div>

									<div className='text-center mt-8'>
										<AnimatedButton asChild>
											<Link
												href={
													type.id === 'customer'
														? '/auth/register'
														: '/auth/register?type=provider'
												}
											>
												{type.id === 'customer'
													? 'Mijoz Sifatida Boshlash'
													: "Usta Sifatida Qo'shilish"}
											</Link>
										</AnimatedButton>
									</div>
								</AnimatedCard>
							</TabsContent>
						))}
					</Tabs>
				</div>
			</section>

			{/* Features */}
			<section className='py-20'>
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
							Bizning platformamizning asosiy afzalliklari
						</p>
					</motion.div>

					<div className='grid md:grid-cols-3 gap-8'>
						{features.map((feature, index) => {
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
											className='mx-auto w-fit p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-6'
										>
											<Icon className='h-8 w-8 text-primary' />
										</motion.div>
										<h3 className='text-xl font-semibold mb-3'>
											{feature.title}
										</h3>
										<p className='text-muted-foreground mb-6'>
											{feature.description}
										</p>

										<div className='space-y-2'>
											{feature.benefits.map((benefit, benefitIndex) => (
												<motion.div
													key={benefit}
													initial={{ opacity: 0, x: -20 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{
														delay: 0.3 + index * 0.1 + benefitIndex * 0.1,
													}}
													className='flex items-center space-x-2 text-sm'
												>
													<CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
													<span>{benefit}</span>
												</motion.div>
											))}
										</div>
									</CardContent>
								</AnimatedCard>
							)
						})}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-20 bg-gradient-to-b from-muted/30 to-background'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center space-y-4 mb-16'
					>
						<h2 className='text-3xl lg:text-4xl font-bold'>
							Tez-tez So'raladigan Savollar
						</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							Eng ko'p so'raladigan savollarga javoblar
						</p>
					</motion.div>

					<div className='max-w-3xl mx-auto space-y-4'>
						{[
							{
								question: 'UstaTop xavfsizmi?',
								answer:
									"Ha, barcha ustalar tekshirilgan va tasdiqlangan. To'lovlar xavfsiz tizim orqali amalga oshiriladi.",
							},
							{
								question: 'Qancha vaqtda javob olaman?',
								answer:
									"O'rtacha 30 daqiqa ichida ustalardan javob olasiz. Ba'zi hollarda bu yanada tezroq bo'lishi mumkin.",
							},
							{
								question: "To'lov qanday amalga oshiriladi?",
								answer:
									"Naqd, karta orqali yoki online to'lov qilishingiz mumkin. To'lov ish tugagandan so'ng amalga oshiriladi.",
							},
							{
								question: 'Agar ish sifati yoqmasa nima qilaman?',
								answer:
									"Bizda sifat kafolati mavjud. Muammo bo'lsa, qo'llab-quvvatlash xizmati orqali hal qilamiz.",
							},
						].map((faq, index) => (
							<AnimatedCard key={index} delay={index * 0.1} className='p-6'>
								<h4 className='font-semibold mb-2'>{faq.question}</h4>
								<p className='text-muted-foreground'>{faq.answer}</p>
							</AnimatedCard>
						))}
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
								Tayyor Professional Xizmat Olishga?
							</h2>
							<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
								Hoziroq boshlang va minglab tasdiqlangan ustalar bilan
								bog'laning
							</p>
						</div>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<AnimatedButton size='lg' asChild>
								<Link href='/ustalar'>Ustalarni Ko'rish</Link>
							</AnimatedButton>
							<AnimatedButton variant='outline' size='lg' asChild>
								<Link href='/auth/register'>Ro'yxatdan O'tish</Link>
							</AnimatedButton>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
