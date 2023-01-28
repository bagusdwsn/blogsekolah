import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'profilsekolah',
  title: 'Profil Sekolah',
  type: 'document',
  fields: [
    defineField({
      name: 'namamadrasah',
      title: 'Nama',
      description: 'Nama Madrasah',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'namamadrasah',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'banner',
      title: 'Banner',
      description: 'Foto Header yang akan muncul di beranda web',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'Teks Besar (judul) ',
      type: 'string',
    }),
    defineField({
      name: 'nsm',
      title: 'NSM',
      description: 'Nomor Statistik Madrasah',
      type: 'string',
    }),
    defineField({
      name: 'npsn',
      title: 'NPSN',
      description: 'Nomor Pokok Sekolah Nasional',
      type: 'string',
    }),
    defineField({
      name: 'alamat',
      title: 'Alamat',
      description: 'Nomor Pokok Sekolah Nasional',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sejarah',
      title: 'Sejarah',
      description: 'Sejarah berdirinya Madrasah',
      type: 'blockContent',
    }),
    defineField({
      name: 'visimisi',
      title: 'Visi dan Misi',
      description: 'Visi dan Misi Sekolah',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'namamadrasah',
      media: 'logo',
    },
  },
  // preview: {
  //   select: {
  //     title: 'namamadrasah',
  //     media: 'logo',
  //   },
  // },
})
