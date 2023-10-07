const express= require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
var cors = require('cors')
const router = require("./Routes/users")
const questionroutes = require("./Routes/questions")
const answerRoutes = require("./Routes/answer")
const app = express()
const env = require('dotenv').config()



mongoose.set('strictQuery',false)
mongoose.connect(process.env.Mongodb_url).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})


const PORT = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/',(req,res)=>{
    res.send("This is a stack over flow clone")
})

//Importing
app.use("/users",router)
app.use('/questions',questionroutes)
app.use('/answer',answerRoutes)

app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})