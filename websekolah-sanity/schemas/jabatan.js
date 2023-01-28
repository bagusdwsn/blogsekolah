import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jabatan',
  title: 'Jabatan',
  type: 'document',
  fields: [
    defineField({
      name: 'jabatan',
      title: 'Nama Jabatan',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'jabatan',
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: 'jabatan',
    },
  },
})
