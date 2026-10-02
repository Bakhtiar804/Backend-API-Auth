import express from "express"
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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

const User = mongoose.model('User', userSchema);

export default User;
