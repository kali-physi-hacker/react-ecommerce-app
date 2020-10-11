const express = require('express');
const config = require('./helpers/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Controller Route Imports
const authRouter = require('./controllers/auth.js')
const adminRouter = require('./controllers/admin.js');
const productRouter = require('./controllers/products.js');


// MongoDb Connection Initiation
mongoose.connect(config.MONGODB_URI, config.MONGODB_OPTIONS).then(()=> {
    console.log("Connection to MONGO Atlas Successful");
})
.catch(error => {
    console.log("Connection to MONGO Atlas Failed");
    console.log("=====================================================")
    console.log(error);
    console.log(config.MONGODB_URI)
})

app.use(cors());        // Cross Origin Request Middleware
app.use(express.static('public'));          // Static Files (Files to the public)
app.use(bodyParser.json());

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 1000*60*60*24*14        // Maximum Age of the cookie
//     }
// }));

// Use of Router middlewares Here
app.get('/', (request, response)=> {
    response.sendFile(path.join(__dirname, 'public/build/index.html'))
})
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/products', productRouter);


// Use of custom middlewares here


module.exports = app;

