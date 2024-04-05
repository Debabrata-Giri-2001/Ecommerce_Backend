const express = require('express');
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, getAllUserDetails } = require('../controller/userController');
const router = express.Router();


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/password/forgot').post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword);
router.route('/current-user').get(getUserDetails);
router.route('/all-users').get(getAllUserDetails);

module.exports = router;
