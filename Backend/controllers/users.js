import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



export const userRegister = ('/', asyncHandler(async(req, res) =>{
    const {name,email} = req.body
   
const salt = await bcrypt.genSalt(10);
const password = await bcrypt.hash(req.body.password, salt);
const user= await User.create({name,email, password})

if (user) {
    const token = jwt.sign({ id: user._id , email: user.email}, process.env.JWT_SECRET, {
                    expiresIn: '30d'
                });
    res.json({
                    id: user._id,
                    name,
                    email,
                    isAdmin: user.isAdmin,
                    token : token
                    
                })
    
}

   
}))


export const userAuth= ('/login', asyncHandler(async (req, res)=> {
    const {email, password} = req.body
    try {
        const user=await User.findOne({email})
        bcrypt.compare(password, user.password, (err, response) => {
            if (response) {
    
                if (user) {
                    const token = jwt.sign({ id: user._id , email: user.email}, process.env.JWT_SECRET, {
                        expiresIn: '30d'
                    });
                    res.json({
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        token : token
                        
                    })
                    
                }else{
                    throw new Error('Invalid email or password')
                    
                }
            }else{
                res.status(401)
                console.error('Invalid email or password')
                res.json('invalid email or password')
                

            }
         }) 


    } catch (error) {
        throw new Error('invalid email or password')
    }
    
    
}))



export const getUser = ('/profile', asyncHandler(async(req, res) =>{
    const user= await User.findById(req.user._id)
    if (user) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
}))