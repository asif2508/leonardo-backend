const Orders = require("../Models/OrdersModel");
const Reviews = require("../Models/ReviewsModel");
const User = require("../Models/UserModel");

module.exports.addRating = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await Reviews.create(data);
    if (result) {
      const professional = await User.findById(data?.to_user);
      const user = await User.findByIdAndUpdate(data?.from_user, {
        rating_given: data?.rating_given,
      });
      const service = await Orders.findByIdAndUpdate(data?.id_order, {
        sessionStatus: "Rated",
      });
      if (professional && user && service) {
        const rating = await User.findByIdAndUpdate(professional?._id, {
          rating_received: professional?.rating_received + 1,
          rating_total: professional?.rating_total + data?.stars,
          punctuation: ( professional?.rating_total + data?.stars) / (professional?.rating_received + 1)
        });
        console.log(rating);
        if (rating) {
          res.status(200).json({
            message: "Reviews Added",
            data: result,
            status: true,
          });
        }
      }
    }
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
};

module.exports.getRatingByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Reviews.find({ to_user: id }).populate('from_user');
    res.status(200).json({
      message: "Reviews fetched Successfully",
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
