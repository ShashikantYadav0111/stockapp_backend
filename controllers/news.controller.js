import News from "../models/news.model.js";

export const getNews = async (req,res)=>{
    try {
        const news = await News.find();
        res.status(200).json(news)
        
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

export const addNews = async (req,res)=>{
    const news = req.body;

    if (!Array.isArray(news) || news.length === 0) {
        return res.status(400).json({ message: 'Input must be a non-empty array of news' });
      }
      try {
        const inserted = await News.insertMany(news);
        res.status(201).json({ message: `${inserted.length} news inserted successfully` });
      } catch (err) {
        res.status(500).json({ message: 'Bulk insert failed', error: err.message });
      }
}