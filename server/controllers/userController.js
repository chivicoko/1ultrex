const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/UserModel');
const nodemailer = require('nodemailer');

// @desc    Register deposit
// @route  POST /api/users
// @access Public
const registerUser = asyncHandler(async(req, res) => {
    const { fullName, username, email, phone, usdt, bnb, bsc, password, password2 } = req.body;
    // console.log(fullName, username, email, phone, usdt, bnb, bsc, password, password2);

    if (!fullName || !username ||  !email || !phone || !usdt || !bnb || !bsc || !password || !password2) {
        res.status(400)
        throw new Error('Please add all fields');
    }

    // check if user exists
    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(400)
        throw new Error('User already exists');
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({fullName, email, password: hashedPassword, username, phone, usdt, bnb, bsc });

    if (user) {
        res.status(201).json({
            _id: user.id,
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            username: user.username,
            phone: user.phone,
            usdt: user.usdt,
            bnb: user.bnb,
            bsc: user.bsc,
            token: generateToken(user._id)
        });

        // Email sending
        let config = {
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        }

        let transporter = nodemailer.createTransport(config);

        // Using raw html to construct the mail message
        let htmlText = `
        <main>
            <header style="background-color: orangered; padding: 30px 50px; text-align: center;">
                <span style="background-color: aliceblue; padding: 35px; border-radius: 50%;">
                    <span style="color: black; font-size: larger; ">U</span>
                    <span style="color: orangered; font-size: larger; ">G</span>
                </span>
            </header>
            <section style="padding: 20px;">
                <h2>UltrexGold Intl.</h2>
                <h3>You are successfully registered. Below are your details</h3>
                <p>Full Name: <strong>${fullName}</strong></p>
                <p>Username: <strong>${username}</strong></p>
                <p>Email Address: <strong>${email}</strong></p>
                <p>Phone Number: <strong>${phone}</strong></p>
                <p>Password: <strong>${password}</strong></p>
                <p>USDT ID: <strong>${usdt || "<em>Nothing was filled</em>"}</strong></p>
                <p>BNB ID: <strong>${bnb || "<em>Nothing was filled</em>"}</strong></p>
                <p>BSC ID: <strong>${bsc || "<em>Nothing was filled</em>"}</strong></p>
            </section>
            <footer><strong>Ultrexgold Intl. <br> <em>Best Wishes!</em></strong></footer>
        </main>
        `

        // The mail container itself
        let message = {
            from:`UltrexGold Intl. 💰 <${process.env.EMAIL}>`,
            to: email,
            subject: "Successfully Registered! 👍",
            html: htmlText
        }

        transporter.sendMail(message);
        // ----------
    } else {
        res.status(400)
        throw new Error('Invalid user data');
    }
});


// @desc    Authenticate a user
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    // check for user email
    const user = await User.findOne({email});

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            username: user.username,
            fullName: user.fullName,
            phone: user.phone,
            usdt: user.usdt,
            bnb: user.bnb,
            bsc: user.bsc,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials');
    }
});


// @desc    Get user data
// @route  GET /api/users/me
// @access Private
const getMe = asyncHandler(async(req, res) => {
    const { _id, fullName, username, phone, usdt, bnb, bsc, email, password } = await User.findById(req.user.id);
    
    res.status(200).json(req.user);
});


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '30d'});
}


module.exports = { registerUser, loginUser, getMe };