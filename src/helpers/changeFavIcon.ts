import { checkBrowserDarkMode } from '@/helpers/checkBrowserDarkMode'

export const changeFavIcon = (icon: string) => {
	if (typeof window !== 'undefined') {
		const isDark = checkBrowserDarkMode()
		return isDark
			? `/images/favicon-dark/${icon}`
			: `/images/favicon-light/${icon}`
	}
}
