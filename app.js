const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const userRouter = require('./app/routes/user.routes');
dotenv.config();


const app = express();
const {dbConnect} = require('./config/mongo');

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.use('/api/v1/user', userRouter)

dbConnect()
app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})