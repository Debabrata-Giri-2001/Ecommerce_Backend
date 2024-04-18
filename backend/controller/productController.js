const Product = require('../model/productsModel')
const Applications = require('../utils/apiFeatures')
const ErrorHandelder = require('../utils/errorHnadeler')
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require('../utils/errorHnadeler');

// creat products - only for admin
exports.createProducts = async (req, res, next) => {
    req.body.user = req.user.id;
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        return next(new ErrorHandelder(error, 500));
    }
}


exports.getAllProducts = async (req, res) => {
    try {

        const resultPerPage = 10;
        const filterProduct = new Applications(Product.find(), req.query).searchData().filterData().pagination(resultPerPage);
        const productCount = await Product.countDocuments()
        const products = await filterProduct.query;
        // const products = await Product.find()
        res.status(200).json({
            success: true,
            products: products,
            productCount: productCount
        })
    } catch (error) {
        res.status(500).json(error)

    }
}

// update product - only admin
exports.updateProduct = async (req, res) => {
    let id = req.params.id
    try {
        const update = await Product.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true },
            { runValidater: true },
            { useFindAndModify: true }
        )
        res.status(200).json(update)
    } catch (error) {
        res.status(500).json(error)
    }
}

// delet products - only admin
exports.deletProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.findOneAndDelete({ _id: id }, { new: true });
        res.status(200).json({ succes: true, message: "Product Delete 👍" })
    } catch (error) {
        res.status(500).json({ succes: false, error })
    }
}

// get single products details

exports.getProductDetails = async (req, res, next) => {
    const id = req.params.id;
    try {
        const productDetails = await Product.findById(id);
        if (!productDetails) {
            return next(new ErrorHandelder("Product Not Found", 404));
        }
        res.status(200).json({ succes: true, productDetails: productDetails });
    } catch (error) {
        return next(new ErrorHandelder("Internal Server Error", 500));
    }
};

// create review and update
exports.createProductReview = catchAsyncError(async (req, res, next) => {

    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    }
    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    const isReviewed = product.reviews.find((rev) => {
        return rev.user.toString() === req.user._id.toString();
    });

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString()) {
                rev.rating = rating,
                rev.comment = comment;
            }
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    // Calculate the new average rating
    let avg = 0;
    product.reviews.forEach((rev) => {
        avg += Number(rev.rating);
    });
    product.rating = avg / product.numOfReviews;
    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
})

// get all review of a products
exports.getProductReviews = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        succes: true,
        rating: product.rating,
        reviews: product.reviews,
    })
})

// delete review
exports.deleteReview = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.reviewId.toString()
    )
    let avg = 0;

    reviews.forEach((rev) => {
        avg += Number(rev.rating);
    })

    let ratings = 0;

    if (reviews.length === 0) {
        ratings = 0;
    } else {
        ratings = avg / reviews.length;
    }

    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }

    )

    res.status(200).json({
        success: true,
        message: 'Review Delete Succesfully🚮..'
    });
})