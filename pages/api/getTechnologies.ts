import {
	ITechnologies,
	ITechnologyItem
} from '@/shared/types/technologies.types'
import { NextApiRequest, NextApiResponse } from 'next'
import { techQuery } from '@/shared/queries/queries'
import { client } from '../../sanity.client'

export default async function getTechnologies(
	req: NextApiRequest,
	res: NextApiResponse<ITechnologies>
) {
	const technologies: ITechnologyItem[] = await client.fetch(techQuery)
	res.status(200).json({ technologies })
}
