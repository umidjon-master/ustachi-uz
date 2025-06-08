import { apiClient } from './client'
import type { ApiResponse } from './config'
import type { Xizmat, AddServiceRequest } from '../../types'

export class ServicesAPI {
	// Xizmat qo'shish
	static async addService(
		ustaId: string,
		data: AddServiceRequest
	): Promise<ApiResponse<{ xizmat: Xizmat }>> {
		try {
			return await apiClient.post<{ xizmat: Xizmat }>(
				`/services/${ustaId}`,
				data
			)
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : "Xizmat qo'shishda xatolik"
			)
		}
	}

	// Xizmatni tahrirlash
	static async updateService(
		ustaId: string,
		serviceId: string,
		data: Partial<AddServiceRequest>
	): Promise<ApiResponse<{ xizmat: Xizmat }>> {
		try {
			return await apiClient.put<{ xizmat: Xizmat }>(
				`/services/${ustaId}/${serviceId}`,
				data
			)
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Xizmatni yangilashda xatolik'
			)
		}
	}

	// Xizmatni o'chirish
	static async deleteService(
		ustaId: string,
		serviceId: string
	): Promise<ApiResponse> {
		try {
			return await apiClient.delete(`/services/${ustaId}/${serviceId}`)
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : "Xizmatni o'chirishda xatolik"
			)
		}
	}

	// Usta xizmatlarini olish
	static async getServices(
		ustaId: string
	): Promise<ApiResponse<{ xizmatlar: Xizmat[]; ustaIsmi: string }>> {
		try {
			return await apiClient.get<{ xizmatlar: Xizmat[]; ustaIsmi: string }>(
				`/services/${ustaId}`
			)
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Xizmatlarni olishda xatolik'
			)
		}
	}
}
