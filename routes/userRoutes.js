import express from "express"
import User from "../models/user.js"
import { addData } from "../controllers/UserController.js";


const routerUser = express.Router();


routerUser.use(express.json())
routerUser.post('/', addData)

routerUser.get('/', async (req, res) => {

    try {
        const user = await User.find();
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })

    }
})

routerUser.get('/:id', async (req, res) => {

    try {
        const id = Number(req.params.id);
        const user = await User.findOne({ id: req.params.id })
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })

    }
})

routerUser.put('/:id', async (req, res) => {

    try {
        const id = Number(req.params.id);
        const user = await User.findOne({ id: id });

        if (!user) {
            return res.status(404).send({ status: 404, message: "User not found" })
        }

        user.email = req.body.email ?? user.email;
        user.name = req.body.name ?? user.name;

        await user.save();

        res.status(200).send({ status: 200, message: "User Updated Successfully" })

    } catch (error) {

        res.status(500).send({
            message: error.message
        })
    }


})


routerUser.delete('/:id' ,async (req , res) => {
    try {
        const id = Number(req.params.id);
        const user = await User.findOne({id : id})

        if(!user){
            res.status(404).send({status : 404 , message : "User not found"})
        }

        await user.deleteOne({id : id});

        res.status(200).send({status : 200 , message : "User deleted successfully"})

    } catch (error) {
        res.status(500).send({status : 500 , message : error.message})
    }
})


export default routerUser;