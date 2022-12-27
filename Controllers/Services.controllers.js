const Services = require("../Models/ServicesModel");

module.exports.getService = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Services.find({ id_user: id });
    res.status(200).json({
      message: "User info fetched Successful",
      data: result,
      status: true,
    });
  } catch (err) {
    res.status(200).json({
      message: err,
      status: false,
    });
  }
};

module.exports.getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Services.findById(id);
    res.status(200).json({
      message: "User info fetched Successful",
      data: result,
      status: true,
    });
  } catch (err) {
    res.status(200).json({
      message: err,
      status: false,
    });
  }
};

module.exports.updatedServices = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const result = await User.updateOne(id, updateData);
    res.status(200).json({
      message: "User updated Successful",
      data: result,
      status: true,
    });
  } catch (err) {
    res.status(200).json({
      message: err,
      status: false,
    });
  }
};
