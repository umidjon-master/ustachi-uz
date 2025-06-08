'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Search, MessageCircle, User, Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/components/providers'

const navItems = [
	{ icon: Home, label: 'Bosh sahifa', href: '/' },
	{ icon: Search, label: 'Qidirish', href: '/ustalar' },
	{ icon: Plus, label: 'Buyurtma', href: '/buyurtma', special: true },
	{ icon: MessageCircle, label: 'Xabarlar', href: '/xabarlar' },
	{ icon: User, label: 'Profil', href: '/profil' },
]

export function MobileNavigation() {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const pathname = usePathname()
	const { user } = useAuth()

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	if (!user) return null

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					exit={{ y: 100 }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					className='fixed bottom-0 left-0 right-0 z-50 md:hidden'
				>
					<div className='bg-background/95 backdrop-blur-lg border-t border-border/50 px-4 py-2'>
						<div className='flex items-center justify-around'>
							{navItems.map((item, index) => {
								const Icon = item.icon
								const isActive = pathname === item.href
								const isSpecial = item.special

								return (
									<Link key={item.href} href={item.href}>
										<motion.div
											whileTap={{ scale: 0.9 }}
											className='relative flex flex-col items-center p-2'
										>
											{isSpecial ? (
												<motion.div
													whileHover={{ scale: 1.1 }}
													className='bg-primary text-primary-foreground p-3 rounded-full shadow-lg'
												>
													<Icon className='w-5 h-5' />
												</motion.div>
											) : (
												<motion.div
													whileHover={{ scale: 1.1 }}
													className={`p-2 rounded-xl transition-colors ${
														isActive
															? 'bg-primary/10 text-primary'
															: 'text-muted-foreground hover:text-foreground'
													}`}
												>
													<Icon className='w-5 h-5' />
												</motion.div>
											)}

											{!isSpecial && (
												<motion.span
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													className={`text-xs mt-1 transition-colors ${
														isActive
															? 'text-primary font-medium'
															: 'text-muted-foreground'
													}`}
												>
													{item.label}
												</motion.span>
											)}

											{isActive && !isSpecial && (
												<motion.div
													layoutId='activeTab'
													className='absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full'
												/>
											)}
										</motion.div>
									</Link>
								)
							})}
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
