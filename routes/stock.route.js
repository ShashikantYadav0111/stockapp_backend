import express from 'express';
import { addStocks, getStocks } from '../controllers/stock.controller.js';

const router = express.Router();

router.get('/get-all',getStocks);
router.post('/bulk-add',addStocks);

export default router;