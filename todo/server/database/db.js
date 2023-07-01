import mongoose from 'mongoose';


const Connection = () => {

    const MONGODB_URI = 'mongodb://127.0.0.1:27017/todo';

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection; 