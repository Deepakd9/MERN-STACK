import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';

//router object
const router = express.Router();

//routes
//Register || Post
router.post('/register', registerController)

//Login || Post
router.post('/login', loginController)

//export
export default router