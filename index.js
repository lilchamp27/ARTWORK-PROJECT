const express = require('express');
const mongoose = require('mongoose')


// MongoDB connection 
const dbURL = process.env.MONGODBURL

mongoose
    .connect(dbUrl)
    .then(() => {
    console.log("Connected to MongoDB");
    const app = express();
    const port = 8080;

    // middleware
        app.use(express.json());
        app.use(cors());
        

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
    })
    .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
    });
