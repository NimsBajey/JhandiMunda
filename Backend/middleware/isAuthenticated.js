const isAuthenticated = (req,res,next)=>{
    const token = req.headers.token
    console.log(token)
   if(!token){
    res.status(403).json({
        message : "Please send token"
    })
   }

   jwt.verify(token,process.env.TOKEN_KEY, (err,success)=>{
    if(err){
    res.status(400).json({
        message : 'invalid'
    })
}
    else{
    res.status(200).json({
        message : 'valid'
    })
}
   })

    // next()
}
module.exports= isAuthenticated