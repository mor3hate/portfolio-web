import { IProjectsItem } from '@/shared/types/projects.types'

export interface IProjectContainerItem extends Omit<IProjectsItem, 'image'> {
	imagePath: string
}

export interface IProjectContainer {
	projectContainer: IProjectContainerItem[]
}
