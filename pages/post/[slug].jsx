import React, { useState } from "react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { sanityClient, urlFor } from "../../sanity";
import PortableText from "react-portable-text";
import Head from "next/head";

function Post({ post, infoSekolah }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    fetch("/api/addKomentar", {
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
    console.log("DATA : ", data);
    console.log("DATA TYPE: ", typeof data);
    console.log("STRINGIFIED : ", JSON.stringify(data));
    console.log("STRINGIFIED TYPE : ", typeof JSON.stringify(data));
  };
  console.log(post);

  return (
    <main>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header data={infoSekolah.length && infoSekolah[0]} />
      <img
        className="w-full h-40 object-cover"
        src={urlFor(post.mainImage).url()}
      />
      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
        <h2 className="text-xl font-light text-gray-500 mb-2">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full "
            src={urlFor(post.guru.image)}
            alt=""
          />
          <p className="font-extralight text-sm">
            Ditulis oleh
            <span className="text-blue-600"> {post.guru.name} </span> pada
            {new Date(post._createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
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
      </article>
      <hr className="max-w-lg my-5 mx-auto border border-blue-500" />
      {/* KOLOM KOMENTAR */}
      {submitted ? (
        <div className="flex flex-col p-10 my-10 bg-blue-500 text-white max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">Terima kasih!</h3>
          <p>komentarmu akan muncul setelah disetujui admin</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 max-w-2xl mx-auto mb-10 "
        >
          <h3 className="text-sm text-blue-500">
            punya saran mengenai artikel ini?
          </h3>
          <h4 className="text-3xl font-bold">
            Tinggalkan komentarmu di bawah ya!
          </h4>
          <hr className="py-3 mt-2" />
          <input
            type="hidden"
            name="_id"
            {...register("_id", { required: true })}
            value={post._id}
          />
          <label className="block mb-5">
            <span className="text-gray-700">Nama</span>
            <input
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring ring-blue-500"
              placeholder="isikan nama kamu"
              type="text"
              name="nama"
              {...register("nama", { required: true })}
              id=""
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Email</span>
            <input
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring ring-blue-500"
              placeholder="isikan email kamu"
              type="text"
              name="email"
              {...register("email", { required: true })}
              id=""
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Komentar</span>
            <textarea
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none focus:ring ring-blue-500"
              placeholder="isikan komentar kamu"
              type="text"
              name="komentar"
              {...register("komentar", { required: true })}
              id=""
              rows={8}
            />
          </label>
          <div className="flex flex-col p-5">
            {errors.nama && (
              <span className="text-red-500">- Kolom nama harus diisi</span>
            )}
            {errors.email && (
              <span className="text-red-500">- Kolom email harus diisi</span>
            )}
            {errors.komentar && (
              <span className="text-red-500">- Tuliskan komentarmu ya</span>
            )}
          </div>
          <input
            type="submit"
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            value="Post"
          />
        </form>
      )}
      <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-blue-500 shadow space-y-2">
        <h3 className="text-4xl">Komentar</h3>
        <hr className="pb-2" />
        {post.komentar.map((komentar) => (
          <div key={komentar._id}>
            <p className="">
              <span className="text-blue-500">{komentar.nama}: </span>
              {komentar.komentar}
            </p>
          </div>
        ))}
      </div>
      ;
    </main>
  );
}

export default Post;
export const getStaticPaths = async () => {
  const query = `*[_type=="post"]{
  _id,
  slug{
    current
  }
}`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params }) => {
  const query = `*[_type=="post" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  guru->{
    name,
    jabatan->{
      namajabatan,
    },
    image
  },
  'komentar' :*[
    _type=="komentar" &&
    post._ref == ^._id &&
    approved==true
    ],
    description,
    mainImage,
    slug,
    body
  
}`;
  const q = `*[_type=="profilsekolah"]`;
  const infoSekolah = await sanityClient.fetch(q);
  const post = await sanityClient.fetch(query, { slug: params?.slug });
  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        post,
        infoSekolah,
      },
      revalidate: 60, // update cache setiap 60 detik
    };
  }
};
