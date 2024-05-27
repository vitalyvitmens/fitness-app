import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { title, content, authorId } = req.body
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    })
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ error: 'Произошла ошибка на сервере' })
  }
}
