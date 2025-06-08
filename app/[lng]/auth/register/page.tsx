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
import { Checkbox } from '@/components/ui/checkbox'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Eye, EyeOff, User, Phone, Mail, MapPin, Lock } from 'lucide-react'
import { AuthAPI } from '@/lib/api/auth'
import { Providers, useAuth } from '@/components/providers'

export default function RegisterPage() {
	const [formData, setFormData] = useState({
		ism: '',
		telefon: '',
		email: '',
		parol: '',
		confirmPassword: '',
		hudud: '',
		tavsif: '',
		tajriba: '',
		agreeToTerms: false,
	})

	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)
	const { register } = useAuth()
	const { toast } = useToast()
	const router = useRouter()

	const uzbekistanRegions = [
		'Toshkent',
		'Toshkent viloyati',
		'Samarqand',
		'Buxoro',
		'Andijon',
		'Namangan',
		"Farg'ona",
		'Qashqadaryo',
		'Surxondaryo',
		'Navoiy',
		'Jizzax',
		'Sirdaryo',
		'Xorazm',
		"Qoraqalpog'iston",
	]

	const formatPhoneNumber = (phone: string) => {
		// +998901234567 formatiga keltirish
		let formatted = phone.replace(/\D/g, '') // faqat raqamlar

		if (formatted.startsWith('998')) {
			formatted = '+' + formatted
		} else if (formatted.startsWith('8')) {
			formatted = '+99' + formatted
		} else if (formatted.length === 9) {
			formatted = '+998' + formatted
		}

		return formatted
	}

	const validateForm = () => {
		if (!formData.ism.trim()) {
			toast({
				title: 'Xatolik',
				description: 'Ism kiritilishi shart.',
				variant: 'destructive',
			})
			return false
		}

		if (!formData.telefon.trim()) {
			toast({
				title: 'Xatolik',
				description: 'Telefon raqam kiritilishi shart.',
				variant: 'destructive',
			})
			return false
		}

		if (formData.parol.length < 6) {
			toast({
				title: 'Xatolik',
				description: "Parol kamida 6 ta belgidan iborat bo'lishi kerak.",
				variant: 'destructive',
			})
			return false
		}

		if (formData.parol !== formData.confirmPassword) {
			toast({
				title: 'Xatolik',
				description: 'Parollar mos kelmaydi.',
				variant: 'destructive',
			})
			return false
		}

		if (!formData.hudud) {
			toast({
				title: 'Xatolik',
				description: 'Hudud tanlanishi shart.',
				variant: 'destructive',
			})
			return false
		}

		if (!formData.agreeToTerms) {
			toast({
				title: 'Xatolik',
				description: 'Iltimos, shartlar va qoidalarga rozilik bering.',
				variant: 'destructive',
			})
			return false
		}

		return true
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!validateForm()) return

		setIsLoading(true)

		try {
			const registerData = {
				ism: formData.ism.trim(),
				telefon: formatPhoneNumber(formData.telefon),
				parol: formData.parol,
				hudud: formData.hudud,
				...(formData.email && { email: formData.email.trim() }),
			}
			await register(registerData)
			const response = await AuthAPI.register(registerData)

			if (response?.success) {
				setShowSuccess(true)

				toast({
					title: 'Muvaffaqiyat!',
					description:
						'Hisob muvaffaqiyatli yaratildi. UstaTop ga xush kelibsiz!',
				})

				// 2 soniyadan keyin login sahifasiga yo'naltirish
				setTimeout(() => {
					router.push('/auth/login')
				}, 2000)
			}
		} catch (error) {
			console.error('Register xatoligi:', error)
			toast({
				title: 'Xatolik',
				description:
					error instanceof Error
						? error.message
						: 'Hisob yaratishda xatolik yuz berdi.',
				variant: 'destructive',
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 relative overflow-hidden'>
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
					className='absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded-full blur-2xl opacity-60'
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
					className='absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-2xl opacity-40'
				/>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20, scale: 0.95 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.5 }}
				className='w-full max-w-lg relative z-10'
			>
				<Card className='border-0 shadow-2xl bg-white/90 backdrop-blur-lg'>
					<CardHeader className='text-center space-y-4'>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
							className='mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg'
						>
							<span className='text-white font-bold text-xl'>UT</span>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<CardTitle className='text-2xl font-bold text-gray-800'>
								Ro'yxatdan O'tish
							</CardTitle>
							<CardDescription className='text-gray-600'>
								UstaTop ga qo'shiling va professional xizmatlardan foydalaning
							</CardDescription>
						</motion.div>
					</CardHeader>

					<CardContent>
						<motion.form
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
							onSubmit={handleSubmit}
							className='space-y-5'
						>
							{/* Ism */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}
								className='space-y-2'
							>
								<Label htmlFor='ism' className='flex items-center gap-2'>
									<User className='h-4 w-4 text-blue-600' />
									To'liq Ism
								</Label>
								<Input
									id='ism'
									placeholder='Ismingizni kiriting'
									value={formData.ism}
									onChange={e =>
										setFormData({ ...formData, ism: e.target.value })
									}
									required
									className='transition-all duration-300 focus:scale-[1.02] border-gray-200 focus:border-blue-500'
								/>
							</motion.div>

							{/* Telefon */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
								className='space-y-2'
							>
								<Label htmlFor='telefon' className='flex items-center gap-2'>
									<Phone className='h-4 w-4 text-green-600' />
									Telefon Raqam
								</Label>
								<Input
									id='telefon'
									type='tel'
									placeholder='+998 90 123 45 67'
									value={formData.telefon}
									onChange={e =>
										setFormData({ ...formData, telefon: e.target.value })
									}
									required
									className='transition-all duration-300 focus:scale-[1.02] border-gray-200 focus:border-green-500'
								/>
							</motion.div>

							{/* Email (ixtiyoriy) */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.7 }}
								className='space-y-2'
							>
								<Label htmlFor='email' className='flex items-center gap-2'>
									<Mail className='h-4 w-4 text-purple-600' />
									Email (ixtiyoriy)
								</Label>
								<Input
									id='email'
									type='email'
									placeholder='email@example.com'
									value={formData.email}
									onChange={e =>
										setFormData({ ...formData, email: e.target.value })
									}
									className='transition-all duration-300 focus:scale-[1.02] border-gray-200 focus:border-purple-500'
								/>
							</motion.div>

							{/* Hudud */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8 }}
								className='space-y-2'
							>
								<Label htmlFor='hudud' className='flex items-center gap-2'>
									<MapPin className='h-4 w-4 text-red-600' />
									Hudud
								</Label>
								<Select
									value={formData.hudud}
									onValueChange={value =>
										setFormData({ ...formData, hudud: value })
									}
								>
									<SelectTrigger className='transition-all duration-300 focus:scale-[1.02] border-gray-200 focus:border-red-500'>
										<SelectValue placeholder='Hududni tanlang' />
									</SelectTrigger>
									<SelectContent>
										{uzbekistanRegions.map(region => (
											<SelectItem key={region} value={region}>
												{region}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</motion.div>

							{/* Parol */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.9 }}
								className='space-y-2'
							>
								<Label htmlFor='parol' className='flex items-center gap-2'>
									<Lock className='h-4 w-4 text-orange-600' />
									Parol
								</Label>
								<div className='relative'>
									<Input
										id='parol'
										type={showPassword ? 'text' : 'password'}
										placeholder='Parol yarating (kamida 6 ta belgi)'
										value={formData.parol}
										onChange={e =>
											setFormData({ ...formData, parol: e.target.value })
										}
										required
										className='pr-10 transition-all duration-300 focus:scale-[1.02] border-gray-200 focus:border-orange-500'
									/>
									<motion.button
										type='button'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<EyeOff className='h-4 w-4' />
										) : (
											<Eye className='h-4 w-4' />
										)}
									</motion.button>
								</div>
							</motion.div>

							{/* Parolni tasdiqlash */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.0 }}
								className='space-y-2'
							>
								<Label
									htmlFor='confirmPassword'
									className='flex items-center gap-2'
								>
									<Lock className='h-4 w-4 text-orange-600' />
									Parolni Tasdiqlang
								</Label>
								<div className='relative'>
									<Input
										id='confirmPassword'
										type={showConfirmPassword ? 'text' : 'password'}
										placeholder='Parolni qaytadan kiriting'
										value={formData.confirmPassword}
										onChange={e =>
											setFormData({
												...formData,
												confirmPassword: e.target.value,
											})
										}
										required
										className='pr-10 transition-all duration-300 focus:scale-[1.02] border-gray-200 focus:border-orange-500'
									/>
									<motion.button
										type='button'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									>
										{showConfirmPassword ? (
											<EyeOff className='h-4 w-4' />
										) : (
											<Eye className='h-4 w-4' />
										)}
									</motion.button>
								</div>
							</motion.div>

							{/* Shartlarga rozilik */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.1 }}
								className='flex items-start space-x-2'
							>
								<Checkbox
									id='terms'
									checked={formData.agreeToTerms}
									onCheckedChange={checked =>
										setFormData({
											...formData,
											agreeToTerms: checked as boolean,
										})
									}
									className='mt-1'
								/>
								<Label
									htmlFor='terms'
									className='text-sm text-gray-600 leading-relaxed'
								>
									Men{' '}
									<Link
										href='/terms'
										className='text-blue-600 hover:underline font-medium'
									>
										Xizmat Shartlari
									</Link>{' '}
									va{' '}
									<Link
										href='/privacy'
										className='text-blue-600 hover:underline font-medium'
									>
										Maxfiylik Siyosati
									</Link>
									ga roziman
								</Label>
							</motion.div>

							{/* Submit button */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2 }}
							>
								<Button
									type='submit'
									className='w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium py-3 transition-all duration-300 transform hover:scale-[1.02]'
									disabled={isLoading}
								>
									{isLoading ? (
										<div className='flex items-center gap-2'>
											<div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
											Hisob yaratilmoqda...
										</div>
									) : (
										"Ro'yxatdan O'tish"
									)}
								</Button>
							</motion.div>
						</motion.form>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.3 }}
							className='mt-6 text-center'
						>
							<p className='text-sm text-gray-600'>
								Hisobingiz bormi?{' '}
								<Link
									href='/auth/login'
									className='text-blue-600 hover:underline font-medium transition-colors'
								>
									Kirish
								</Link>
							</p>
						</motion.div>
					</CardContent>
				</Card>
			</motion.div>

			{/* Success Animation */}
			<AnimatePresence>
				{showSuccess && (
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
					>
						<motion.div
							initial={{ y: 50 }}
							animate={{ y: 0 }}
							className='bg-white rounded-2xl p-8 text-center shadow-2xl'
						>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
								className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4'
							>
								<svg
									className='w-8 h-8 text-white'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M5 13l4 4L19 7'
									/>
								</svg>
							</motion.div>
							<h3 className='text-xl font-bold text-gray-800 mb-2'>
								Muvaffaqiyat!
							</h3>
							<p className='text-gray-600'>Hisob muvaffaqiyatli yaratildi</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
