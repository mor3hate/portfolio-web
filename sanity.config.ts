import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
	basePath: '/studio',
	name: 'MICHAEL_CONTENT_STUDIO',
	title: 'michael-portfolio',

	projectId: process.env.PROJECT_ID!,
	dataset: process.env.DATASET!,

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes
	}
})
