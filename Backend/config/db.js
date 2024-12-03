import mongoose from 'mongoose';

const connectDB = async (uri) => {
    try {
        const conn = await mongoose.connect(uri);

        console.log(`Connected to Database: ${conn.connections[0].host} Successfully.`)

    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    };
};

export default connectDB;