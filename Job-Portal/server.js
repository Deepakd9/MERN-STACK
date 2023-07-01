//imports
import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import morgan from 'morgan';
import cors from 'cors'
import errorMiddleware from './middlewares/errorMiddleware.js';

//Dot ENV config
dotenv.config()

//mongodb connection
connectDB();


//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))


//routes
app.use('/test', testRoutes);
app.use('/auth/', authRoutes);

//validation middlware
app.use(errorMiddleware)

//port
const PORT = process.env.PORT || 8000

//listen
app.listen(PORT, () => {
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode on Port no. ${PORT}`.bgMagenta)
})