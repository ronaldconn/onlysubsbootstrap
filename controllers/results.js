const axios = require("axios").default
const cheerio = require("cheerio")
let scrapData = require('../middleware/scraper.js')
let running = false
let searchVariable

module.exports = {
    
    newSearch: async (req,res)=>{
        running = true
        console.log(req.body)
        const years = req.body.years
        const zip = req.body.zip
        const miles = req.body.miles
        const newSearchUrl = `https://row52.com/Search/?YMMorVin=YMM&Year=${years}&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=${zip}&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=${miles}`   
      
        
                    try{
                    console.log("sending search url to middleware-scrape")

                    // console.log(url)
                    let results = await scrapData.search( newSearchUrl )
                    console.log(results)
                    // console.log("from controllers")
                    // res.json(results)
                    running = false
                    res.render('results.ejs', {scraped: results})
                
                    }catch(err){
                        console.log(err)
                    }
              }, 

    getApi: async (req,res)=>{

            try{
                await scrapData
                console.log("See API function?")
                let results = await scrapData.scrape()
                console.log(results)
                res.json( results )
                
                }catch(err){
                    console.log(err)
                }
                  },

    getResults: async (req,res)=>{
    
        console.log(req.user.mainSearch)
        let url = req.user.mainSearch
        if (running == false) {
            console.log("running check is false")
             
        try{
            // await scrapData
            console.log("See get todos function?")
                let results = await scrapData.scrape(url)
                let searchFunc = await results
                console.log(searchFunc)
                res.render('results.ejs', {scraped: searchFunc})
            
                }catch(err){
                    console.log(err)
                }
            }else{
                    console.log(searchVariable)
                    let url = searchVariable
                    try{
                    console.log("See this now??!")

                    // console.log(url)
                    let results = await scrapData.search( url )
                    console.log(results)
                    // console.log("from controllers")
                    // res.json(results)
                    running = false
                    res.render('results.ejs', {scraped: results})
                
                    }catch(err){
                        console.log(err)
                    }
              } 
            },
}    