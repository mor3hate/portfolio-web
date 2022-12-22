import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          title: 'TechItem',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          title: 'Project Link',
          name: 'projectLink',
          type: 'object',
          fields: [
            {name: 'link', type: 'string', title: 'Link'},
            {name: 'icon', type: 'string', title: 'Icon'},
            {name: 'title', type: 'string', title: 'Title'},
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
