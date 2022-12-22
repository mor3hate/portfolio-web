import { useQuery } from '@tanstack/react-query'
import { fetchHelper } from '@/helpers/fetch.helper'
import { ISocialLinkContainer } from '@/ui/social-links-container/social-link.interface'

export const useHeader = () => {
	const queryData = useQuery(
		['get social links'],
		() => fetchHelper<ISocialLinkContainer>('getSocialLinks'),
		{
			select: data => data.links
		}
	)
	return { ...queryData }
}
