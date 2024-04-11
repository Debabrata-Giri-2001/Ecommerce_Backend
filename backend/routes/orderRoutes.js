const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const {
    newOrder,
    getSingleOrder,
    getMyOrder,
    getAllOrders,
    updateOrder,
    deleteOrder } = require('../controller/orderController')

router.route('/order/new').post(isAuthenticatedUser, newOrder)

// add order_id
router.route('/order/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getSingleOrder)
// add user_id
router.route('/order/my-order/:id').get(isAuthenticatedUser, getMyOrder)
router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles('admin'), getAllOrders)

// updateOrder
router
    .route('/admin/order/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder)
module.exports = router;