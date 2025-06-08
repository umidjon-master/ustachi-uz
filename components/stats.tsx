'use client'

import { motion } from 'framer-motion'
import { CardContent } from '@/components/ui/card'
import { Users, Star, CheckCircle, Clock } from 'lucide-react'
import { AnimatedCard } from '@/components/ui/animated-card'

const stats = [
	{
		icon: Users,
		value: '1500+',
		label: 'Faol Ustalar',
		description: 'Barcha sohalarda',
		color: 'from-blue-500/10 to-blue-600/10',
		iconColor: 'text-blue-600',
	},
	{
		icon: CheckCircle,
		value: '5000+',
		label: 'Bajarilgan Ishlar',
		description: 'Muvaffaqiyatli yakunlangan',
		color: 'from-green-500/10 to-green-600/10',
		iconColor: 'text-green-600',
	},
	{
		icon: Star,
		value: '4.9',
		label: "O'rtacha Reyting",
		description: 'Mijozlar bahosi',
		color: 'from-yellow-500/10 to-yellow-600/10',
		iconColor: 'text-yellow-600',
	},
	{
		icon: Clock,
		value: '24/7',
		label: "Qo'llab-quvvatlash",
		description: 'Doimo sizning xizmatingizda',
		color: 'from-purple-500/10 to-purple-600/10',
		iconColor: 'text-purple-600',
	},
]

export function Stats() {
	return (
		<section className='py-16 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden'>
			{/* Background decoration */}
			<div className='absolute inset-0'>
				<motion.div
					animate={{
						x: [0, 100, 0],
						y: [0, -50, 0],
					}}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'easeInOut',
					}}
					className='absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl'
				/>
				<motion.div
					animate={{
						x: [0, -80, 0],
						y: [0, 60, 0],
					}}
					transition={{
						duration: 25,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'easeInOut',
					}}
					className='absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-xl'
				/>
			</div>

			<div className='container relative'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-12'
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4'
					>
						Statistika
					</motion.div>
					<h2 className='text-2xl lg:text-3xl font-bold'>
						Bizning Yutuqlarimiz
					</h2>
				</motion.div>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{stats.map((stat, index) => {
						const Icon = stat.icon
						return (
							<AnimatedCard
								key={index}
								delay={index * 0.1}
								className='text-center border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all duration-500'
							>
								<CardContent className='pt-6'>
									<motion.div
										whileHover={{
											scale: 1.1,
											rotate: [0, -10, 10, 0],
										}}
										transition={{ duration: 0.6 }}
										className={`mx-auto w-fit p-4 bg-gradient-to-br ${stat.color} rounded-2xl mb-4`}
									>
										<Icon className={`h-8 w-8 ${stat.iconColor}`} />
									</motion.div>
									<div className='space-y-2'>
										<motion.p
											initial={{ opacity: 0, scale: 0.5 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{
												delay: 0.3 + index * 0.1,
												type: 'spring',
												stiffness: 300,
											}}
											className='text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'
										>
											{stat.value}
										</motion.p>
										<p className='font-medium'>{stat.label}</p>
										<p className='text-sm text-muted-foreground'>
											{stat.description}
										</p>
									</div>
								</CardContent>
							</AnimatedCard>
						)
					})}
				</div>
			</div>
		</section>
	)
}
