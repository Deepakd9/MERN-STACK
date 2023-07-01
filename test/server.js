import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import blogModel from './models/blogModel.js';
import blogRoutes from './routes/blogRoutes.js'

//mongo connect
connectDB();

//rest object
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', blogRoutes);


//listen
app.listen(8000, () => {
    console.log(`Server Running on port 8080`);
})