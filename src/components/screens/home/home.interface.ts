import { ITechnologyGalleryItem } from '@/ui/technologies-gallery/technologies.interface'
import { IProjectContainerItem } from '@/ui/projects-container/projects-interface'
import { IAboutContainerItem } from '@/ui/about-container/about-container.interface'

export interface IHome {
	technologies: ITechnologyGalleryItem[]
	projects: IProjectContainerItem[]
	about: IAboutContainerItem[]
}
