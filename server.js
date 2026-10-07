import express from "express";
import connectDb from "./config/db.js";

import dotenv from "dotenv"
import dns from "node:dns";
import { authRouter } from "./routes/authRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import productRouter from "./routes/productsRoutes.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config()

const PORT = process.env.PORT;

const app = express()

app.use(express.json());
connectDb()

// add data practice

app.use(express.json());
app.use('/api' , productRouter)

//  register user 

app.use(express.json());
app.use('/api/user' , authRouter);


app.use(errorMiddleware);











app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});