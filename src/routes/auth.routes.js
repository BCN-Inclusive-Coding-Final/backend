import { Router } from "express";

import { signin } from "../controllers/auth.controllers";

const router = Router();

router.get('/signin', signin);

export default router;