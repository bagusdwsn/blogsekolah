import React from "react";
import Head from "next/head";
import { sanityClient, urlFor } from "../sanity";
import Header from "../components/Header";
import PortableText from "react-portable-text";
import { Footer } from "../components";
export const getServerSideProps = async () => {
  const query = `*[_type=="profilsekolah"][0]`;
  const qkamad = `*[_type=="guru"&&jabatan._ref=="07b07dd3-35ad-4e63-8d07-08c0bcca8402"][0]`;
  const qguru = `*[_type=="guru"]|order(idguru asc)`;
  const infoSekolah = await sanityClient.fetch(query);
  const guru = await sanityClient.fetch(qguru);
  const kamad = await sanityClient.fetch(qkamad);
  const kontakQuery = `*[_type=="kontak"][0]`;
  const kontak = await sanityClient.fetch(kontakQuery);
  return {
    props: {
      infoSekolah,
      kamad,
      guru,
      kontak,
    },
  };
};
export default function Profil({ infoSekolah, kamad, guru, kontak }) {
  console.log("GURU IMAGE :", guru.image);
  console.log("BANNER IMAGE :", infoSekolah.banner);
  console.log("GURU FETCH :", guru);
  return (
    <>
      <Head>
        <title>Profil Madrasah</title>
      </Head>
      <main className="scroll-smooth">
        <div>
          <Header data={infoSekolah} />
          <img
            className="w-full h-60 object-cover"
            src={urlFor(infoSekolah.banner).url()}
          />
          <main>
            <nav className="flex flex-col p-10 my-10 bg-sky-300 text-white max-w-2xl mx-auto rounded">
              <h1 className="text-3xl font-bold">Daftar isi</h1>
              <ol className="list-decimal list-inside">
                <li className="">
                  <a className="" href="#profil">
                    Data Madrasah
                  </a>
                </li>
                <li className="">
                  <a className="" href="#sejarah">
                    Sejarah
                  </a>
                </li>
                <li className="">
                  <a className="" href="#visimisi">
                    Visi dan Misi
                  </a>
                </li>
              </ol>
            </nav>

            {/*profil */}
            <div
              id="profil"
              className="flex flex-col p-10 my-10 bg-gray-100 text-black max-w-2xl mx-auto rounded"
            >
              <h1 className="text-3xl font-bold mx-auto">Data Madrasah</h1>
              <img
                className="h-20 w-20 mx-auto"
                src={urlFor(infoSekolah.logo).url()}
                alt=""
              />
              <table className="table-fixed">
                <tbody>
                  <tr>
                    <td>Nama Madrasah</td>
                    <td> : </td>
                    <td> {infoSekolah.namamadrasah} </td>
                  </tr>
                  <tr>
                    <td>NSM</td>
                    <td> : </td>
                    <td> {infoSekolah.nsm} </td>
                  </tr>
                  <tr>
                    <td>NPSN</td>
                    <td> : </td>
                    <td> {infoSekolah.npsn} </td>
                  </tr>
                  <tr>
                    <td>Kepala Madrasah</td>
                    <td> : </td>
                    <td> {kamad.name} </td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td> : </td>
                    <td> {infoSekolah.alamat} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* sejarah */}
            <div className="flex flex-col p-10 my-10 text-black max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mx-auto" id="sejarah">
                Sejarah
              </h3>
              <div className="mt-10">
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  content={infoSekolah.sejarah}
                  serializers={{
                    h1: (props) => (
                      <h1 className="text-2xl font-bold my-5" {...props} />
                    ),
                    h2: (props) => (
                      <h2 className="text-xl font-bold my-5" {...props} />
                    ),
                    li: ({ children }) => (
                      <li className="ml-4 list-disc">{children}</li>
                    ),
                    link: ({ href, children }) => (
                      <a href={href} className="ml-4 list-disc">
                        {children}
                      </a>
                    ),
                  }}
                />
              </div>
            </div>
            {/* visi misi */}
            <div
              id="visimisi"
              className="flex flex-col p-10 my-10 text-black max-w-3xl mx-auto"
            >
              <h3 className="text-3xl font-bold mx-auto">Visi dan Misi</h3>
              <div className="mt-10">
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  content={infoSekolah.visimisi}
                  serializers={{
                    h1: (props) => (
                      <h1 className="text-2xl font-bold my-5" {...props} />
                    ),
                    h2: (props) => (
                      <h2 className="text-xl font-bold my-5" {...props} />
                    ),
                    li: ({ children }) => (
                      <li className="ml-4 list-disc">{children}</li>
                    ),
                    link: ({ href, children }) => (
                      <a href={href} className="ml-4 list-disc">
                        {children}
                      </a>
                    ),
                  }}
                />
              </div>
            </div>
            {/* guru */}
            <div
              id="guru"
              className="flex flex-col p-10 my-10 text-black max-w-5xl mx-auto"
            >
              <h3 className="text-3xl font-bold mx-auto py-3">
                Personalia Guru
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
                {guru.map((g) => (
                  <div key={g.idguru}>
                    <div className="border w-60 rounded-lg group overflow-hidden shadow-lg">
                      <img
                        className="h-60 w-60 object-cover group-hover:scale-105 transition-transform duration-200"
                        src={urlFor(g.image).url()}
                        alt=""
                      />
                      <div className="flex justify-between p-5 bg-white">
                        <div>
                          <p className=" font-bold ">{g.name}</p>
                          <p className="text-xs">TMT : {g.tmt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
        <Footer data={kontak} />
      </main>
    </>
  );
}
