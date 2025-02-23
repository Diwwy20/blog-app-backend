import express from 'express';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controllers/postControllers';
import { authGuard, adminGuard } from '../middleware/authMiddleware';

const router = express.Router();

router
    .route("/")
    .post(authGuard, adminGuard, createPost)
    .get(getAllPosts);

router
    .route("/:slug")
    .put(authGuard, adminGuard, updatePost)
    .delete(authGuard, adminGuard, deletePost)
    .get(getPost);

export default router