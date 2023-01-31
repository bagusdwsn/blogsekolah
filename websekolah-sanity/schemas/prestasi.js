import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prestasi',
  title: 'Prestasi',
  type: 'document',
  fields: [
    defineField({
      name: 'idprestasi',
      title: 'ID Prestasi',
      type: 'string',
    }),
    defineField({
      name: 'namasiswa',
      title: 'Nama Siswa',
      type: 'string',
    }),
    defineField({
      name: 'namakegiatan',
      title: 'Nama Kegiatan',
      description: 'Nama perlombaan / kegiatan',
      type: 'string',
    }),
    defineField({
      name: 'tingkat',
      title: 'Tingkat',
      description: 'Tingkat perlombaan / kegiatan',
      type: 'string',
    }),
    defineField({
      name: 'gelar',
      title: 'Gelar',
      type: 'string',
      description: 'Gelar Juara (I,II, III, atau Peserta)',
    }),
    defineField({
      name: 'tahun',
      title: 'Tahun',
      description: 'Tahun diperoleh',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'idprestasi',
      title: 'namasiswa',
    },
  },
})
