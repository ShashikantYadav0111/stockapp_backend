import express from 'express';
import { addNews, addOneNews, getNews, updateOneNews } from '../controllers/news.controller.js';

const router = express.Router();

router.get('/get-all',getNews);
router.post('/bulk-add',addNews);
router.post('/add-one',addOneNews);
router.post('/update-one',updateOneNews);

export default router;