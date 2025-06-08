'use client'

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthAPI } from '@/lib/api/auth'
import { RegisterRequest, Usta } from '@/types'

interface AuthContextType {
	user: Usta | null
	login: (email: string, password: string) => Promise<void>
	logout: () => void
	register: (userData: RegisterRequest) => Promise<void>
	updateProfile: (userData: Partial<Usta>) => Promise<void>
	isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}

export function Providers({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<Usta | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		try {
			const storedUser = localStorage.getItem('user')
			if (storedUser && storedUser !== 'undefined') {
				setUser(JSON.parse(storedUser))
			}
		} catch (error) {
			console.error('Failed to parse user from localStorage:', error)
			localStorage.removeItem('user') // Подчищаем за собой
		}
		setIsMounted(true)
	}, [])

	const login = async (email: string, password: string) => {
		setIsLoading(true)
		await new Promise(resolve => setTimeout(resolve, 1000))

		const data = {
			telefon: email,
			parol: password,
		}

		const response = await AuthAPI.login(data)
		console.log(response)
		if (response?.usta) {
			setUser(response?.usta as Usta)
			localStorage.setItem('user', JSON.stringify(response?.usta))
		}
		setIsLoading(false)
	}

	const logout = () => {
		setUser(null)
		localStorage.removeItem('user')
	}

	const register = async (userData: RegisterRequest) => {
		setIsLoading(true)
		await new Promise(resolve => setTimeout(resolve, 1500))

		const newUserResponse = await AuthAPI.register(userData)
		if (newUserResponse?.usta) {
			setUser(newUserResponse?.usta as Usta)
			localStorage.setItem('user', JSON.stringify(newUserResponse.usta))
		}
		setIsLoading(false)
	}

	const updateProfile = async (userData: Partial<Usta>) => {
		if (user) {
			const updatedUser = { ...user, ...userData }
			setUser(updatedUser)
			localStorage.setItem('user', JSON.stringify(updatedUser))
		}
	}

	if (!isMounted) {
		// Можно вернуть просто null или <div>Loading...</div>
		return null
	}

	return (
		<ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
			<AuthContext.Provider
				value={{ user, login, logout, register, updateProfile, isLoading }}
			>
				{children}
			</AuthContext.Provider>
		</ThemeProvider>
	)
}
