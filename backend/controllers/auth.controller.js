// const generatePassword = require("../utils/generatePassword");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const dotenv = require("dotenv");  // this is dotenv
// const sendMail = require("../utils/sendMail");
const { generateAccessToken, generateRefreshToken } = require("../utils/tokenUtils");
dotenv.config();

// Login function
exports.login = async (req, res) => {
    // console.log("first");
    
    
    try {
        const { email, password } = req.body;
        console.log(email, password);
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required." });
        }

        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(401).json({ message: "This email does not exist." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);


            user.refreshToken = refreshToken;
            await user.save();

            return res.status(200).json({ accessToken, refreshToken });




        } else {
            return res.status(401).json({ message: "Invalid credentials." });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

// Add User function
exports.addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: "Name, email, and password are required." });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "This email already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        return res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error." });
    }
};

// Refresh Token function
exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).json({ error: "Refresh token required." });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user || user.refreshToken !== refreshToken) {
            return res.status(403).json({ error: "Invalid refresh token." });
        }

        const newAccessToken = generateAccessToken(user);
        return res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        console.error(error);
        return res.status(403).json({ error: "Invalid or expired refresh token." });
    }
};
