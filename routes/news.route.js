import express from 'express';
import { addNews, getNews } from '../controllers/news.controller.js';

const router = express.Router();

router.get('/get-all',getNews);
router.post('/bulk-add',addNews);

export default router;