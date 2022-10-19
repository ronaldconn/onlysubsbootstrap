const axios = require("axios").default
const cheerio = require("cheerio")
let scrapData = require('../middleware/scraper.js')


module.exports = {
    
    newSearch: async (req,res)=>{

        console.log(req.body)
        const years = req.body.years
        const zip = req.body.zip
        const miles = req.body.miles
        const newSearchUrl = `https://row52.com/Search/?YMMorVin=YMM&Year=${years}&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=${zip}&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=${miles}`   
      
        
                    try{
                    console.log("sending search url to middleware-scrape")

                    // console.log(url)
                    let results = await scrapData.scrape( newSearchUrl )
                    console.log(results)
                    // console.log("from controllers")
                    // res.json(results)
                    
                    res.render('results.ejs', {
                        scraped: results,
                        user: req.user
                    })
                
                    }catch(err){
                        console.log(err)
                    }
              }, 

    getApi: async (req,res)=>{

            try{
                console.log(req.user.mainSearch)
                let url = req.user.mainSearch
                let results = await scrapData.scrape( url )
                console.log(results)
                res.json( results )
                
                }catch(err){
                    console.log(err)
                }
                  },

    getResults: async (req,res)=>{
    
        console.log(req.user.mainSearch)
        let url = req.user.mainSearch
             
        try{
            // await scrapData
            console.log("See get todos function?")
                let results = await scrapData.scrape(url)
                let searchFunc = await results
                console.log(searchFunc)
                res.render('results.ejs', {
                    scraped: searchFunc,
                    user: req.user
                })
            
                }catch(err){
                    console.log(err)
              } 
            }
}    