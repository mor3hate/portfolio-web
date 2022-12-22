import { Image } from '@/shared/types/image.type'
import { ISocialLinkItem } from '@/ui/social-links-container/social-link.interface'

interface IProjectLink extends ISocialLinkItem {}

export interface IProjectsItem {
	_id: string
	technologies: string[]
	links: IProjectLink[]
	title: string
	image: Image
}

export interface IProjects {
	projects: IProjectsItem[]
}
