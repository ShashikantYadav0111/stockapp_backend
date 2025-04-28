import Stock from "../models/stock.model.js";

export const getStocks = async (req,res)=>{
    try {
        const stocks = await Stock.find();
        res.status(200).json(stocks)
        
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

export const addStocks = async (req,res)=>{
    const stocks = req.body;

    if (!Array.isArray(stocks) || stocks.length === 0) {
        return res.status(400).json({ message: 'Input must be a non-empty array of stocks' });
      }
      try {
        const inserted = await Stock.insertMany(stocks);
        res.status(201).json({ message: `${inserted.length} stocks inserted successfully` });
      } catch (err) {
        res.status(500).json({ message: 'Bulk insert failed', error: err.message });
      }
}