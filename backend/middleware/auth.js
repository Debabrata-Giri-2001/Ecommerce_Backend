const User = require("../model/userModel");
const ErrorHandler = require("../utils/errorHnadeler");
const catchAsyncError = require("./catchAsyncError");
const JWT = require('jsonwebtoken')


exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler('Please Login to access this resorce',404))
    }
    const decodeData = JWT.verify(token,process.env.JWT_SECRET)
    req.user =  await User.findById(decodeData.id);
    next();
})

exports.authorizeRoles = (...roles) => {
    return async (req, res, next) => {        
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role ${req.user.role} is not allowed to access the resource`, 403));
        }
        next();
    };
};

