import Home from '@/screens/home/Home'
import { fetchHelper } from '@/helpers/fetch.helper'
import { ITechnologies } from '@/shared/types/technologies.types'
import { IHome } from '@/screens/home/home.interface'
import { IProjects } from '@/shared/types/projects.types'
import { IAbout } from '@/shared/types/about-me.types'

export default function HomePage({ technologies, projects, about }: IHome) {
	return <Home technologies={technologies} projects={projects} about={about} />
}

export async function getStaticProps() {
	try {
		const { technologies: technologiesData } = await fetchHelper<ITechnologies>(
			'getTechnologies'
		)
		//@ts-ignore
		const technologies = []

		const { projects: projectsData } = await fetchHelper<IProjects>(
			'getProjects'
		)
		//@ts-ignore
		const projects = []

		const { about: aboutData } = await fetchHelper<IAbout>('getAbout')
		//@ts-ignore
		const about = []

		return {
			//@ts-ignore
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
