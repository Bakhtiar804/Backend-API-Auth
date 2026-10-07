import Product from '../models/products.js';

export const addData = async (req , res) => {
    try {
        
        const lastId = await Product.findOne().sort({id : -1});
        const newId = lastId ? lastId.id + 1 : 1;
        await Product.create({
            id : newId,
            ...req.body
        })
        res.status(200).send({status : 200 , message : "Product added successfully"})
        
    } catch (error) {
        next(error);
    }
}