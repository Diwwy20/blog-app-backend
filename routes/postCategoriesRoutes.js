import express from 'express';
import { adminGuard, authGuard } from '../middleware/authMiddleware';
import { createPostCategory, getAllPostCategories, updatePostCategory, deletePostCategory, getSingleCategory } from '../controllers/postCategoriesControllers';

const router = express.Router();

router.route('/')
    .post(authGuard, adminGuard, createPostCategory)
    .get(getAllPostCategories);

router.route("/:postCategoryId")
    .get(getSingleCategory)
    .put(authGuard, adminGuard, updatePostCategory)
    .delete(authGuard, adminGuard, deletePostCategory);

export default router