import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routes/user.js'


mongoose.connect('mongodb://127.0.0.1:27017/test4')
    .then(() => console.log('connected!'));

const app = express()
app.use(cors())
app.use(express.json())
app.use('/user',userRouter)

app.listen(4000, ()=>{
    console.log("Server is Running")
})