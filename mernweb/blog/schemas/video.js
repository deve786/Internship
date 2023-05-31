
// import {defineField, defineType} from 'sanity'

// export default defineType({
//     name: 'video',
//     title: 'Video',
//     type: 'object',
//   fields: [
//     defineField({
//         name: 'title',
//         title: 'Title',
//         type: 'string',
//     }),
//     defineField({
//         name: 'url',
//         title: 'URL',
//         type: 'url',
//       }),
   
   
//   ],
//   preview: {
//     select: {
//       title: 'title',
//       author: 'author.name',
//       media: 'mainImage',
//     },
    
//   },
// })

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'videoFile',
        title: 'Video File',
        type: 'file',
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
