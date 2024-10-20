import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRouter from "./app/routes/user.Routes.js";
import {dbConnect} from './config/mongo.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json())

app.use('/api/v1', userRouter)

dbConnect()
app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})