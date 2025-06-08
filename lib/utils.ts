import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export const sliceText = (text: string, length: number) => {
	return text.length > length ? `${text.slice(0, length)}...` : text
}
