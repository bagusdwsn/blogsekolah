import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'guru',
  title: 'Guru',
  type: 'document',
  fields: [
    defineField({
      name: 'idguru',
      title: 'ID Guru',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tempatlahir',
      title: 'Tempat Lahir',
      type: 'string',
    }),
    defineField({
      name: 'tanggallahir',
      title: 'Tanggal Lahir',
      type: 'date',
    }),
    defineField({
      name: 'tmt',
      title: 'TMT',
      description: 'Terhitung mulai tangal',
      type: 'date',
    }),
    defineField({
      name: 'jabatan',
      title: 'Jabatan',
      type: 'reference',
      to: {type: 'jabatan'},
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
