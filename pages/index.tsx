import Home from '@/screens/home/Home'
import { fetchHelper } from '@/helpers/fetch.helper'
import { ITechnologies } from '@/shared/types/technologies.types'
import { IHome } from '@/screens/home/home.interface'
import { IProjects } from '@/shared/types/projects.types'
import { IAbout } from '@/shared/types/about-me.types'
import { ITechnologyGalleryItem } from '@/ui/technologies-gallery/technologies.interface'
import { IProjectContainerItem } from '@/ui/projects-container/projects-interface'
import { IAboutContainerItem } from '@/ui/about-container/about-container.interface'

export default function HomePage({ technologies, projects, about }: IHome) {
	return <Home technologies={technologies} projects={projects} about={about} />
}

export async function getStaticProps() {
	try {
		const { technologies: technologiesData } = await fetchHelper<ITechnologies>(
			'getTechnologies'
		)
		const technologies: ITechnologyGalleryItem[] = technologiesData.map(t => ({
			imagePath: '/icon',
			name: t.name,
			progress: t.progress,
			_id: t._id
		}))

		const { projects: projectsData } = await fetchHelper<IProjects>(
			'getProjects'
		)

		const projects: IProjectContainerItem[] = projectsData.map(p => ({
			imagePath: '/icon',
			_id: p._id,
			technologies: p.technologies,
			title: p.title,
			links: p.links
		}))

		const { about: aboutData } = await fetchHelper<IAbout>('getAbout')

		const about: IAboutContainerItem[] = [
			{
				bio: aboutData[0].bio || [],
				imagePath: '/icon'
			}
		]

		return {
			props: { technologies, projects, about },
			revalidate: 100
		}
	} catch (error) {
		return {
			props: {
				technologies: [],
				projects: [],
				about: []
			}
		}
	}
}
