'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { useRouter, usePathname, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const languages = [
	{ code: 'uz', name: "O'zbek", flag: '🇺🇿' },
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
]

export function LanguageSwitcher() {
	const [currentLang, setCurrentLang] = useState('uz')
	const router = useRouter()
	const pathname = usePathname()
	const { lng } = useParams()
	const handleLanguageChange = (langCode: string) => {
		setCurrentLang(langCode)
		// In a real app, this would update the locale
		// router.push(`/${langCode}${pathname}`)
	}

	const currentLanguage = languages.find(lang => lang.code === currentLang)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='sm' className='gap-2'>
					<Globe className='h-4 w-4' />
					<span className='hidden sm:inline'>{currentLanguage?.flag}</span>
					<span className='hidden md:inline'>{currentLanguage?.name}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-40'>
				{languages.map(language => (
					<Link href={`/${language.code}`}>
						<DropdownMenuItem
							key={language.code}
							onClick={() => handleLanguageChange(language.code)}
							className='gap-2 cursor-pointer'
						>
							<motion.div
								whileHover={{ scale: 1.1 }}
								className='flex items-center gap-2 w-full'
							>
								<span>{language.flag}</span>
								<span>{language.name}</span>
							</motion.div>
						</DropdownMenuItem>
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
