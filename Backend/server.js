const express = require("express");
const connectDb = require("./database");
const app = express()

const authRoute = require("./routes/userRoutes")

const cors = require('cors'); 
app.use(cors({
  origin : ['http://localhost:5173', 'http://localhost:3000']
}))


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static("./storage/"))

require('dotenv').config()

connectDb();



app.use("", authRoute);

app.listen(process.env.PORT, ()=>{
    console.log("Server connected")
})



// controller ma chai callback functions haru basxa. yesma k garne ta vanney kura hunxa
// routes vanney ma chai we will put router from express. ani yesle chai controller 
// use garxa k garna sakinxa ta vanera