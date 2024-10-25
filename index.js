const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');


// routes
const userRoutes = require('./routes/userRoutes');
const adminroutes = require('./routes/adminroutes');
const artworkRoutes = require('./routes/artworkRoutes');


const app = express();
//use routes



// MongoDB connection 
const dbURL = process.env.MONGODBURL;
const Portnum = process.env.PORT_NUM
mongoose
    .connect(dbURL)
    .then(() => {
    console.log("Connected to MongoDB");

    const port = Portnum  ;

    // middlewar
        // app.use(express.json());
        app.use(cors());
        app.use(bodyParser.json());

        app.use((req, res, next) => {
            console.log(`Request received: ${req.method} ${req.path}`);
            next();
        });
        

    // routes
        app.use('/api/user', userRoutes);
        app.use('/api/admin', adminroutes);
        app.use('/api/artwork', artworkRoutes);

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
    })
    .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
    });
