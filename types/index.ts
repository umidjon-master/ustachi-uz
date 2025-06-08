// API uchun tip ta'riflari

export interface Usta {
	_id: string
	ism: string
	telefon: string
	email?: string
	rasm?: string
	tavsif: string
	tajriba: number
	hudud: string
	xizmatlar: Xizmat[]
	reyting: number
	reytingSoni: number
	status: 'faol' | 'band' | 'offline'
	tasdiqlangan: boolean
	yaratilganSana: string
	lastMessage?: IMessage | undefined
	muted?: boolean
	notificationSound?: undefined
	avatar?: string
}
export interface IError extends Error {
	response: { data: { message: string } }
}

export interface IMessage {
	_id: string
	text: string
	image: string
	reaction: string
	sender: Usta
	receiver: Usta
	createdAt: string
	updatedAt: string
	status: string
}
export interface Xizmat {
	_id: string
	nom: string
	narx: number
	birlik: 'soat' | 'kun' | 'ish'
	tavsif: string
}

export interface Order {
	_id: string
	mijozId: string
	ustaId?: string
	xizmatTuri: string
	tavsif: string
	manzil: string
	telefon: string
	narx?: number
	status:
		| 'yangi'
		| 'qabul_qilindi'
		| 'jarayonda'
		| 'tugallandi'
		| 'bekor_qilindi'
	muddat: string
	rasmlar: string[]
	yaratilganSana: string
	qabulQilinganSana?: string
	tugallanganSana?: string
}

export interface Review {
	_id: string
	ustaId: string
	mijozId: string
	orderId: string
	reyting: number
	izoh: string
	yaratilganSana: string
}

// Request tiplar
export interface RegisterRequest {
	ism: string
	telefon: string
	email?: string
	parol: string
	hudud: string
}

export interface LoginRequest {
	telefon: string
	parol: string
}

export interface UpdateProfileRequest {
	ism?: string
	tavsif?: string
	tajriba?: number
	hudud?: string
	rasm?: string
}

export interface AddServiceRequest {
	nom: string
	narx: number
	birlik: 'soat' | 'kun' | 'ish'
	tavsif?: string
}

export interface AcceptOrderRequest {
	narx: number
}

export interface AddReviewRequest {
	orderId: string
	reyting: number
	izoh?: string
}

// Filter tiplar
export interface UstalarFilter {
	xizmat?: string
	hudud?: string
	reyting?: number
	sahifa?: number
	limit?: number
}

export interface OrdersFilter {
	status?: string
	sahifa?: number
	limit?: number
}

export interface NewOrdersFilter {
	xizmatTuri?: string
	hudud?: string
	sahifa?: number
	limit?: number
}
