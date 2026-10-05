import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const authMiddleware = async (req , res , next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        

        if(!authHeader){
            return res.status(401).send({status : 401 , message : "Unauthorized"})
        }

        const token = authHeader.split(" ")[1];
        console.log(token);

         console.log("TOKEN:", token);
        console.log("SECRET:", process.env.JWT_SECRET);

        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log( "decoded token" + decodedToken);
        

        req.user = decodedToken

        next()

        
    } catch (error) {

   error.statuscode = 401;
   next(error)
        
    }
} 