import React, { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { sanityClient } from "../sanity";
import Header from "../components/Header";
import { Footer } from "../components";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
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
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    fetch("/api/kirimPesan", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };
  return (
    <>
      <Head>
        <title>Hubungi Kami</title>
      </Head>
      <Header data={info} />
      <body className="antialiased">
        {submitted ? (
          <div className="relative overflow-hidden flex flex-col z-10 p-10 my-10 bg-sky-700 text-white max-w-2xl mx-auto rounded-xl shadow-lg">
            <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-20 -top-20"></div>
            <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-20 -bottom-20"></div>
            <h3 className=" z-10 relative py-2 font-bold text-4xl tracking-wide">
              Terima kasih!
            </h3>
            <p className="pt-2 z-10 text-sky-100 text-sm">
              Pesanmu telah terkirim, mohon tunggu balasan dari kami.
            </p>
          </div>
        ) : (
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
                    <FaPhone />
                    <span>(+62) {kontak.telepon}</span>
                  </div>

                  <div className="inline-flex space-x-2 items-center">
                    <FaEnvelope />
                    <span>{kontak.email}</span>
                  </div>

                  <div className="inline-flex space-x-2 items-center">
                    <FaMapMarker />
                    <span>{kontak.alamat}</span>
                  </div>
                </div>
                <div className="flex space-x-4 text-lg">
                  <a href={kontak.facebook} target="_blank" rel="noreferrer">
                    <FaFacebook />
                  </a>
                  <a href={kontak.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={kontak.youtube} target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
                <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
                <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    method="post"
                    className="flex flex-col space-y-4"
                  >
                    <div>
                      <label htmlFor="" className="text-sm">
                        Nama
                      </label>
                      <input
                        type="text"
                        placeholder="Nama anda"
                        name="nama"
                        {...register("nama", { required: true })}
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
                        name="email"
                        {...register("email", { required: true })}
                        id="email"
                        className="ring ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="" className="text-sm">
                        Subjek
                      </label>
                      <select
                        {...register("subjek", { required: true })}
                        name="subjek"
                        id="subjek"
                        className="ring ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                      >
                        <option value="Pertanyaan">Pertanyaan</option>
                        <option value="Kritik">Kritik</option>
                        <option value="Saran">Saran</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="" className="text-sm">
                        Pesan
                      </label>
                      <textarea
                        placeholder="Tuliskan pesan anda disini"
                        rows="4"
                        name="pesan"
                        {...register("pesan", { required: true })}
                        id="pesan"
                        className="ring ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                      />
                    </div>
                    <div className="flex flex-col p-5">
                      {errors.nama && (
                        <span className="text-red-500">
                          - Kolom nama harus diisi
                        </span>
                      )}
                      {errors.email && (
                        <span className="text-red-500">
                          - Kolom email harus diisi
                        </span>
                      )}
                      {errors.pesan && (
                        <span className="text-red-500">- Isikan pesan</span>
                      )}
                    </div>
                    <button className="inline-block self-end bg-sky-700 font-bold rounded-lg px-6 py-2 uppercase text-white text-sm">
                      kirim
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer data={kontak} />
      </body>
    </>
  );
}
