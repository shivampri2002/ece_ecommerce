import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import { projectId, dataset, apiVersion, token } from "../src/sanity/env";

export const client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
  token: token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);