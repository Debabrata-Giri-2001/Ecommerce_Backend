const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const crypto = require("crypto");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter your name"],
        maxlength: [30, "can't exceed 30 char"],
        minlength: [4, "name should have grater then  4 char"]
    },
    email: {
        type: String,
        required: [true, "Enter your Email"],
        unique: true,
        validate: [validator.isEmail, "Please enter valid email"]
    },
    password: {
        type: String,
        required: [true, "Enter your password"],
        maxlength: [10, "password max be 8 char"],
        minlength: [6, "password should be grater then 6"],
        select: false,
    },
    phone:{
        type:Number,
        required:[true, "Enter your mobile number"],
        maxlength:[12,"Number max be 12 digits"],
        minlength:[10,"Number min be 10 digits"]
    },
    phone2:{
        type:Number,
        maxlength:[12,"Number max be 12 digits"],
        minlength:[10,"Number min be 10 digits"]
    },
    gender:{
        type:String,
    },
    dob:{
        type:Date,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

// JWT token
userSchema.methods.getJWTToken = function () {
    return JWT.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIER,
    })
}

// compare Password
userSchema.methods.comparePassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
}

// user password reset
userSchema.methods.getResetPasswordToken = function () {

    // generating token
    const resetToken = crypto.randomBytes(20).toString('hex');


    // Hasing and add userSchema
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model('User', userSchema);
