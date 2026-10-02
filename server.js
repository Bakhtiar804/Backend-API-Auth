import express from "express";
import connectDb from "./config/db.js";
import routerUser from "./routes/userRoutes.js"
import dotenv from "dotenv"
import dns from "node:dns";
import { authRouter } from "./routes/authRoutes.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config()

const PORT = process.env.PORT;

const app = express()

app.use(express.json());
connectDb()

// add data practice

app.use(express.json());
app.use('/' , routerUser)

//  register user 

app.use(express.json());
app.use('/' , authRouter);














app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});