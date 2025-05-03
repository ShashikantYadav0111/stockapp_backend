import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  newsUrl: { type: String, required: true },
  date: { type: Date, required: true },
  likes:{type:Number,default:0},
  views:{type:Number,default:0}
});

const News = mongoose.model('News', newsSchema);
export default News;
