import { createCurrentUserHook } from "next-sanity";
import createClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2023-01-01",
  useCdn: false,
};
export const sanityClient = createClient(config);
export const urlFor = (source) =>
  createImageUrlBuilder(sanityClient).image(source);
