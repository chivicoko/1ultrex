const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema(
    {
        fullName: {type: String, required: [true, "Please add your full name"]},
        username: {type: String, required: [true, "can't be blank"]},
        email: {type: String, required: [true, "can't be blank"], unique: true},
        phone: {type: String, required: [true, "can't be blank"]},
        password: {type: String, required: [true, "can't be blank"]},
        usdt: String,
        bnb: String,
        bsc: String,
        userType: String
    },
    { timestamps: true }
)

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;