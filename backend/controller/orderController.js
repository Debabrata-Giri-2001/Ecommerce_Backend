const Order = require('../model/orderModel');
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require('../utils/errorHnadeler');
const Product = require('../model/productsModel')

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

// getAllOrders
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find();
    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    })
    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    });
})

// update order status
exports.updateOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found with this Id", 404));
    }

    if (order?.orderStatus === 'Delivered') {
        return next(new ErrorHandler('You have already delivered this order', 404))
    }
    if (order?.orderStatus === 'Shipped') {
        order.orderItems.forEach(async (i) => (
            await updateStock(i.product, i.quantity)
        ))
    }

    order.orderStatus = req.body.status;

    if (req.body.status === 'Delivered') {
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });

    res.status(201).json({
        success: true,
        message: "Update order.."
    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);
    product.stock -= quantity;

    await product.save({ validateBeforeSave: false })
}

exports.deleteOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return next(new ErrorHandler("Order not found with this Id", 404));
    }

    const deleteOrder = await Order.deleteOne({ _id: req.params.id });
    if (deleteOrder.deletedCount == 0) {
        return next(new ErrorHandler("Unable to delete order", 500));
    }
    res.status(200).json({
        success: true,
    });
});
