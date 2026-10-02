import express from "express";
import { registerUser } from "../controllers/registerController.js";
import { loginUser } from "../controllers/loginController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import RegisterApi from "../models/register.js";

export const authRouter = express.Router();

// register route
authRouter.use(express.json())
authRouter.post("/register" , registerUser);

// login route
authRouter.use(express.json())
authRouter.post('/login' , loginUser);

// profile route
authRouter.get("/profile" , authMiddleware , async (req , res) => {
    try {
        const user =await RegisterApi.findById(req.user.userId) 
        .select("-password")
        
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send({message : error.message})
    }

})
