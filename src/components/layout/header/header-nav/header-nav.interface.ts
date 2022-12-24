export interface IHeaderNavItem {
	link: string
	text: string
	variant?: string
}

export interface IHeaderNav {
	links: IHeaderNavItem[]
	variant: 'inside' | 'outside'
}

export const headerLinks: Pick<IHeaderNav, 'links'> = {
	links: [
		{
			link: '/#about-me',
			text: 'About me'
		},
		{
			link: '/#projects',
			text: 'Projects'
		},
		{
			link: '/#technologies',
			text: 'Technologies'
		}
	]
}
