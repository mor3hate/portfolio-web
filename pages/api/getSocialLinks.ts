import { NextApiRequest, NextApiResponse } from 'next'
import { socialQuery } from '@/shared/queries/queries'
import { client } from '../../sanity.client'
import {
	ISocialLinkContainer,
	ISocialLinkItem
} from '@/ui/social-links-container/social-link.interface'

export default async function getSocialLinks(
	req: NextApiRequest,
	res: NextApiResponse<ISocialLinkContainer>
) {
	const links: ISocialLinkItem[] = await client.fetch(socialQuery)
	res.status(200).json({ links })
}
