import { NextApiRequest, NextApiResponse } from 'next'
import { projectsQuery } from '@/shared/queries/queries'
import { client } from '../../sanity.client'
import { IProjects, IProjectsItem } from '@/shared/types/projects.types'

export default async function getProjects(
	req: NextApiRequest,
	res: NextApiResponse<IProjects>
) {
	const projects: IProjectsItem[] = await client.fetch(projectsQuery)
	res.status(200).json({ projects })
}
