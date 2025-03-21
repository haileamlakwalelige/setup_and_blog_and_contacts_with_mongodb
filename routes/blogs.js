import express from "express";
import Blog from "../models/Blog.js";  // ✅ Add .js extension

const router = express.Router();

// Create a new blog
router.post("/", async (req, res) => {
    const newBlog = new Blog(req.body);

    try {
        const savedBlog = await newBlog.save();
        return res.status(201).json(savedBlog);  // ✅ Return success response
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// Update a blog by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a blog by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Blog deleted successfully", deletedBlog });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single blog by ID
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all blogs
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
