import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kontak',
  title: 'Kontak',
  type: 'document',
  fields: [
    defineField({
      name: 'telepon',
      description: 'Masukkan nomor telepon tanpa kode negara, contoh : 852 3456 7892',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'alamat',
      type: 'text',
    }),
    defineField({
      name: 'facebook',
      description: 'Masukkan tautan menuju profil Facebook',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      description: 'Masukkan tautan menuju profil Instagram',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      description: 'Masukkan tautan menuju channel Youtube',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'email',
    },
  },
})
