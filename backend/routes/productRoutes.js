const express = require('express');
const { getAllProducts, createProducts, updateProduct, deletProduct, getProductDetails, createProductReview } = require('../controller/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();


router
    .route("/products")
    .get(getAllProducts);
router
    .route("/admin/product/new")
    .post(isAuthenticatedUser, authorizeRoles('admin'), createProducts)
router
    .route("/admin/product/:id")
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deletProduct)
    .get(isAuthenticatedUser, getProductDetails);
    
router.route('/product/:id').get(getAllProducts);

router.route('/products/review').put(isAuthenticatedUser,createProductReview)

module.exports = router;