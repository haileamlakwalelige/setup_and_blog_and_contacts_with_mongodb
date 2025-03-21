import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import blogRouter from './routes/blogs.js';
import contactRouter from './routes/contacts.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Get the IP address and port from the .env file
const IP_ADDRESS = process.env.IP_ADDRESS || 'localhost';
const PORT = process.env.PORT || 8800;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb database connected well");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

// Handle MongoDB connection events
mongoose.connection.on('disconnected', () => {
    console.log("MongoDB disconnected! Retrying...");
    connect();
});
mongoose.connection.on('connected', () => {
    console.log("MongoDB connected!");
});

// Routes
app.use('/api/blogs', blogRouter);
app.use('/api/contacts', contactRouter);
app.use(cors());


// Start Server
const startServer = async () => {
    await connect();
    app.listen(8800, () => {
        console.log(`Server running on 8800`)
    });
};

startServer();
