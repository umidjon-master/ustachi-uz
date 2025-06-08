// API konfiguratsiyasi
export const API_CONFIG = {
	BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
	TIMEOUT: 10000,
	HEADERS: {
		'Content-Type': 'application/json',
	},
}

// Token boshqaruvi
export const TokenManager = {
	getToken: (): string | null => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('ustotop_token')
		}
		return null
	},

	setToken: (token: string): void => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('ustotop_token', token)
		}
	},

	removeToken: (): void => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem('ustotop_token')
		}
	},

	getAuthHeaders: () => {
		const token = TokenManager.getToken()
		return token ? { Authorization: `Bearer ${token}` } : {}
	},
}

// API Response tiplar
export interface ApiResponse<T = any> {
	success: boolean
	message: string
	errors?: any[]
	usta: {
		_id: string | undefined
		ism: string | undefined
		telefon: string | undefined
		email?: string | undefined
	}
	token?: string | undefined

	timestamp?: string
}

export interface PaginatedResponse<T = any> extends ApiResponse<T> {
	sahifa: number
	jamiSahifalar: number
	jamiUstalar?: number
	jamiBuyurtmalar?: number
	jamiIzohlar?: number
}
