const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        const allowedFile = ['image/png', 'image/jpeg', 'image/jpg']

        if(!allowedFile.includes(file.mimetype)){
            cb(new Error(`${file.mimetype } is not allowed`))
            return
        }
        cb(null , './storage')
    },
    filename : function(req,file,cb){
        cb(null , Date.now() + "-" + file.originalname)
    }
})

module.exports = {
    storage : storage , 
    multer : multer
}