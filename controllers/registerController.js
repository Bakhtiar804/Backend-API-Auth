import RegisterApi from "../models/register.js";
import bcrypt from "bcrypt"

export const registerUser = async (req, res , next) => {
    console.log(req.body);

    try {
        const { firstName, lastName, email, password } = req.body
        const lastId = await RegisterApi.findOne().sort({ id: -1 });
        const newId = lastId ? lastId.id + 1 : 1;
    
        const hashPassword = await bcrypt.hash(password, 10);


        const user = await RegisterApi.create({
            id: newId,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPassword
        })

        res.status(200).json({ status: 200, message: "User register successfully", user })

    } catch (error) {
        next(error)
    }
}