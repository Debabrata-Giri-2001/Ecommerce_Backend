const Order = require('../model/orderModel');
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require('../utils/errorHnadeler');
const User = require('../model/userModel');

// create new order
exports.newOrder = catchAsyncError(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    })
    res.status(201).json({
        success: true,
        order,
    })
})

//get order - admin
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );
    if (!order) {
        return next(new ErrorHandler("order is not found with this id", 404));
    }

    res.status(201).json({
        success: true,
        order
    })
})
// get  order
exports.getMyOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.find({ user: req.params.id });
    res.status(201).json({
        success: true,
        order
    })
})
