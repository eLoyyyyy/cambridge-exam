/**
 * 
 * @name Get Questions
 * @path {GET} /api/questions
 * @response {Object} metadata
 * @response {String} metadata.name
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return
  }

  const questions = Array.from({ length: 10 }, (_, i) => list[i])
  res.status(200).json({ questions });
}
