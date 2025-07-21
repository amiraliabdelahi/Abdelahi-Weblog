import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";
const prisma = new PrismaClient();

export const getBlogs = async (req: Request, res: Response) => {
   try {
      const data = await prisma.blog.findMany();
      res.json(data);
   } catch (error) {
      res.status(500).json({ message: "Error to find blogs!" });
   }
}
export const deleteBlog = async (req: Request, res: Response) => {
   try {
      await prisma.blog.delete({
         where: {
            id: req.params.id,
         },
      });
      res.status(200).json({ message: "comp!" });
   } catch (error) {
      res.status(500).json({ message: "Error: delete blog failed!" });
   }
}
export const createBlog = async (req: Request, res: Response) => {
   try {
      const { author, body, dataTime, title } = req.body;
      const data = await prisma.blog.create({
         data: {
            author,
            body,
            dataTime,
            title,
         },
      });
      res.json(data);
   } catch (error) {
      res.status(500).json({ message: "Error: create blog failed!" });
   }
}
export const updateBlog = async (req: Request, res: Response) => {
   try {
      const { author, body, dataTime, title } = req.body;
      const data = await prisma.blog.update({
         where: {
            id: req.params.id,
         },
         data: {
            author,
            body,
            dataTime,
            title,
         },
      });
      res.json(data);
   } catch (error) {
      res.status(500).json({ message: "Error: Update blog failed!" });
   }
}