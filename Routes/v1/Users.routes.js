const express =  require("express");
const { verifyUser, registerUser, loginUser, updateUserInfo, getProfessionalUsers, getProfessionalUserDetails } = require("../../Controllers/Users.controllers");
const router = express.Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('updateInfo/:id').patch(updateUserInfo)
router.route('/verify/:id').patch(verifyUser)
router.route('/professional').get(getProfessionalUsers)
router.route('/professional/:id').get(getProfessionalUserDetails)
// router.route('/password-reset').get(getPasswordReset).post(postPasswordReset)

module.exports = router;