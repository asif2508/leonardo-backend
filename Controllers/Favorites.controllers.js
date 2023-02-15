const { default: mongoose } = require("mongoose");
const favorites = require("../Models/FavoritesModel");
const User = require("../Models/UserModel");
const { objectId } = mongoose.Schema.Types;
module.exports.updateFavorite = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    console.log(updateData);
    const data = await favorites.findOne({
      id_user: id,
      id_professional: updateData?.id_professional,
    });
    if (data) {
      res.status(200).json({
        message: "Already Exists",
        data: null,
        status: false,
      });
    } else {
      const result = await favorites.create(updateData);
      // console.log(result);
      res.status(200).json({
        message: "favorites updated successfully",
        data: result,
        status: true,
      });
    }
  } catch (err) {
    res.status(200).json({
      message: err.message,
      status: false,
    });
  }
};

module.exports.getAllFavoritesById = async (req, res) => {
  try {
    const id = req.params.id.split(",");
    // console.log(id)
    const result = await favorites.findOne({
      id_user: id[0],
      id_professional: id[1],
    });
    if (result) {
      res.status(200).json({
        message: "favorites fetched Successful",
        data: result,
        status: true,
      });
    } else {
      res.status(200).json({
        message: "favorites not found",
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

module.exports.getAllFavoritesByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await favorites.find({ id_user: id });
    // console.log(data)
    if (data) {
      const userIds = [];
      for (const i of data) {
        userIds.push(i.id_professional);
      }
      const promises = userIds.map((userId) => {
        return User.findById(userId).exec();
      });

      Promise.all(promises)
        .then((users) => {
          res.status(200).json({
            message: "favorites fetched successfully",
            data: users,
            status: false,
          });
        })
        .catch((err) => res.status(500).send("Error retrieving users"));
    } else {
      res.status(200).json({
        message: "Failed to fetch",
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

module.exports.deleteFavorite = async (req, res) =>{
  try {
    const id = req.params.id.split(",");
    const result = await favorites.findOneAndDelete({id_user: id[0],
      id_professional: id[1]});
    if (result) {
      res.status(200).json({
        status: true,
        result: result,
        message: "Favorite Deleted Successfully",
      });
    } else {
      res.status(200).json({
        status: false,
        message: "Failed to delete the Favorite",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: false,
      message: error.message,
    });
  }
}