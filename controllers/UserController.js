import User from '../models/user.js';

export const addData = async (req , res) => {
    try {
        
        const lastId = await User.findOne().sort({id : -1});
        const newId = lastId ? lastId.id + 1 : 1;
        await User.create({
            id : newId,
            ...req.body
        })
        res.status(200).send({status : 200 , message : "User added successfully"})
        
    } catch (error) {
        res.status(500).send({status : 500 , message : error.message});
    }
}