const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const favoritesController = require("../controllers/favorites")
const { ensureAuth, ensureGuest } = require("../middleware/auth");
//
const scrapData = require('../middleware/scraper.js') 
const resultsController = require('../controllers/results')
const setupController = require('../controllers/setup')

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

//added
router.get('/api', ensureAuth, resultsController.getApi)
router.post("/favorites", favoritesController.addFavorite);
router.get("/myfavorites", favoritesController.getFavorites);
router.get("/setup", homeController.getSetup);
router.post("/getSearchInfo", setupController.getSearchInfo);

router.get("/deleteFavorite/:id", favoritesController.deleteFavorite);
// router.get("/deleteFavorite/:id", favoritesController.getFavorites);
module.exports = router;
