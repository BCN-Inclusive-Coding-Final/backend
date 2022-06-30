import { Post } from '../models/Post'

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new Post({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}


