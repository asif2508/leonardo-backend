const User = require("../Models/UserModel");
const { sendEmail, sendPasswordReset } = require("../Utils/sendEmail");

module.exports.registerUser = async (req, res) => {
  try {
    const data = req.body;
    const isAlreadyUser = await User.find({ email: data.email });
    if (isAlreadyUser.length === 0) {
      const result = await User.create(data);
      // console.log(result)
      sendEmail(data.email, data.verification_token, data.surname, result._id)
        .then((response) => {
          console.log(response.message);
          res.status(200).json({
            message: "User Registration Successful",
            data: result,
            status: true,
          });
        })
        .catch((err) => {
          res.status(200).json({
            message: err.message.message,
            data: result,
            status: false,
          });
          console.log(err.message);
        });
    } else {
      res.status(200).json({
        message: "The user already exists!",
        status: false,
      });
    }
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const data = req.body;
    const isValidEmail = await User.find({ email: data.email });
    if (isValidEmail.length > 0) {
      const password = isValidEmail[0].password;
      if (password === data.password) {
        res.status(200).json({
          message: "User Login Successful",
          data: isValidEmail[0],
          status: true,
        });
      } else {
        res.status(200).json({
          message: "Password is Incorrect",
          status: false,
        });
      }
    } else {
      res.status(200).json({
        message: "Invalid User!",
        status: false,
      });
    }
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
};

module.exports.verifyUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = { is_verified: true };
    const verifyUser = await User.findById(id);
    console.log(verifyUser.verification_token == req.body.code);
    if (verifyUser.verification_token == req.body.code) {
      console.log(1);
      const result = await User.findOneAndUpdate(id, updateData);

      res.status(200).json({
        message: "User verified Successfully",
        data: result,
        status: true,
      });
    } else {
      console.log(2);
      res.status(200).json({
        message: "User verification failed",
        status: false,
      });
    }
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
};

module.exports.updateUserInfo = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const result = await User.updateOne(id, updateData);
    res.status(200).json({
      message: "verifyUser",
      data: result,
      status: true,
    });
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
};

module.exports.getProfessionalUserDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findById(id);
    res.status(200).json({
      message: "User info fetched Successful",
      data: result,
      status: true,
    });
  } catch (err) {
    res.status(200).json({
      message: err.message.message,
      status: false,
    });
  }
};

module.exports.getProfessionalUsers = async (req, res) => {
  const { page, limit, expertise } = req.query;
  try {
    if (expertise === "all") {
      const result = await User.find({ type_user: 1 })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
      const count = await User.countDocuments({ type_user: 1 });
      res.status(200).json({
        message: "Professional Users fetched successfully",
        data: result,
        status: true,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
    } else {
      const result = await User.find({ type_user: 1, expertise: expertise })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
      const count = await User.countDocuments({ type_user: 1, expertise: expertise });
      res.status(200).json({
        message: "Professional Users fetched successfully",
        data: result,
        status: true,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
    }
  } catch (err) {
    res.status(200).json({
      message: err.message.message,
      status: false,
    });
  }
};
module.exports.getPasswordReset = async (req, res) => {};

module.exports.postPasswordReset = async (req, res) => {
  try {
    const result = await User.findOne({ email: req.body.email });
    if (result) {
      sendPasswordReset(result.email, result.password, result.name);
      res.status(200).json({
        status: true,
        message:
          "¡Se ha enviado un correo electrónico de recuperación de contraseña a su cuenta!",
      });
    } else {
      res.status(200).json({
        status: false,
        message: "¡Dirección de correo electrónico no válida!",
      });
    }
  } catch (err) {
    res.status(200).json({
      message: err.message.message,
      status: false,
    });
  }
};
