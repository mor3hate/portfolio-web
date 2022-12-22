import { Image } from '@/shared/types/image.type'

interface IBio {
	children: IBioChildren[]
}

interface IBioChildren {
	_key: string
	text: string
}

export interface IAboutItem {
	image: Image
	bio: IBio[]
}

export interface IAbout {
	about: IAboutItem[]
}
