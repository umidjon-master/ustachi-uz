import { apiClient } from './client'
import type { ApiResponse, PaginatedResponse } from './config'
import type { Review, AddReviewRequest } from '../../types'

export interface ReviewStats {
	umumiyReyting: number
	jamiIzohlar: number
	reytingTaqsimoti: Array<{
		_id: number
		soni: number
	}>
}

export class ReviewsAPI {
	// Izoh qoldirish
	static async addReview(
		ustaId: string,
		data: AddReviewRequest
	): Promise<ApiResponse<{ izoh: Review }>> {
		try {
			return await apiClient.post<{ izoh: Review }>(`/reviews/${ustaId}`, data)
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Izoh qoldirishda xatolik'
			)
		}
	}

	// Usta haqidagi izohlarni olish
	static async getReviews(
		ustaId: string,
		sahifa = 1,
		limit = 10
	): Promise<PaginatedResponse<{ izohlar: Review[]; reytingStats: any[] }>> {
		try {
			const params = new URLSearchParams()
			params.append('sahifa', sahifa.toString())
			params.append('limit', limit.toString())

			return (await apiClient.get<{ izohlar: Review[]; reytingStats: any[] }>(
				`/reviews/${ustaId}?${params.toString()}`
			)) as any
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Izohlarni olishda xatolik'
			)
		}
	}

	// Usta reyting statistikasi
	static async getReviewStats(
		ustaId: string
	): Promise<ApiResponse<ReviewStats>> {
		try {
			return await apiClient.get<ReviewStats>(`/reviews/usta/${ustaId}/stats`)
		} catch (error) {
			throw new Error(
				error instanceof Error
					? error.message
					: 'Reyting statistikasini olishda xatolik'
			)
		}
	}
}
