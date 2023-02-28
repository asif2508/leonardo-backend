const Orders = require("../Models/OrdersModel");

module.exports.addOrders = async (req, res) => {
  try {
    const data = req.body;
    const result = await Orders.create(data);
    console.log(result);
    res.status(200).json({
      message: "Order placed",
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
module.exports.getOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Orders.findById(id);
    res.status(200).json({
      message: "Order fetched Successfully",
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
module.exports.getAllOrders = async (req, res) => {
  try {
    const result = await Orders.find({});
    res.status(200).json({
      message: "Orders fetched Successfully",
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

module.exports.getOrderByUserId = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Orders.find({ id_user: id, sessionStatus: {$in : ["Pending", "Missed", "Canceled"]} }).sort({ createdAt: -1 });
    res.status(200).json({
      message: "Orders fetched Successfully",
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


module.exports.getCompletedOrders = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Orders.find({ id_user: id, sessionStatus: {$in : ["Rated", "Completed", "Pending", "Missed", "Canceled"]} }).sort({updatedAt: -1 ,createdAt: -1 });
    res.status(200).json({
      message: "Orders fetched Successfully",
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

module.exports.deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Orders.findByIdAndDelete(id);
    res.status(200).json({
      message: "Orders fetched Successfully",
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

module.exports.updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log(id)
    const result = await Orders.findByIdAndUpdate(id, data);
    console.log(result)
    res.status(200).json({
      message: "Orders fetched Successfully",
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
