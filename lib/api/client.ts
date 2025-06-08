import { API_CONFIG, TokenManager, type ApiResponse } from './config'

// HTTP Client
class ApiClient {
	private baseURL: string
	private timeout: number

	constructor() {
		this.baseURL = API_CONFIG.BASE_URL
		this.timeout = API_CONFIG.TIMEOUT
	}

	private async request<T = any>(
		endpoint: string,
		options: RequestInit = {}
	): Promise<ApiResponse<T>> {
		const url = `${this.baseURL}${endpoint}`

		const config: RequestInit = {
			...options,
			headers: {
				...API_CONFIG.HEADERS,
				...TokenManager.getAuthHeaders(),
				...options.headers,
			} as HeadersInit,
		}

		// Timeout qo'shish
		const controller = new AbortController()
		const timeoutId = setTimeout(() => controller.abort(), this.timeout)
		config.signal = controller.signal

		try {
			const response = await fetch(url, config)
			clearTimeout(timeoutId)

			const data = await response.json()

			if (!response.ok) {
				throw new Error(
					data.message || `HTTP error! status: ${response.status}`
				)
			}

			return data
		} catch (error) {
			clearTimeout(timeoutId)

			if (error instanceof Error) {
				if (error.name === 'AbortError') {
					throw new Error("So'rov vaqti tugadi")
				}
				throw error
			}

			throw new Error("Noma'lum xatolik yuz berdi")
		}
	}

	async get<T = any>(endpoint: string): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, { method: 'GET' })
	}

	async post<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, {
			method: 'POST',
			body: data ? JSON.stringify(data) : undefined,
		})
	}

	async put<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, {
			method: 'PUT',
			body: data ? JSON.stringify(data) : undefined,
		})
	}

	async delete<T = any>(endpoint: string): Promise<ApiResponse<T>> {
		return this.request<T>(endpoint, { method: 'DELETE' })
	}
}

export const apiClient = new ApiClient()
