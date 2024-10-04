import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db';
import morgan from 'morgan';
import { errorResponseHandler, invalidPathHandler } from './middleware/errorHandler';
import cors from 'cors';

// Routes
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import commentRoutes from './routes/commentRoutes';
import postCategoriesRoutes from './routes/postCategoriesRoutes'

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const corsOptions = {
    exposedHeaders: "*"
}

app.use(cors(corsOptions));
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("Server is running...");
});

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/post-categories', postCategoriesRoutes);

// static assets
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(invalidPathHandler);
app.use(errorResponseHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));