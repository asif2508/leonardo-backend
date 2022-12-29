const Orders = require("../Models/OrdersModel");

module.exports.addOrders = async (req, res) => {
  try {
    const data = req.body;
    const result = await Orders.create(data);
    console.log(result)
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
module.exports.getOrder = async (req, res)=>{
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
}
module.exports.getAllOrders = async (req, res)=>{
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
}
