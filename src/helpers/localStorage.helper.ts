import { checkBrowserDarkMode } from '@/helpers/checkBrowserDarkMode'

export const getStoreLocal = (name: string) => {
	if (typeof window !== 'undefined' && typeof localStorage !== undefined) {
		const ls = localStorage.getItem(name)
		return ls ? JSON.parse(ls) : checkBrowserDarkMode()
	}
}
export const setStoreLocal = (name: string, value: string) => {
	if (typeof window !== 'undefined' && typeof localStorage !== undefined) {
		localStorage.setItem(name, value)
	}
}
