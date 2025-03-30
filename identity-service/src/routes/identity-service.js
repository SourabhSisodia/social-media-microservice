import { Router } from 'express';
import {
  registerUser,
  loginUser,
  refreshTokenUser,
  logoutUser,
} from '../controllers/identity-controller.js';

const identityRouter = Router();

identityRouter.post('/register', registerUser);
identityRouter.post('/login', loginUser);
identityRouter.post('/refresh-token', refreshTokenUser);
identityRouter.post('/logout', logoutUser);

export default identityRouter;
