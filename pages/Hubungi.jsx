import React from "react";
import Head from "next/head";
import { sanityClient } from "../sanity";
import Header from "../components/Header";
import { Footer } from "../components";

export const getServerSideProps = async () => {
  const infoQuery = `*[_type=="profilsekolah"][0]`;
  const info = await sanityClient.fetch(infoQuery);
  const kontakQuery = `*[_type=="kontak"][0]`;
  const kontak = await sanityClient.fetch(kontakQuery);
  return {
    props: {
      info,
      kontak,
    },
  };
};
export default function Hubungi({ info, kontak }) {
  return (
    <>
      <Head>
        <title>Hubungi Kami</title>
      </Head>
      <Header data={info} />
      <body className="antialiased">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-sky-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">
                  Hubungi Kami
                </h1>
                <p className="pt-2 text-sky-100 text-sm">
                  Anda dapat meninggalkan pesan untuk kami dengan mengisi
                  formulir berikut.
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="call"
                    className="bg-teal-300 text-lg"
                  ></ion-icon>
                  <span>(+62) {kontak.telepon}</span>
                </div>

                <div className="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="mail"
                    className="text-teal-300 text-xl"
                  ></ion-icon>
                  <span>{kontak.email}</span>
                </div>

                <div className="inline-flex space-x-2 items-center">
                  <ion-icon
                    name="location"
                    className="text-teal-300 text-xl"
                  ></ion-icon>
                  <span>{kontak.alamat}</span>
                </div>
              </div>
              <div className="flex space-x-4 text-lg">
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
              <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                <form action="" className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="" className="text-sm">
                      Nama
                    </label>
                    <input
                      type="text"
                      placeholder="Nama anda"
                      name="nama"
                      id="nama"
                      className="ring ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Alamat Email"
                      name="nama"
                      id="nama"
                      className="ring ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm">
                      Pesan
                    </label>
                    <textarea
                      placeholder="Tuliskan pesan anda disini"
                      rows="4"
                      name="nama"
                      id="nama"
                      className="ring ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <button className="inline-block self-end bg-sky-700 font-bold rounded-lg px-6 py-2 uppercase text-white text-sm">
                    kirim
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
        <Footer data={kontak} />
      </body>
    </>
  );
}
