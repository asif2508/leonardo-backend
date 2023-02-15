const multer = require("multer");
const path = require("path");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  fileFilter: function (req, file, cb) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
      const error = new Error("Invalid file type");
      error.code = "INVALID_FILE_TYPE";
      return cb(error);
    }
    cb(null, true);
  },
});

module.exports = upload;

// app.post('/upload', upload.single('profilePicture'), (req, res, next) => {
//     if (!req.file) {
//       const error = new Error('Please upload a file');
//       error.code = 'NO_FILE_UPLOADED';
//       return next(error);
//     }
//     res.json({
//       file: req.file
//     });
//   });
  