import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db/connectDb.js';
import stockRoute from './routes/stock.route.js';
import newsRoute from './routes/news.route.js';
dotenv.config();
const PORT = process.env.PORT||5000;
const app = express();

//Database Connection
connectDb();

const corsOptions = {
    origin: ['http://localhost:4200', 'https://taupe-moonbeam-084ad1.netlify.app'], // Allow only these domains
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  };

//Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use('/stock',stockRoute);
app.use('/news',newsRoute);

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})


app.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`)
})
