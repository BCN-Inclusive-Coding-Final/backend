import { Post } from '../models/Post'

export const createPost = async (req, res) => {
  const { title, category, state, description, giveOrWant, image, userId} = req.body
  const newPost = new Post({
    title,
    category,
    state,
    description,
    giveOrWant,
    image,
    userId
  })
  try {
    await newPost.save()
    res.status(201).json({newPost})
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}


