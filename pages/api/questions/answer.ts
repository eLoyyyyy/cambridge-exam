import { NextApiRequest, NextApiResponse } from "next";

/**
 * 
 * @name Answer Questions
 * @path {POST} /api/questions/answer
 * @response {Object} metadata
 * @response {String} metadata.name
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return
  }
  res.status(200).json({ name: "John Doe" });
}
 