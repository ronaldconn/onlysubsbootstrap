const Favorite = require('../models/Favorites')
const Results = require('../controllers/results')
const { request } = require('http')

module.exports = {
  addFavorite: async (req, res) => {
    
    try {
      console.log(req.body)
      const checking = await Favorite.find({ 
        vin: req.body.vin,
        userId: req.user.id });
      
      console.log(checking)

      if (checking == false){

        await Favorite.create({

          imageUrl: req.body.img,
          year: req.body.year,
          dateDropped: req.body.date,
          yardLocation: req.body.location,
          row: req.body.row,
          vin: req.body.vin,
          make: req.body.make,
          userId: req.user.id
          
        })
        console.log("Favorite has been added!");
        // res.redirect("/results");
      }else {
        console.log("Favorite already added!");
      }
    
    } catch (err) {
      console.log(err);
    }
  },
  getFavorites: async (req, res) => {
		try {
      console.log(req.user._id)
			const favorite = await Favorite.find({
          userId: req.user._id
      });
      await Favorite.remove({ year: null })
			res.render("myfavorites.ejs", { 
        favorite: favorite,
        user: req.user 
      });
      console.log(favorite)
		} catch (err) {
			console.log(err);
		}
  },
  deleteFavorite: async (req, res) => {
		try {
			// Find post by id
			let favorite = await Favorite.findById({ _id: req.params.id });
			// Delete post from db
			await Favorite.remove({ _id: req.params.id });
      // await Favorite.remove({ year: null });
			console.log("Deleted Post");
			res.redirect("/myfavorites");
		} catch (err) {
			res.redirect("/myfavorites");
		}
	}, 
}