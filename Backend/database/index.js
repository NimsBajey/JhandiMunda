const mongoose = require('mongoose');
const User = require('../model/userModel');

const connectDb = async()=> {
        await mongoose.connect(process.env.KEY)
        console.log("Database connected.");

        const adminPresence =   await User.findOne({email : "nims22@gmail.com"})

if(!adminPresence){
await User.create({
        playerId : "admin1212",
        email : "nims22@gmail.com",             
        password : "admin",
        role : "admin"
})
console.log("admin seeded");
}
}




module.exports = connectDb