import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

},
    {
        versionKey: false
    })

const RegisterApi = mongoose.model("Register", registerSchema);

export default RegisterApi;
