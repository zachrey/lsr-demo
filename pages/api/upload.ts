// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { setTimeout } from "timers";

export const config = {
  api: {
    bodyParser: false,
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('@@ local request');
  if (req.method === 'POST') {
    setTimeout(() => res.status(200).json({ status: 'success' }), 3000);
  } else {
    res.status(404).json({ code: 404 });
  }
}
