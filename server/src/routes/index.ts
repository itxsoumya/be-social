import { Router } from "express";
import { isAuthorizedMiddleware, validateLoginDataMiddleware, validateSignupDataMiddleware } from "../middleware";
import handleSignup from "../controllers/handleSignup";
import handleLogin from "../controllers/handleLogin";
import { createPost, getAllPosts } from "../controllers/handlePost";
const router = Router();

router.get('/', (_req, res) => {
  res.send('Welcome Home')
})


router.post('/signup', validateSignupDataMiddleware, handleSignup)
router.post('/login', validateLoginDataMiddleware, handleLogin)
router.post('/post', isAuthorizedMiddleware, createPost)
router.get('/posts', isAuthorizedMiddleware, getAllPosts)

export default router;
