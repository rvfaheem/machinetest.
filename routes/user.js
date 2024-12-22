import express from 'express'
import User from '../models/user.js'

const router=express.Router()

router.post('/add',async(req,res)=>{
    console.log(req.body)
    let newUser=new User(req.body)
    console.log(newUser,'newUser');
    let response=await newUser.save()
    res.json(response)
})

router.get('/view',async(req,res)=>{

    let response=await User.find()
    console.log(response);
    res.json(response)
})

export default router