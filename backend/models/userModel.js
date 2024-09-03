const mongoose = require('mongoose');
// import { required } from 'nodemon/lib/config';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
},
    { timestamps: true }
);

const user = mongoose.model('User', userSchema);

module.exports = user;

