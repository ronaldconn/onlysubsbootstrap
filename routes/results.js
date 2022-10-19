const express = require('express')
const router = express.Router()
const resultsController = require('../controllers/results') 
const { ensureAuth } = require('../middleware/auth')
const scrapData = require('../middleware/scraper.js') 


router.get('/', resultsController.getResults)

router.put('/newSearch', resultsController.newSearch)

router.post('/getResults', resultsController.newSearch)



module.exports = router