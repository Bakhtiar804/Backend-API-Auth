import Product from '../models/products.js';
import cloudinary from '../config/cloudinary.js';
import fs from "fs"

export const addData = async (req, res, next) => {
    try {
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        const uploadResult = await cloudinary.uploader.upload(req.file.path)
        const imageUrl = uploadResult.secure_url;

        
        const lastId = await Product.findOne().sort({ id: -1 });
        const newId = lastId ? lastId.id + 1 : 1;
        await Product.create({
            id: newId,
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            stock: req.body.stock,
            image: imageUrl
        })
        fs.unlinkSync(req.file.path);
        res.status(200).send({ status: 200, message: "Product added successfully" })
        
    } catch (error) {
        next(error);
    }
}