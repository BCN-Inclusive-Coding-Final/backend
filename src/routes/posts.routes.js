import { Router } from 'express';
import { createPost } from '../controllers/posts.controllers';
import {validateToken } from '../middlewares/validate-jwt'

const router = Router();

router.post('/', createPost);


export default router;