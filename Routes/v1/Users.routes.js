const express =  require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { verifyUser, registerUser, loginUser, updateUserInfo, getProfessionalUsers, getProfessionalUserDetails, getPasswordReset, postPasswordReset, getAllProfessionalUsers, deleteUser, getAllUsers, uploadProfile } = require("../../Controllers/Users.controllers");
// const upload = require("../../Middlewares/ImageUpload");
const router = express.Router();
router.route('/all').get(getAllUsers)
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/upload-profile/:id').patch(upload.single("image"), uploadProfile)
router.route('/updateInfo/:id').patch(updateUserInfo).delete(deleteUser)
router.route('/verify/:id').patch(verifyUser)
router.route('/professional').get(getProfessionalUsers)
router.route('/professional/all').get(getAllProfessionalUsers)
router.route('/professional/:id').get(getProfessionalUserDetails)
router.route('/password-reset').patch(getPasswordReset).post(postPasswordReset)
module.exports = router;