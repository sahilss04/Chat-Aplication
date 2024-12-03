import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Database Connection 
import connectDB from './config/db.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


// Mongodb Connection 
connectDB(process.env.DB_URI);


export default app;