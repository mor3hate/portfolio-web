import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../sanity.client'

const builder = imageUrlBuilder(client)

export const imageBuilder = (source: string) => {
	return builder.image(source).url()
}
