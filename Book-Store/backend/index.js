import express from "express";
import { MONGO_URL, PORT } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

//Middleware for parsing request Body
app.use(express.json());

//Middleware
//allow all origins with default of cors
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("<h1>welcome to bookstore</h1>");
});

app.use("/books", booksRoute);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listning to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
