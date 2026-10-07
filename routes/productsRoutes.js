import express from "express"
import Product from "../models/products.js"
import { addData } from "../controllers/productsController.js";


const productRouter = express.Router();


productRouter.use(express.json())
productRouter.post('/product', addData)

productRouter.get('/product', async (req, res) => {

    try {
        const product = await Product.find();
        res.json(product)
    } catch (error) {
      next(error)

    }
})

productRouter.get('/product/:id', async (req, res) => {

    try {
        const id = Number(req.params.id);
        const product = await Product.findOne({ id: id})
        res.json(product)
    } catch (error) {
       next(error)

    }
})

productRouter.put('/product/:id', async (req, res) => {

    try {
        const id = Number(req.params.id);
        const product = await Product.findOne({ id: id });

        if (!product) {
            return res.status(404).send({ status: 404, message: "Product not found" })
        }

        product.email = req.body.email ?? product.email;
        product.name = req.body.name ?? product.name;

        await product.save();

        res.status(200).send({ status: 200, message: "Product updated Successfully" })

    } catch (error) {
 next(error)
        
    }


})


productRouter.delete('/product/:id' ,async (req , res) => {
    try {
        const id = Number(req.params.id);
        const product = await Product.findOne({id : id})

        if(!product){
            res.status(404).send({status : 404 , message : "Product not found"})
        }

        await product.deleteOne({id : id});

        res.status(200).send({status : 200 , message : "Product deleted successfully"})

    } catch (error) {
        next(error)
    }
})


export default productRouter;