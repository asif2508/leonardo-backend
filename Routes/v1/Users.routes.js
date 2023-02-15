const express =  require("express");
const { verifyUser, registerUser, loginUser, updateUserInfo, getProfessionalUsers, getProfessionalUserDetails, getPasswordReset, postPasswordReset, getAllProfessionalUsers, deleteUser, getAllUsers } = require("../../Controllers/Users.controllers");
const router = express.Router();
router.route('/all').get(getAllUsers)
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/updateInfo/:id').patch(updateUserInfo).delete(deleteUser)
router.route('/verify/:id').patch(verifyUser)
router.route('/professional').get(getProfessionalUsers)
router.route('/professional/all').get(getAllProfessionalUsers)
router.route('/professional/:id').get(getProfessionalUserDetails)
router.route('/password-reset').patch(getPasswordReset).post(postPasswordReset)
module.exports = router;