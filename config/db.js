import mongoose from "mongoose";
import  dotenv   from "dotenv";

dotenv.config()

async function connectDb() {
    try{

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log(err);
        console.log('Error mongo db');
        
    }
}

export default connectDb;