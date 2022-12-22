import { IAboutItem } from '@/shared/types/about-me.types'

export interface IAboutContainerItem extends Pick<IAboutItem, 'bio'> {
	imagePath: string
}

export interface IAboutContainer {
	items: IAboutContainerItem[]
}
