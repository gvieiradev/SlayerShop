const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("users", UsersSchema)