import sanityClient from '@sanity/client'

export const client = sanityClient({
	projectId: process.env.PROJECT_ID,
	dataset: process.env.DATASET,
	apiVersion: process.env.API_VERSION,
	useCdn: true
})
