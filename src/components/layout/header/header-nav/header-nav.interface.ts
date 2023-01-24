import { Dispatch, SetStateAction } from 'react'

export interface IHeaderNavItem {
	link: string
	text: string
	variant?: string
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

export interface IHeaderNav {
	links: Omit<IHeaderNavItem, 'setIsVisible'>[]
	variant: 'inside' | 'outside'
	setIsVisible: Dispatch<SetStateAction<boolean>>
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
