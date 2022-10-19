const axios = require("axios").default
const cheerio = require("cheerio")
let scrapData = require('../middleware/scraper.js')
const User = require("../models/User");

module.exports = {
    
    getSearchInfo: async (req,res)=>{
       
        console.log(req.body)
        const year = req.body.year
        const zip = req.body.zip
        const miles = req.body.miles
        const newSearchUrl = `https://row52.com/Search/?YMMorVin=YMM&Year=${year}&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=${zip}&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=${miles}`   
      
        
                    try{
                        console.log(req.user._id)
                        await User.findOneAndUpdate(
                            { _id: req.user._id},
                            {
                                mainSearch: newSearchUrl
                            });    
                    console.log("Main Search URL added to User")

                    const comment = await User.findById(req.user);

                    console.log(comment)
                    let results = await scrapData.scrape( newSearchUrl )
                    console.log(results)
                  
                    // res.render('results.ejs', {scraped: results})
                      res.redirect('/results')  

                    }catch(err){
                        console.log(err)
                    }
              }, 
}    