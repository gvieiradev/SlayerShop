const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("User", UsersSchema)