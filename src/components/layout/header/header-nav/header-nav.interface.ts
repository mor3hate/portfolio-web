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
