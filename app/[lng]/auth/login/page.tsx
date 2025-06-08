'use client'

import type React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useAuth } from '@/components/providers'
import { useToast } from '@/hooks/use-toast'
import { Eye, EyeOff } from 'lucide-react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { SuccessAnimation } from '@/components/ui/success-animation'
import { AnimatedButton } from '@/components/ui/animated-button'
import { AuthAPI } from '@/lib/api/auth'

export default function LoginPage() {
	const [telefon, setTelefon] = useState('')
	const [parol, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)
	const { login, isLoading } = useAuth()
	const { toast } = useToast()
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			await login(telefon, parol)
			const data = {
				telefon,
				parol,
			}
			await AuthAPI.login(data)
			setShowSuccess(true)
			setTimeout(() => {
				setShowSuccess(false)
				toast({
					title: 'Xush kelibsiz!',
					description: 'Muvaffaqiyatli tizimga kirdingiz.',
				})
				router.push('/')
			}, 2000)
		} catch (error) {
			toast({
				title: 'Xatolik',
				description: "Email yoki parol noto'g'ri.",
				variant: 'destructive',
			})
		}
	}

	return (
		<>
			<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4 relative overflow-hidden'>
				{/* Background decoration */}
				<div className='absolute inset-0'>
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 20,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'linear',
						}}
						className='absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl'
					/>
					<motion.div
						animate={{
							scale: [1.2, 1, 1.2],
							rotate: [360, 180, 0],
						}}
						transition={{
							duration: 25,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'linear',
						}}
						className='absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-2xl'
					/>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='w-full max-w-md relative'
				>
					<Card className='border-0 shadow-2xl bg-background/80 backdrop-blur-lg'>
						<CardHeader className='text-center space-y-4'>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
								className='mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg'
							>
								<span className='text-primary-foreground font-bold text-xl'>
									UT
								</span>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
							>
								<CardTitle className='text-2xl font-bold'>
									Xush Kelibsiz
								</CardTitle>
								<CardDescription className='text-muted-foreground'>
									UstaTop hisobingizga kiring
								</CardDescription>
							</motion.div>
						</CardHeader>
						<CardContent>
							<motion.form
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4 }}
								onSubmit={handleSubmit}
								className='space-y-6'
							>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5 }}
									className='space-y-2'
								>
									<Label htmlFor='email'>Email</Label>
									<Input
										id='telefon'
										type='telefon'
										placeholder='Telefon raqamingizni kiriting'
										value={telefon}
										onChange={e => setTelefon(e.target.value)}
										required
										className='transition-all duration-300 focus:scale-[1.02]'
									/>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.6 }}
									className='space-y-2'
								>
									<Label htmlFor='password'>Parol</Label>
									<div className='relative'>
										<Input
											id='password'
											type={showPassword ? 'text' : 'password'}
											placeholder='Parolingizni kiriting'
											value={parol}
											onChange={e => setPassword(e.target.value)}
											required
											className='pr-10 transition-all duration-300 focus:scale-[1.02]'
										/>
										<motion.button
											type='button'
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className='absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors'
											onClick={() => setShowPassword(!showPassword)}
										>
											<AnimatePresence mode='wait'>
												{showPassword ? (
													<motion.div
														key='hide'
														initial={{ opacity: 0, rotate: -90 }}
														animate={{ opacity: 1, rotate: 0 }}
														exit={{ opacity: 0, rotate: 90 }}
														transition={{ duration: 0.2 }}
													>
														<EyeOff className='h-4 w-4' />
													</motion.div>
												) : (
													<motion.div
														key='show'
														initial={{ opacity: 0, rotate: 90 }}
														animate={{ opacity: 1, rotate: 0 }}
														exit={{ opacity: 0, rotate: -90 }}
														transition={{ duration: 0.2 }}
													>
														<Eye className='h-4 w-4' />
													</motion.div>
												)}
											</AnimatePresence>
										</motion.button>
									</div>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7 }}
								>
									<AnimatedButton
										type='submit'
										className='w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary'
										disabled={isLoading}
									>
										{isLoading ? (
											<div className='flex items-center gap-2'>
												<LoadingSpinner size='sm' />
												Kirilmoqda...
											</div>
										) : (
											'Kirish'
										)}
									</AnimatedButton>
								</motion.div>
							</motion.form>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
								className='mt-6 text-center space-y-4'
							>
								<Link
									href='/auth/forgot-password'
									className='text-sm text-primary hover:underline transition-colors'
								>
									Parolni unutdingizmi?
								</Link>
								<p className='text-sm text-muted-foreground'>
									Hisobingiz yo'qmi?{' '}
									<Link
										href='/auth/register'
										className='text-primary hover:underline transition-colors'
									>
										Ro'yxatdan o'ting
									</Link>
								</p>
							</motion.div>

							{/* Demo Accounts */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.9 }}
								className='mt-6 p-4 bg-muted/50 rounded-lg border'
							>
								<p className='text-xs font-medium mb-2 text-center'>
									Demo Hisoblar:
								</p>
								<div className='space-y-1 text-xs text-muted-foreground'>
									<p>Mijoz: customer@demo.com / password</p>
									<p>Usta: provider@demo.com / password</p>
									<p>Admin: admin@demo.com / password</p>
								</div>
							</motion.div>
						</CardContent>
					</Card>
				</motion.div>
			</div>

			<SuccessAnimation
				show={showSuccess}
				message='Tizimga muvaffaqiyatli kirdingiz!'
			/>
		</>
	)
}
