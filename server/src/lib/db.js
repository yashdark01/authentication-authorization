import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
    try {
        if(!process.env.MONGODB_URI) console.error("url not found", error)
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;