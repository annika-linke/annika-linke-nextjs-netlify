import { defineField, defineType } from "sanity";

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {type: 'string', name:'alt', title:'Alt'}
      ]
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent'
    }),
  ],
});
