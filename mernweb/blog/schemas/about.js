import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
    
    defineField({
      name: 'mainImage',
      title: 'Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    
  },
})
