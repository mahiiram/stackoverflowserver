const express= require("express")
const { signup, login } = require("../Controllers/auth.js")
const {getAllUsers, updateProfile} = require("../Controllers/users.js")
const  {auth} = require('../Middleware/auth.js')

const router = express.Router()


router.post('/signup',signup)
router.post('/login',login)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

module.exports = router