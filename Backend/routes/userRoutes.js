const router = require("express").Router()
const { multer, storage } = require("../middleware/multerConfig");

const upload = multer({storage: storage})

const {loginUser, registerUser, forgotPassword, verifyOtp, getData, updataBalance,getAllUsers, loadBalance, updatePlayer} = require("../controller/authController")
const { userAccess } = require("../controller/jhandiController")
const isAuthenticated = require("../middleware/isAuthenticated")

    
router.route('/login').post(loginUser)
router.route('/forgotpassword').post(forgotPassword)
router.route('/verifyotp').post(verifyOtp)
router.route('/play').post(isAuthenticated, userAccess)
router.route('/player/:id').get(getData)
router.route('/player/:id').patch(updataBalance)
router.route('/player/:id/balance').patch(loadBalance)
router.route('/register').post(upload.single("profileImg"),registerUser)
router.route('/users').get(getAllUsers)
router.route('/player/:id/update').patch(upload.single("profileImg"), updatePlayer)
module.exports = router