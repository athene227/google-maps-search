// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { limit, place, text, type } = req.query;
  console.log('request', req.query, req.body);
  const url = `${process.env.NEXT_PUBLIC_GEOAPIFY_V1_AUTOCOMPLETE_URL}?type=${type}&text=${text}${place ? "&filter=place:" + place : ""}&limit=${limit}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`;
  console.log('url', url);

  fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((result: GeoJSON.FeatureCollection) => {
      res.status(200).json(result.features);
    })
    .catch((err: Error) => {
      res.status(500).end(err.message);
    })
    .catch((err: Error) => {
      res.status(500).end(err.message);
    });
    
}
