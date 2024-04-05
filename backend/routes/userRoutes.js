const express = require('express');
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, getAllUserDetails, deleteUser } = require('../controller/userController');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/password/forgot').post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword);
router.route('/current-user').get(isAuthenticatedUser,getUserDetails);
router.route('/all-users').get(isAuthenticatedUser,authorizeRoles('admin'),getAllUserDetails);
router.route('/delete-users/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteUser);

module.exports = router;
