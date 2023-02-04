import React from "react";
import Head from "next/head";
import { sanityClient } from "../sanity";
import Header from "../components/Header";
import { Footer } from "../components";
export const getServerSideProps = async () => {
  const infoQuery = `*[_type=="profilsekolah"][0]`;
  const prestasiQuery = `*[_type=="prestasi"]|order(idprestasi asc)`;
  const kontakQuery = `*[_type=="kontak"][0]`;
  const kontak = await sanityClient.fetch(kontakQuery);
  const info = await sanityClient.fetch(infoQuery);
  const prestasi = await sanityClient.fetch(prestasiQuery);
  return {
    props: {
      info,
      prestasi,
      kontak,
    },
  };
};
export default function Prestasi({ info, prestasi, kontak }) {
  return (
    <>
      <Head>
        <title>Prestasi Madrasah</title>
      </Head>
      <Header data={info} />
      <div
        id="guru"
        className="flex flex-col p-10 my-10 text-black max-w-5xl mx-auto"
      >
        <h3 className="text-3xl pb-10 font-bold mx-auto">
          Daftar Prestasi Siswa
        </h3>
        <table className="shadow-lg bg-white">
          <thead>
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">No</th>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Nama Siswa
              </th>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Kegiatan
              </th>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Tingkat
              </th>
              <th className="bg-blue-100 border text-left px-8 py-4">Gelar</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Tahun</th>
            </tr>
          </thead>
          {prestasi.map((p) => (
            <tbody key={p._id}>
              <td className="border px-8 py-4">{p.idprestasi}</td>
              <td className="border px-8 py-4">{p.namasiswa}</td>
              <td className="border px-8 py-4">{p.namakegiatan}</td>
              <td className="border px-8 py-4">{p.tingkat}</td>
              <td className="border px-8 py-4">{p.gelar}</td>
              <td className="border px-8 py-4">{p.tahun}</td>
            </tbody>
          ))}
        </table>
      </div>
      <Footer data={kontak} />
    </>
  );
}
