// const express = require('express')

import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"


import connectDB from "./config/db.js";
import testRoutes from './routes/testRoutes.js'
import authRoutes from "./routes/authRoutes.js"
import errorMiddleware from "./middlewares/errorMiddleware.js";
import 'express-async-errors'
import userRoutes from "./routes/userRoutes.js";

dotenv.config()
const app = express()

connectDB();

const PORT = process.env.PORT || 8080
const MODE = process.env.DEV_MODE || 'development'

//routes
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.use('/api/v1/test', testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);


//middleware
app.use(errorMiddleware)

app.listen(PORT, () => {

    console.log(`Node Server Running in ${MODE} on port ${PORT}`);
});

