import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const URL = `mongodb://127.0.0.1:27017/BlogApp`;
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log(`Connected to Mongodb Database`);
    } catch (error) {
        console.log(`Mongo Connect Error`)
    }
}

export default connectDB;