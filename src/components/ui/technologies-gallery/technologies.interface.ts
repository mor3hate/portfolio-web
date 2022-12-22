import { ITechnologyItem } from '@/shared/types/technologies.types'

export interface ITechnologyGalleryItem extends Omit<ITechnologyItem, 'image'> {
	imagePath: string
	index?: number
}

export interface ITechnologyGallery {
	gallery: ITechnologyGalleryItem[]
}
