import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { sanityClient, urlFor } from "../sanity";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import { Footer } from "../components";
import { Container } from "postcss";
export const getServerSideProps = async () => {
  const query = `*[_type=="profilsekolah"][0]`;
  const infoSekolah = await sanityClient.fetch(query);
  const kontakQuery = `*[_type=="kontak"][0]`;
  const kontak = await sanityClient.fetch(kontakQuery);
  return {
    props: {
      infoSekolah,
      kontak,
    },
  };
};
const Map = dynamic(() => import("../components/Map.jsx"), {
  loading: () => "Loading...",
  ssr: false,
});
export default function Kunjungi({ infoSekolah, kontak }) {
  return (
    <>
      <Head>
        <title>Kunjungi</title>
      </Head>

      <Header data={infoSekolah} />
      <div className="flex-row mx-auto sm:max-w-m sm:mx-10 w-full h-[100vh] ">
        <Map />
      </div>
      {/* <section className="inline-flex min-h-[600px]"></section> */}
      <Footer data={kontak} />
    </>
  );
}
