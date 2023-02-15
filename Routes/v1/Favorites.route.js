const express = require("express");
const { updateFavorite, getAllFavoritesById, getAllFavoritesByUserId, deleteFavorite } = require("../../Controllers/Favorites.controllers");

const router  = express.Router();
router.route('/').post(updateFavorite)
router.route('/users/:id').get(getAllFavoritesByUserId)
router.route('/:id').get(getAllFavoritesById).delete(deleteFavorite)



module.exports = router;