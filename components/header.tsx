'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/providers'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MapPin, Menu, X, Bell, MessageCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { LanguageSwitcher } from '@/components/language-switcher'
import { AnimatedButton } from '@/components/ui/animated-button'

export function Header() {
	const { user, logout } = useAuth()
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	console.log('User:', user)
	return (
		<div className='container mx-auto px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				className=''
			>
				<div className='container flex h-16 items-center justify-between'>
					<Link href='/' className='flex items-center space-x-2'>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md'
						>
							<span className='text-primary-foreground font-bold text-sm'>
								UT
							</span>
						</motion.div>
						<span className='font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
							UstaTop
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center space-x-6'>
						{[
							{ href: '/xizmatlar', label: 'Xizmatlar' },
							{ href: '/ustalar', label: 'Ustalarni topish' },
							{ href: '/qanday-ishlaydi', label: 'Qanday ishlaydi' },
						].map(item => (
							<motion.div key={item.href} whileHover={{ y: -1 }}>
								<Link
									href={item.href}
									className='text-sm font-medium hover:text-primary transition-colors relative group'
								>
									{item.label}
									<motion.div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300' />
								</Link>
							</motion.div>
						))}
						{/* {user?.role === 'provider' && (
							<motion.div whileHover={{ y: -1 }}>
								<Link
									href='/usta/dashboard'
									className='text-sm font-medium hover:text-primary transition-colors'
								>
									Dashboard
								</Link>
							</motion.div>
						)}
						{user?.role == 'admin' && (
							<motion.div whileHover={{ y: -1 }}>
								<Link
									href='/admin'
									className='text-sm font-medium hover:text-primary transition-colors'
								>
									Admin Panel
								</Link>
							</motion.div>
						)} */}
					</nav>

					<div className='flex items-center space-x-4'>
						<div className='hidden md:flex items-center space-x-2 text-sm text-muted-foreground'>
							<MapPin className='h-4 w-4' />
							<span>Toshkent</span>
						</div>

						<LanguageSwitcher />

						{user ? (
							<div className='flex items-center space-x-3'>
								{/* Notifications */}
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button variant='ghost' size='icon' className='relative'>
										<Bell className='h-4 w-4' />
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											className='absolute -top-1 -right-1'
										>
											<Badge className='h-5 w-5 rounded-full flex justify-center text-white p-0 text-xs'>
												3
											</Badge>
										</motion.div>
									</Button>
								</motion.div>

								{/* Messages */}
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button variant='ghost' size='icon' className='relative'>
										<MessageCircle className='h-4 w-4' />
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											className='absolute -top-1 -right-1'
										>
											<Badge className='h-5 w-5 rounded-full flex justify-center text-white p-0 text-xs '>
												2
											</Badge>
										</motion.div>
									</Button>
								</motion.div>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<motion.div
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<Button
												variant='ghost'
												className='relative h-8 w-8 rounded-full'
											>
												<Avatar className='h-8 w-8'>
													<AvatarFallback className='bg-gradient-to-br from-primary/20 to-primary/10'>
														Umidjon
													</AvatarFallback>
												</Avatar>
											</Button>
										</motion.div>
									</DropdownMenuTrigger>
									<DropdownMenuContent className='w-56' align='end' forceMount>
										<DropdownMenuItem asChild>
											<Link href='/profil'>Profil</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link href='/buyurtmalar'>Buyurtmalarim</Link>
										</DropdownMenuItem>
										{user == null && (
											<DropdownMenuItem asChild>
												<Link href='/usta/dashboard'>Usta Dashboard</Link>
											</DropdownMenuItem>
										)}
										<DropdownMenuItem asChild>
											<Link href='/sozlamalar'>Sozlamalar</Link>
										</DropdownMenuItem>
										<DropdownMenuItem onClick={logout}>
											Chiqish
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						) : (
							<div className='hidden md:flex items-center space-x-2'>
								<AnimatedButton variant='ghost' asChild>
									<Link href='/auth/login'>Kirish</Link>
								</AnimatedButton>
								<AnimatedButton asChild>
									<Link href='/auth/register'>Ro'yxatdan o'tish</Link>
								</AnimatedButton>
							</div>
						)}

						{/* Mobile menu button */}
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								variant='ghost'
								size='icon'
								className='md:hidden'
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								<AnimatePresence mode='wait'>
									{isMenuOpen ? (
										<motion.div
											key='close'
											initial={{ rotate: -90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: 90, opacity: 0 }}
											transition={{ duration: 0.2 }}
										>
											<X className='h-5 w-5' />
										</motion.div>
									) : (
										<motion.div
											key='menu'
											initial={{ rotate: 90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: -90, opacity: 0 }}
											transition={{ duration: 0.2 }}
										>
											<Menu className='h-5 w-5' />
										</motion.div>
									)}
								</AnimatePresence>
							</Button>
						</motion.div>
					</div>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className='md:hidden border-t bg-background/95 backdrop-blur'
						>
							<nav className='container py-4 space-y-2'>
								{[
									{ href: '/xizmatlar', label: 'Xizmatlar' },
									{ href: '/ustalar', label: 'Ustalarni topish' },
									{ href: '/qanday-ishlaydi', label: 'Qanday ishlaydi' },
								].map((item, index) => (
									<motion.div
										key={item.href}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											href={item.href}
											className='block py-2 text-sm font-medium hover:text-primary transition-colors'
											onClick={() => setIsMenuOpen(false)}
										>
											{item.label}
										</Link>
									</motion.div>
								))}
								{!user && (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
										className='pt-4 space-y-2'
									>
										<AnimatedButton
											variant='outline'
											className='w-full'
											asChild
										>
											<Link href='/auth/login'>Kirish</Link>
										</AnimatedButton>
										<AnimatedButton className='w-full' asChild>
											<Link href='/auth/register'>Ro'yxatdan o'tish</Link>
										</AnimatedButton>
									</motion.div>
								)}
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.header>
		</div>
	)
}
