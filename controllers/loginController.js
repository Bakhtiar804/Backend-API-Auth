import RegisterApi from "../models/register.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"



export const loginUser = async (req , res) => {
    try {
        const {email , password} = req.body;
        const user = await RegisterApi.findOne({email});
        if(!user){
            return res.status(404).send({status : 404 , message : "User Not Found"});
        }

        const isMatch = await bcrypt.compare(password , user.password);

        if(!isMatch){
          return  res.status(401).send({status : 401 , message : "Invalid credientials"})
        }

        const token = jwt.sign(
            {userId : user.id },
            process.env.JWT_SECRET,
            {expiresIn : "1h"}
        )

        

        res.status(200).json({status : 200 , message : "User login successfully" , token})

       
        

    } catch (error) {
        next(error)
    }
};

