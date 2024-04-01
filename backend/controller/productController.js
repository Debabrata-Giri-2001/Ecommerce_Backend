const Product = require('../model/productsModel')
const Applications = require('../utils/apiFeatures')
const ErrorHandelder = require('../utils/errorHnadeler')

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

        const resultPerPage = 5;
        const filterProduct = new Applications(Product.find(), req.query).searchData().filterData().pagination(resultPerPage);
        const productCount = await Product.countDocuments()
        const products = await filterProduct.query;
        // const products = await Product.find()
        res.status(200).json({
            success: true,
            products: products,
            productCount:productCount
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
        res.status(200).json({succes:true,productDetails:productDetails});
    } catch (error) {
        return next(new ErrorHandelder("Internal Server Error", 500));
    }
};
