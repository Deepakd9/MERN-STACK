import blogModel from "../models/blogModel.js";

export const createBlogController = async (req, res) => {
    try {
        const { title, description, image } = req.body
        //validation
        if (!title || !description || !image) {
            return res.status(400).send({
                success: false,
                message: 'Please provide all fields'
            })
        }
        const newBlog = new blogModel({ title, description, image })
        await newBlog.save()
        return res.status(201).send({
            success: true,
            message: 'Blog Created',
            newBlog,
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            message: 'Error while creating blog',
            error
        })
    }
}

