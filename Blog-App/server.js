import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

//env config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

//PORT
const PORT = process.env.PORT || 8000;

//listen
app.listen(8000, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no. ${PORT}`.bgCyan
      .white
  );
});
