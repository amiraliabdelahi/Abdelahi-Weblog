import cors from "cors";
import express from "express";
import { createBlog, deleteBlog, getBlogs, updateBlog } from "./controller/Blogfunctions";
const app = express();
//Middlewares
app.use(cors());
app.use(express.json());
//Blog Requests
app.get("/blogs", getBlogs);
app.delete("/blogs/:id", deleteBlog);
app.post("/blogs/createBlog", createBlog);
app.put("/blogs/updateBlog/:id", updateBlog);

const PORT = process.env.PORT || 7676;
app.listen(PORT, () => {
  console.log(`Application's trying to listen! ${PORT}`);
});