const catchAsyncError = require('../middleware/catchAsyncError');
const User = require('../model/userModel')
const ErrorHandelder = require('../utils/errorHnadeler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const JWT = require('jsonwebtoken')

const crypto = require("crypto");

// register user
exports.registerUser = async (req, res, next) => {
    const { name, email, password, role } = req.body;
    try {
        const user = await User.create({
            name,
            email,
            password,
            avatar: {
                public_id: "this is sample public_id",
                url: "image.url"
            },
            role: role
        })
        sendToken(user, 201, res);
    } catch (error) {
        return next(new ErrorHandelder(error, 500));
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ErrorHandelder("Please Enter Email or Password", 400))
        }
        const user = await User.findOne({ email }).select('+password')
        if (!user) {
            return next(new ErrorHandelder("Invalid Email or Password", 401))
        }

        const isPasswordMatched = await user.comparePassword(password)

        if (!isPasswordMatched) {
            return next(new ErrorHandelder("Invalid Email or Password", 401))
        }

        sendToken(user, 200, res);
    } catch (error) {
        return next(new ErrorHandelder(error, 500));
    }
}

exports.logout = async (req, res, next) => {
    try {

        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        })
        res.status(200).json({
            success: true,
            message: "Logout Sucessfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

// user resetPassword
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return next(new ErrorHandelder('User not found', 404))
    }

    // get reset password Token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
    try {
        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandelder(error.message, 500));
    }

})

// reset Password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(
            new ErrorHandelder("Reset Password Token is invalid or has been expired", 400)
        )
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandelder("Password does not password", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
})

// get self data if login then
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const token = req.cookies.token;
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });
    res.status(200).json({
        success: true,
        user,
    });
});

// get all user details - addmin
exports.getAllUserDetails = async (req, res, next) => {
    try {
        const allUser = await User.find();
        const userCount = await User.countDocuments();
        res.status(200).json({
            success: true,
            users: allUser,
            userCount: userCount
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

// delete user - admin
exports.deleteUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete({ _id: id }, { new: true })
    } catch (error) {
        res.status(500).json(error)
    }
}
