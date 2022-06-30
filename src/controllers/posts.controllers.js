import mongoose from 'mongoose'

import { Post } from '../models/Post'

export const createPost = async (req, res) => {
  const { title, category, state, description, image } = req.body
  const post = { title, category, state, description, image }
  const newPost = new Post({
    post,
    creator: req.userId,
    createdAt: new Date().toISOString()
  })

  try {
    await newPost.save()
    res.status(201).json({ newPost })
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getPost = async (req, res) => {
  const { id } = req.params

  try {
    const post = await Post.findById(id)

    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params
  const { creator, title, category, state, description, image } = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  const updatedPost = { creator, title, category, state, description, image, _id: id }

  await Post.findByIdAndUpdate(id, updatedPost, { new: true })

  res.json(updatedPost)
}

export const deletePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

  await Post.findByIdAndRemove(id)

  res.json({ message: 'Post deleted successfully.' })
}