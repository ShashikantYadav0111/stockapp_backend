import News from "../models/news.model.js";

export const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const addNews = async (req, res) => {
  const news = req.body;

  if (!Array.isArray(news) || news.length === 0) {
    return res
      .status(400)
      .json({ message: "Input must be a non-empty array of news" });
  }
  try {
    const inserted = await News.insertMany(news);
    res
      .status(201)
      .json({ message: `${inserted.length} news inserted successfully` });
  } catch (err) {
    res.status(500).json({ message: "Bulk insert failed", error: err.message });
  }
};
// export const addOneNews = async(req,res) => {
//   const news = req.body;
//   if(!news){
//     return res.status(400).json({ message: 'Input must be a non-empty  news type' });
//   }

//   try {
//     const insertedNews = await News.insertOne(news);
//     if(insertedNews){
//       res.send(200).json({
//         message:'News Inserted Successfully'
//       })
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'insert failed', error: err.message });
//   }

// }
export const addOneNews = async (req, res) => {
  const { title, description, imageUrl, newsUrl } = req.body;
  if (!title || !description || !imageUrl || !newsUrl) {
    return res.status(400).json({ message: "Missing Fields" });
  }
  try {
    const newsItem = {
      title,
      description,
      imageUrl,
      newsUrl,
      date: Date.now(),
    };
    const addedNews = await News.insertOne(newsItem);
    res.status(201).json({ message: `News inserted successfully` });
  } catch (error) {
    res.status(500).json({ message: "Insert failed", error: err.message });
  }
};

export const updateOneNews = async (req, res) => {
  const { id } = req.body;
  try {
    const fetchedNews = await News.findById(id);
    if (!fetchedNews) {
      res.send(400).json({ message: "No news by this ID" });
    }
    fetchedNews.likes++;
    const saved = await fetchedNews.save();;
    if (saved) {
      res.send(200).json({ message: "Updated 1 news" });
    }
  } catch (error) {}
};
