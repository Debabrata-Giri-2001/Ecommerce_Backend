const catchAsyncError = require('../middleware/catchAsyncError');
const User = require('../model/userModel')
const ErrorHandelder = require('../utils/errorHnadeler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail')
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
