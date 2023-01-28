import sanityClient from "@sanity/client";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NEXT_NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};
const client = sanityClient(config);
export default async function addKomentar(req, res) {
  // console.log(_id, nama, email, komentar);
  // console.log("REQ BODY : ", req.body);
  // console.log("REQ BODY PARSED: ", JSON.parse(req.body));
  // console.log("TYPE OF PARSE :", typeof JSON.parse(req.body));
  // console.log("TYPE OF EMAIL :", typeof email);

  // const { _id, nama, email, komentar } = JSON.parse(req.body);
  var data = JSON.parse(req.body);
  // const data = JSON.parse(req.body);
  // console.log("DATA _ID", req.body._id);
  console.log(typeof data);
  console.log(data);
  let _id = data._id;
  console.log(typeof _id);
  let nama = data.nama;
  let email = data.email;
  let komentar = data.komentar;
  try {
    // console.log(JSON.parse(req.body));
    await client.create({
      _type: "komentar",
      post: {
        _type: "reference",
        _ref: _id,
      },
      nama,
      email,
      komentar,
    });
    console.log("inserting into sanity");
    // console.log(data._type);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: ":( ada masalah saat mengunggah komentar", err });
  }
  console.log("komentar ditambahkan");
  res
    .status(200)
    .json({ message: ":) terima kasih, komentar anda berhasil ditambahkan" });
}
