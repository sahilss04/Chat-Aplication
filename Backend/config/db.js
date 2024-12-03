import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
console.log(uri + "Mongo URI");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);

        console.log(`Connected to Database: ${conn.connections[0].name} Successfully.`)

    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    };
};

export default connectDB;