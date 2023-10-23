import { defineField, defineType } from "sanity";


export default defineType({
  name: 'imprint',
  title: 'Legal',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'blockContent'
    }),
  ],
});
