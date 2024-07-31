const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name : {
        type : String,
        // required : true
    },
    profileImg: {
        type : String,
        required : false
    },
    playerId : {
        type : String,
        required : [true , "Player Id must be provided"]
    },
    password : {
        type : String,
        required : [true, "Comeon Password is necessary"]
    }, 
    email : {
        type : String, 
        required : true,
        unique : true, 
    },
    role : {
        type : String, 
        enum : ["player", "admin"],
        default : "player"
    },
    balance : {
        type: Number,
        default : 500
    },
    otp : {
        type : Number
    }
})


const User = mongoose.model('User', userSchema)
module.exports = User