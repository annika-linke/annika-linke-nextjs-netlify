import { defineField, defineType } from "sanity";

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Xing', value: 'xing' },
                  { title: 'LinkedIn', value: 'linkedIn' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'description'
    }),
  ],
});
