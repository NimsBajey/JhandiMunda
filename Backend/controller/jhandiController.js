exports.userAccess = async(req,res)=>{
    console.log("You are playihng");
    return res.status(200).json({
        message : "working"
    })
}