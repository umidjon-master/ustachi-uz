import { apiClient } from './client'
import type { ApiResponse, PaginatedResponse } from './config'
import type {
	Order,
	OrdersFilter,
	NewOrdersFilter,
	AcceptOrderRequest,
} from '../../types'

export class OrdersAPI {
	// Ustaga tegishli buyurtmalarni olish
	static async getOrders(
		filter: OrdersFilter = {}
	): Promise<PaginatedResponse<{ buyurtmalar: Order[] }>> {
		try {
			const params = new URLSearchParams()

			if (filter.status && filter.status !== 'all')
				params.append('status', filter.status)
			if (filter.sahifa) params.append('sahifa', filter.sahifa.toString())
			if (filter.limit) params.append('limit', filter.limit.toString())

			const queryString = params.toString()
			const endpoint = queryString ? `/orders?${queryString}` : '/orders'

			return (await apiClient.get<{ buyurtmalar: Order[] }>(endpoint)) as any
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Buyurtmalarni olishda xatolik'
			)
		}
	}

	// Yangi buyurtmalarni olish
	static async getNewOrders(
		filter: NewOrdersFilter = {}
	): Promise<PaginatedResponse<{ buyurtmalar: Order[] }>> {
		try {
			const params = new URLSearchParams()

			if (filter.xizmatTuri) params.append('xizmatTuri', filter.xizmatTuri)
			if (filter.hudud) params.append('hudud', filter.hudud)
			if (filter.sahifa) params.append('sahifa', filter.sahifa.toString())
			if (filter.limit) params.append('limit', filter.limit.toString())

			const queryString = params.toString()
			const endpoint = queryString
				? `/orders/new?${queryString}`
				: '/orders/new'
			return (await apiClient.get<{ buyurtmalar: Order[] }>(endpoint)) as any
		} catch (error) {
			throw new Error(
				error instanceof Error
					? error.message
					: 'Yangi buyurtmalarni olishda xatolik'
			)
		}
	}

	// Buyurtmani qabul qilish
	static async acceptOrder(
		orderId: string,
		data: AcceptOrderRequest
	): Promise<ApiResponse<{ buyurtma: Order }>> {
		try {
			return await apiClient.post<{ buyurtma: Order }>(
				`/orders/${orderId}/accept`,
				data
			)
		} catch (error) {
			throw new Error(
				error instanceof Error
					? error.message
					: 'Buyurtmani qabul qilishda xatolik'
			)
		}
	}

	// Ishni boshlash
	static async startOrder(
		orderId: string
	): Promise<ApiResponse<{ buyurtma: Order }>> {
		try {
			return await apiClient.post<{ buyurtma: Order }>(
				`/orders/${orderId}/start`
			)
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Ishni boshlashda xatolik'
			)
		}
	}

	// Ishni tugallash
	static async completeOrder(
		orderId: string
	): Promise<ApiResponse<{ buyurtma: Order }>> {
		try {
			return await apiClient.post<{ buyurtma: Order }>(
				`/orders/${orderId}/complete`
			)
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : 'Ishni tugallashda xatolik'
			)
		}
	}

	// Buyurtmalar tarixi
	static async getOrderHistory(
		filter: OrdersFilter = {}
	): Promise<PaginatedResponse<{ buyurtmalar: Order[] }>> {
		try {
			const params = new URLSearchParams()

			if (filter.sahifa) params.append('sahifa', filter.sahifa.toString())
			if (filter.limit) params.append('limit', filter.limit.toString())

			const queryString = params.toString()
			const endpoint = queryString
				? `/orders/history?${queryString}`
				: '/orders/history'

			return (await apiClient.get<{ buyurtmalar: Order[] }>(endpoint)) as any
		} catch (error) {
			throw new Error(
				error instanceof Error
					? error.message
					: 'Buyurtmalar tarixini olishda xatolik'
			)
		}
	}
}
