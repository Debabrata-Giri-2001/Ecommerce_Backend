const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const { newOrder, getSingleOrder, getMyOrder } = require('../controller/orderController')

router.route('/order/new').post(isAuthenticatedUser, newOrder)

router.route('/order/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getSingleOrder)
router.route('/order/my-order/:id').get(isAuthenticatedUser, getMyOrder)

module.exports = router;