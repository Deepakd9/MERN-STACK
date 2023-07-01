import express from 'express';
import { createBlogController } from '../controllers/blogController.js'

//router object
const router = express.Router()

router.post('/create-blog', createBlogController);



export default router;