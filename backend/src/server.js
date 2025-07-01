import express from "express";
import dotenv from "dotenv";
import {initDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionRoute from "./routes/transactionsRoute.js"

dotenv.config();

// Initialisation
const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(rateLimiter)

// Routes
app.use('/api/transactions',transactionRoute)

// Server
initDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is Running on PORT: ${PORT}`)
    });
});
