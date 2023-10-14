import express from "express";
import mongoose from "mongoose";
import { PORT,mongoURL } from "./config.js";

const app = express();
const options = {"directConnection":true,"serverSelectionTimeoutMS":2000};

mongoose.connect(mongoURL, options)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
    console.log(`MongoDB Connected at ${mongoURL}`);
}).catch((err) => {
    console.log(`MongoDB Connection Error: ${err.message}`);
})