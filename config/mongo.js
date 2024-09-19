const mongoose = require('mongoose')

const dbConnect = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB is connected")
    } catch (error) {
        console.log(error,"DB is not connected")
    }
}

module.exports = {dbConnect}