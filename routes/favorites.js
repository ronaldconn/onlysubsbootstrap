const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favorites");
const resultsController = require("../controllers/results");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.delete("/deleteFavorite/:id", favoritesController.deleteFavorite);
// router.get('/myfavorites', resultsController.getFavorites)

module.exports = router;
