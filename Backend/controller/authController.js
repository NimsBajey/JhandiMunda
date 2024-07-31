const User = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const sendEmail = require("../services/email")
const multer = require('../middleware/multerConfig');




exports.loginUser = async(req,res)=>{
    const { playerId, password} = req.body

    // const playerId = "nims2022"
    // const password = "12345"


    if(!playerId || !password ){
         return res.status(400).json({
                message : "Enter Player Id and Password"
            })
    }
    //id check
   const userFound = await User.find({playerId : playerId })
    if(userFound.length == 0){
        return  res.status(404).json({
            message : "User not found"
        })
    }

    //password check 
    const passMatch = bcrypt.compareSync(password, userFound[0].password)
    if(passMatch){
       const token =  jwt.sign({
        playerId : userFound[0]._id}, process.env.TOKEN_KEY,{ expiresIn : '30d'});
        res.status(200).json({
            message : "User Login Successful",
            data :  userFound[0]._id, 
            token : token   
        })
    }else{
       res.status(404).json({
            message : "Enter correct Credentials"
        })
    }


}

// exports.registerUser = async(req,res)=>{
//     const {profileImg, playerId, password, email} = req.body
//     await User.create({
//         profileImg,
//         playerId,
//         password: bcrypt.hashSync(password, 10),
//         email
//        })
//        res.status(200).json({
//         message : "user Registered"
//        })
// }

//otp banaune kaam aile lai stagit gariyeko xa. Naya suchana na aaunjel samma yeslai xuney soch ni na rakhnu hola 

//for password
exports.forgotPassword = async(req,res)=>{
    const {email} = req.body
    if(!email){
        return res.status(400).json({
            message : "Please provide email"
        })
    }

    //checking if email is registered or not.
    const userExist = await User.find({email : email})
    console.log(userExist)
    if(userExist.length == 0 ){
        return res.status(404).json({
            message : "Email not registered"
        })
    }

    //sending otp..
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp)
    userExist[0].opt = otp
    await userExist[0].save()
   await sendEmail({
        email : email,        //kun email ma pathaune
        subject : "Your OTP for Jhandi Munda",
        message : `OTP = ${otp}`
    })
    res.status(200).json({
        message : "OTP sent successfully"
    })
}

    //verifying otp
exports.verifyOtp = async(req,res)=>{
    const {email, otp} = req.body;  // user ley haleko
    // console.log(otp);
    if(!email, !otp){
        return res.status(404).json({
            message : "Please provide email"
        })
    }

      // checking if otp is correct or not
      const userExists = await User.find({email : email})
      console.log(userExists[0].otp)

      if(userExists.length == 0){
        return res.status(404).json({
            message : "Email is not registered"
        })
      } 

      if(userExists[0].otp !== otp){
         res.status(400).json({
            message : "Invalid Otp"
        })
      }else{
        userExists[0].otp = undefined
        await userExists[0].save()
        res.status(200).json({
            message : "Otp matched"
        })
      }
}


exports.getData = async(req,res)=>{
    const id = req.params.id
    const data = await User.findById(id)

    res.status(200).json({
       message : "Player found",
        data : data
    })
}

exports.updataBalance = async(req,res)=>{
    const id = req.params.id
  
    // balance = amt (jun aai rako xa frontend bata)
    // player.balance = hamro player ko raheko balance

    const {balance} = req.body
  
    const player = await User.findById(id);
    await User.findByIdAndUpdate(id, {balance : balance}
    )
    res.status(200).json({
        message : " Updated",
        data : id
    })
}
exports.loadBalance = async(req,res)=>{
    const id = req.params.id
    const {balance} = req.body

    const player = await User.findById(id);
    console.log(player.balance)
    var totalBal = balance + player.balance;
    
   await User.findByIdAndUpdate(id, {balance : totalBal}
   )
   res.status(200).json({
       message : " Updated",
       data : id
   })

}

let fileName;
const fs = require("fs")  //for deleting any thing we use this package

exports.registerUser = async(req,res)=>{
    const id = req.params.id
    const {name,playerId,password, email} = req.body
   

    if(!name || !playerId || !password || !email){
        res.status(400).json({
            message : "Enter Everyting"
        })
    }

    if(!req.file){
        fileName = "http://localhost:3000/Baba.png"
    }else{
        fileName = "http://localhost:3000/" + req.file.filename
      }


       await User.create({
        name,
        playerId,
        password :  bcrypt.hashSync(password, 10),
        email ,
        profileImg : fileName
       })
       res.status(200).json({
        message : "User Registered"
       })
}


exports.getAllUsers = async(req,res)=>{

     const users = await User.find()
      res.status(200).json({
        message : "FOund",
        data : users
      })
   
}

exports.updatePlayer = async(req,res)=>{
     const id = req.params.id;
   const {name,playerId,password, email} = req.body;
   const oldData = await User.findById(id); 

   if(req.file){
   fileName = "http://localhost:3000/" + req.file.filename
   console.log(`New image : ${fileName}`)

    // console.log(req.file)  //displays the information of entered information
    console.log(` Old file : ${oldData}`)   // displays the information of old data in object format

    const oldImagePath = oldData.profileImg
    const localhostUrlLength = "http://localhost:3000/".length;
    const newOldImagePath = oldImagePath.slice(localhostUrlLength)
    console.log(newOldImagePath);
    console.log(`This path gets deleted: storage/${newOldImagePath}`);
    fs.unlink(`storage/${newOldImagePath}`, (err)=> {  // helps to delete any file
      if(err)
          console.log(err)
      else  
         console.log("FILE DELETED");  
    })
   }

   await User.findByIdAndUpdate(id, {
    name,playerId,password: bcrypt.hashSync(password, 10), email,
    profileImg : fileName
   });

   res.status(200).json({
    message : "Data has been Updated"
   })
}
