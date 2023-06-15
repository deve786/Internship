import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from'mongoose';
import authRoutes from './routes/authRoutes.js'
import JWT from 'jsonwebtoken'
import cors from 'cors';

dotenv.config()

const connectDB= async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in MongoDB ${error}`)
    }
}
connectDB();
const app=express();


app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.use('/api/v1/auth', authRoutes)

app.get('/',(req,res)=>{
    res.send("<h1>Hellooo</h1>")
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is Running on ${process.env.DEV_MODE} in ${PORT}`)
})