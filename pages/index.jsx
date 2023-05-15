import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { sanityClient, urlFor } from "../sanity";
import Link from "next/link";
export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
  _id,
  title,
  slug,
  guru->{
   name,
   image
  },
  description,
  mainImage,
  slug
}`;
  const heroQuery = `*[_type=="profilsekolah"][0]`;
  const kontakQuery = `*[_type=="kontak"][0]`;
  const posts = await sanityClient.fetch(query);
  const kontak = await sanityClient.fetch(kontakQuery);
  const infoSekolah = await sanityClient.fetch(heroQuery);
  return {
    props: {
      posts,
      infoSekolah,
      kontak,
    },
  };
};
const style =
  "h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in ease-out";
export default function Home({ posts, infoSekolah, kontak }) {
  console.log(posts);
  console.log(infoSekolah);
  console.log(infoSekolah.heading);
  console.log("KONTAK : ", kontak);
  // console.log("POSTS.IMAGE", posts.image);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="xcxTnfQHsWOaJzAecEDuaC5U4ciweS2oq78TMvQnfiM"
        />
        <title>MIM 2 Sidomlangean</title>
      </Head>
      <div className="">
        <Header data={infoSekolah} />

        <HeroSection heroSection={infoSekolah} />
        {/* posts section*/}
        <div className="#" id="berita">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
            {posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="border rounded-lg group cursor-pointer overflow-hidden">
                  <img
                    className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in ease-out"
                    src={urlFor(post.mainImage).url()}
                    alt=""
                  />
                  <div className="flex justify-between p-5 bg-white">
                    <div>
                      <p className="text-lg font-bold ">{post.title}</p>
                      <p className="text-xs">{post.description}</p>
                    </div>
                    <img
                      className="h-12 w-12 rounded-full"
                      src={urlFor(post.guru.image).url()}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer data={kontak} />
    </>
  );
}
