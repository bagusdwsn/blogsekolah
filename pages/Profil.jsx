import React from "react";
import { sanityClient, urlFor } from "../sanity";
import Header from "../components/Header";
import PortableText from "react-portable-text";
import { Footer } from "../components";
export const getServerSideProps = async () => {
  const query = `*[_type=="profilsekolah"]`;
  const qkamad = `*[_type=="guru"&&jabatan._ref=="07b07dd3-35ad-4e63-8d07-08c0bcca8402"]`;
  const qguru = `*[_type=="guru"]|order(idguru asc)`;
  const infoSekolah = await sanityClient.fetch(query);
  const guru = await sanityClient.fetch(qguru);
  const kamad = await sanityClient.fetch(qkamad);
  return {
    props: {
      infoSekolah,
      kamad,
      guru,
    },
  };
};
export default function Profil({ infoSekolah, kamad, guru }) {
  console.log("PROFILE SECTION FETCH : ", infoSekolah);
  console.log("Guru : ", guru);
  console.log("Guru type: ", typeof guru);
  return (
    <main className="scroll-smooth">
      <head>
        <title>Profil Madrasah</title>
      </head>

      <div>
        <Header data={infoSekolah.length && infoSekolah[0]} />
        <img
          className="w-full h-60 object-cover"
          src={urlFor(infoSekolah[0].banner).url()}
        />
        <div>
          <main>
            <nav className="flex flex-col p-10 my-10 bg-blue-300 text-white max-w-2xl mx-auto rounded">
              <h1 className="text-3xl font-bold">Daftar isi</h1>
              <ol className="list-decimal list-inside">
                <li className="">
                  <a className="toc-link toc-link-h3" href="#profil">
                    Profil
                  </a>
                </li>
                <li className="toc-item toc-item-h3">
                  <a className="toc-link toc-link-h3" href="#sejarah">
                    Sejarah
                  </a>
                </li>
                <li className="toc-item toc-item-h3">
                  <a className="toc-link toc-link-h3" href="#visimisi">
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
              <h1 className="text-3xl font-bold mx-auto">Profil Madrasah</h1>
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td>Nama Madrasah</td>
                    <td> : </td>
                    <td> {infoSekolah[0].namamadrasah} </td>
                  </tr>
                  <tr>
                    <td>Logo </td>
                    <td> : </td>
                    <td>
                      <img
                        className="h-20 w-20"
                        src={urlFor(infoSekolah[0].logo).url()}
                        alt=""
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>NSM</td>
                    <td> : </td>
                    <td> {infoSekolah[0].nsm} </td>
                  </tr>
                  <tr>
                    <td>NPSN</td>
                    <td> : </td>
                    <td> {infoSekolah[0].npsn} </td>
                  </tr>
                  <tr>
                    <td>Kepala Madrasah</td>
                    <td> : </td>
                    <td> {kamad[0].name} </td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td> : </td>
                    <td> {infoSekolah[0].alamat} </td>
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
                  content={infoSekolah[0].sejarah}
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
                  content={infoSekolah[0].visimisi}
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
              className="flex flex-col p-10 my-10 text-black max-w-xl mx-auto"
            >
              Guru
              <table className="shadow-lg bg-white">
                <thead>
                  <tr>
                    <th className="bg-blue-100 border text-left px-8 py-4">
                      No
                    </th>
                    <th className="bg-blue-100 border text-left px-8 py-4">
                      Nama
                    </th>
                    <th className="bg-blue-100 border text-left px-8 py-4">
                      Tempat Lahir
                    </th>
                    <th className="bg-blue-100 border text-left px-8 py-4">
                      Tanggal Lahir
                    </th>
                    <th className="bg-blue-100 border text-left px-8 py-4">
                      TMT
                    </th>
                  </tr>
                </thead>
                {guru.map((g) => (
                  <tbody key={g._id}>
                    <td className="border px-8 py-4">{g.idguru}</td>
                    <td className="border px-8 py-4">{g.name}</td>
                    <td className="border px-8 py-4">{g.tempatlahir}</td>
                    <td className="border px-8 py-4">{g.tanggallahir}</td>
                    <td className="border px-8 py-4">{g.tmt}</td>
                  </tbody>
                ))}
              </table>
            </div>
          </main>
          {/* ))} */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
