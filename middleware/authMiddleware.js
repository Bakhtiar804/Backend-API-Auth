import jwt from "jsonwebtoken"

export const authMiddleware = async (req , res , next) => {
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).send({status : 401 , message : "Unauthorized"})
        }

        const token = authHeader.split(" ")[1];
        console.log(token);

        const decodedToken = jwt.verify(
            token.
            process.env.JWT_SECRET
        )
        req.user = decodedToken

        next()

        
    } catch (error) {
        res.send({status : 500 , message : error.message})
   
        
    }
} 