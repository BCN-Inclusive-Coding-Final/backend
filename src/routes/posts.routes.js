import { Router } from 'express';
import { createPost, getPost, getPosts, updatePost, deletePost } from '../controllers/posts.controllers';
import {validateToken } from '../middlewares/validate-jwt'

const router = Router();

router.post('/', createPost);
router.get('/', validateToken, getPosts);
router.get('/:id', validateToken, getPost);
router.patch('/:id', validateToken, updatePost);
router.delete('/:id', validateToken, deletePost);

export default router;