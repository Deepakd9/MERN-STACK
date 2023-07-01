import express from "express";
import {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} from "../controllers/blogController.js";

//router object
const router = express.Router();

//routes
router.get("/all-blog", getAllBlogController);

//POST || create blog
router.post("/create-blog", createBlogController);

//PUT || update
router.put("/update-blog/:id", updateBlogController);

//Get || Single Blog Details
router.get("/get-blog/:id", getBlogByIdController);

//DELETE || delete blog
router.delete("/delete-blog/:id", deleteBlogController);

//GET || uer blog
router.get("/user-blog/:id", userBlogController);

export default router;
