import { Image } from '@/shared/types/image.type'

export interface ITechnologyItem {
	_id: string
	name: string
	progress: string
	image: Image
}

export interface ITechnologies {
	technologies: ITechnologyItem[]
}
