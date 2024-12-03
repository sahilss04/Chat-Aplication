import mongoose from 'mongoose';

const uri = process.env.DB_URI || "mongodb+srv://sahilss04:5Sd6yn3eBGyitbh7@instagramdb.whkgo.mongodb.net/?retryWrites=true&w=majority&appName=InstagramDB";


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