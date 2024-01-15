import { Router } from "express";
import { validateSignupDataMiddleware } from "../middleware";
import handleSignup from "../controllers/handleSignup";

const router = Router();

router.get('/', (_req, res) => {
  res.send('Welcome Home')
})


router.post('/signup', validateSignupDataMiddleware, handleSignup)

export default router;
