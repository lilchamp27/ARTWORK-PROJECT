const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const bcrypt = require('bcryptjs');
require('dotenv').config();
const UserRouter = require('./routes/userRoutes');
//use routes



// MongoDB connection 
const dbURL = process.env.MONGODBURL;
const Portnum = process.env.PORT_NUM
mongoose
    .connect(dbURL)
    .then(() => {
    console.log("Connected to MongoDB");
    const app = express();
    const port = Portnum  ;

    // middlewar
        app.use(express.json());
        app.use(cors());

    // routes
        app.use('/api', UserRouter);

    app.listen(port, () => {
        console.log(`😍😘Server running on http://localhost:${port}`);
    });
    })
    .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
    });
