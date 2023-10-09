import {defineField, defineType} from 'sanity'

const project = defineType({
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      title: 'Priority', 
      name: 'priority', 
      type: 'number', 
      validation: (Rule) => Rule.required(),
    }),
    defineField({title: 'Project Title', name: 'title', type: 'string'}),
    defineField({title: 'Project Short', name: 'short', type: 'string'}),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({title: 'Year', name: 'year', type: 'string'}),
    defineField({title: 'Technology', name: 'technology', type: 'description'}),
    defineField({title: 'Role', name: 'role', type: 'description'}),
    defineField({title: 'Details', name: 'details', type: 'blockContent'}),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternativ Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'priority',
      media: 'images.0.asset',
    },
  },
  orderings: [
    {
      title: 'Priority',
      name: 'priority',
      by: [{field: 'priority', direction: 'asc'}],
    },
  ],
})

export default project
