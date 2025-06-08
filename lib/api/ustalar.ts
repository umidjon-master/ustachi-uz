import { apiClient } from './client'
import type { ApiResponse, PaginatedResponse } from './config'
import type { Usta, UstalarFilter, UpdateProfileRequest } from '../../types'

export class UstalarAPI {
	// Barcha ustalarni olish
	static async getUstalar(
		filter: UstalarFilter = {}
	): Promise<PaginatedResponse<{ ustalar: Usta[] }>> {
		try {
			const params = new URLSearchParams()

			if (filter.xizmat) params.append('xizmat', filter.xizmat)
			if (filter.hudud) params.append('hudud', filter.hudud)
			if (filter.reyting) params.append('reyting', filter.reyting.toString())
			if (filter.sahifa) params.append('sahifa', filter.sahifa.toString())
			if (filter.limit) params.append('limit', filter.limit.toString())

			const queryString = params.toString()
			const endpoint = queryString ? `/ustalar?${queryString}` : '/ustalar'

			return (await apiClient.get<{ ustalar: Usta[] }>(endpoint)) as any
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Ustalarni olishda xatolik'
			)
		}
	}

	// Bitta ustani olish
	static async getUsta(id: string): Promise<ApiResponse<{ usta: Usta }>> {
		try {
			return await apiClient.get<{ usta: Usta }>(`/ustalar/${id}`)
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Ustani olishda xatolik'
			)
		}
	}

	// Profil yangilash
	static async updateProfile(
		id: string,
		data: UpdateProfileRequest
	): Promise<ApiResponse<{ usta: Usta }>> {
		try {
			return await apiClient.put<{ usta: Usta }>(`/ustalar/${id}`, data)
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Profilni yangilashda xatolik'
			)
		}
	}

	// Status o'zgartirish
	static async updateStatus(
		id: string,
		status: 'faol' | 'band' | 'offline'
	): Promise<ApiResponse<{ usta: Usta }>> {
		try {
			return await apiClient.put<{ usta: Usta }>(`/ustalar/${id}/status`, {
				status,
			})
		} catch (error) {
			throw new Error(
				error instanceof Error
					? error.message
					: "Statusni o'zgartirishda xatolik"
			)
		}
	}
}
