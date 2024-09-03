const dotenv = require("dotenv");
dotenv.config();
const jwt = require('jsonwebtoken');

// Generate Access Token
const generateAccessToken = (user) => {
    return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
    return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

module.exports = { generateAccessToken, generateRefreshToken };
