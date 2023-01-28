import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'komentar',
  title: 'Komentar',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'komentar',
      type: 'text',
    }),
    defineField({
      name: 'post',
      type: 'reference',
      to: {type: 'post'},
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Komentar akan muncul pada laman setelah di approve',
    }),
  ],
})
