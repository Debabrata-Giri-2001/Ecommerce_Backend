const express = require('express');
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserDetails,
    getAllUserDetails,
    deleteUser,
    updatePassword,
    updateUserRole,
    updateProfile,
    getSingleUser
} = require('../controller/userController');

const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword);
router.route('/current-user').get(isAuthenticatedUser, getUserDetails);
router.route('/password/update/:id').put(isAuthenticatedUser, updatePassword);
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), getAllUserDetails);
router.route('/delete-users/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);
router.route('/update-role/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole);
router.route('/update/profile/:id').put(isAuthenticatedUser, updateProfile)
router.route('/user-details/:id').get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
module.exports = router;
