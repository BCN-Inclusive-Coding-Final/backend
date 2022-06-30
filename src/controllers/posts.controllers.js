import { Post } from '../models/Post'

export const createPost = async (req, res) => {
  const {title, category, style, description, image} = req.body
  const newPost = new Post({
    title,
    category,
    style,
    description,
    image
  })
  try {
    await newPost.save()
    res.status(201).json({newPost})
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}


