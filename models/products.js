import express from "express"
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique : true
    },

    name: {
       type :  String,
       required : true
    },

    email: {
        type : String,
        required : true,
    },
    
    password: {
        type : Number,
        required : true
    } 
},
    {
        versionKey: false
    })

const Product = mongoose.model('Products', productSchema);

export default Product;
