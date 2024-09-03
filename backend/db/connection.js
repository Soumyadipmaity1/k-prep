const mongoose = require('mongoose');
const dotenv = require("dotenv")  // this is dotenv
dotenv.config();
mongoose.connect(process.env.db_url)
    .then(() => console.log('Connected!')).catch((err) => {
        console.log(err);
        console.log('Error')
    });
    

