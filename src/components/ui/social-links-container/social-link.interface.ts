import { SiIconType } from '@/shared/types/icon.types'

export interface ISocialLinkItem {
	link: string
	icon: SiIconType
	title: string
}

export interface ISocialLinkContainer {
	links: ISocialLinkItem[]
}
