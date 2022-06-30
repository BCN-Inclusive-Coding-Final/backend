import { Router } from 'express';

import { signIn, SignUp } from '../controllers/auth.controllers';

const router = Router();

router.post('/signup', SignUp);
router.post('/signin', signIn);

export default router;