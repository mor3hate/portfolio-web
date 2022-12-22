export const checkBrowserDarkMode = () =>
	window.matchMedia('(prefers-color-scheme: dark)').matches
