const mongoose = require('mongoose')

const dbConnect = async () =>{
    try {
        const MONGO_URL = process.env.MONGO_URL
        await mongoose.connect(MONGO_URL)
        console.log("DB is connected")
    } catch (error) {
        console.log(error,"DB is not connected")
    }
}

module.exports = {dbConnect}