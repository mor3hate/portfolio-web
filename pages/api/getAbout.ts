import { NextApiRequest, NextApiResponse } from 'next'
import { aboutQuery } from '@/shared/queries/queries'
import { client } from '../../sanity.client'
import { IAbout, IAboutItem } from '@/shared/types/about-me.types'

export default async function getAbout(
	req: NextApiRequest,
	res: NextApiResponse<IAbout>
) {
	const about: IAboutItem[] = await client.fetch(aboutQuery)
	res.status(200).json({ about })
}
