import { apiClient } from './client'
import { TokenManager, type ApiResponse } from './config'
import type { RegisterRequest, LoginRequest, Usta } from '../../types'

export interface AuthResponse {
	token: string
	usta: Usta
}

export class AuthAPI {
	// Ro'yxatdan o'tish
	static async register(
		data: RegisterRequest
	): Promise<ApiResponse<AuthResponse>> {
		try {
			const response = await apiClient.post<AuthResponse>(
				'/auth/register',
				data
			)

			if (response.success && response?.token) {
				TokenManager.setToken(response?.token)
			}

			return response
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : "Ro'yxatdan o'tishda xatolik"
			)
		}
	}

	// Kirish
	static async login(data: LoginRequest): Promise<ApiResponse<AuthResponse>> {
		try {
			const response = await apiClient.post<AuthResponse>('/auth/login', data)

			if (response.success) {
				TokenManager.setToken(response?.token as string)
			}

			return response
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Kirishda xatolik'
			)
		}
	}

	// Chiqish
	static async logout(): Promise<ApiResponse> {
		try {
			const response = await apiClient.post('/auth/logout')
			TokenManager.removeToken()
			return response
		} catch (error) {
			// Token'ni o'chirib qo'yamiz, server bilan bog'lanish bo'lmasa ham
			TokenManager.removeToken()
			throw new Error(
				error instanceof Error ? error.message : 'Chiqishda xatolik'
			)
		}
	}

	// Token mavjudligini tekshirish
	static isAuthenticated(): boolean {
		return !!TokenManager.getToken()
	}

	// Token olish
	static getToken(): string | null {
		return TokenManager.getToken()
	}
}
