export interface IHeaderNavItem {
	link: string
	text: string
}

export interface IHeaderNav {
	links: IHeaderNavItem[]
}

export const headerLinks: IHeaderNav = {
	links: [
		{
			link: '/#technologies',
			text: 'Technologies'
		},
		{
			link: '/#projects',
			text: 'Projects'
		},
		{
			link: '/#about-me',
			text: 'About me'
		}
	]
}
