const axios = require("axios").default
const cheerio = require("cheerio")
let bigBigData


const scraper = {

  scrape: async (req,res)=>{ 
      let forSecondFunction = req
      //may have to get rid of "" on string
      console.log("prefunctinon running")

      if (req == undefined){
        console.log("scrape is running")
      // let searchs =[ 'https://row52.com/Search/?YMMorVin=YMM&Year=1995-1999&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94609&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=25', 'https://row52.com/Search/?YMMorVin=YMM&Year=1999&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50', 'https://row52.com/Search/?YMMorVin=YMM&Year=1996&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50', 'https://row52.com/Search/?YMMorVin=YMM&Year=1997&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50', 'https://row52.com/Search/?YMMorVin=YMM&Year=1998&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50', 'https://row52.com/Search/?YMMorVin=YMM&Year=1995&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50', "https://row52.com/Search/?YMMorVin=YMM&Year=1996&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50", "https://row52.com/Search/?YMMorVin=YMM&Year=1996-2000&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50", "https://row52.com/Search/?YMMorVin=YMM&Year=1991-1995&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50", "https://row52.com/Search/?YMMorVin=YMM&Year=1995-1999&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=4158&MakeId=226&LocationId=&IsVin=false&Distance=50"
      // ]

      // let searchs =["https://row52.com/Search/?YMMorVin=YMM&Year=1996&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=25", "https://row52.com/Search/?YMMorVin=YMM&Year=1997&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=25", "https://row52.com/Search/?YMMorVin=YMM&Year=1998&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=25", "https://row52.com/Search/?YMMorVin=YMM&Year=1999&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=25","https://row52.com/Search/?YMMorVin=YMM&Year=2000&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=25", "https://row52.com/Search/?YMMorVin=YMM&Year=1996&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=10", "https://row52.com/Search/?YMMorVin=YMM&Year=1997&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=10", "https://row52.com/Search/?YMMorVin=YMM&Year=1998&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=10", "https://row52.com/Search/?YMMorVin=YMM&Year=1999&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=10"
      // ]

      let url ="https://row52.com/Search/?YMMorVin=YMM&Year=1995-1999&V1=&V2=&V3=&V4=&V5=&V6=&V7=&V8=&V9=&V10=&V11=&V12=&V13=&V14=&V15=&V16=&V17=&ZipCode=94530&Page=1&ModelId=&MakeId=226&LocationId=&IsVin=false&Distance=50"
      

      // function getRandomItem(arr) {
      //   // get random index value
      //   const randomIndex = Math.floor(Math.random() * arr.length);
      //   // get random item
      //   const item = arr[randomIndex];
      //   return item;
      // }

      // //stores the random source URL in the result variable
      // const result = getRandomItem(searchs);
      // let url = result;

      return axios.get(url).then(response => {
          const html = response.data;
          const $ = cheerio.load(html)
          // console.log(bigBigData)

          //scrapes all the divs with the queries car info and parses all the data down to arry format
          let divList = $('div.list-row').text().split(" ").filter(x => x.trim() != '').join("").split("\n")

          let linkArr = []
          let links = $('.list-row-right > a')
          function getLinks(){
              links.each(x =>{
                linkArr.push(links[x].attribs.href)
              })
          }
          getLinks()

          //gets rid of duplicates
          linkArr = [...new Set(linkArr)];

          //new arr for final car link
          let carLinkArr = []
          
          //checks for row52 vehichle link
          function cleanLinks(arr){
            arr.forEach(x =>{
              (x[1] === "V") ? carLinkArr.push(x) : 0
            }) 
          }
          cleanLinks(linkArr)

          let stringArr = []
          function combineString(){
            for (let i = 0; i < carLinkArr.length; i++) {
              stringArr.push(`https://row52.com${carLinkArr[i]}`)
            }
          }
          combineString()
          
          let totalCarCount = 0
          let carCount = function (){
            let count = 0
            for (let i=0; i<divList.length; i++){
              if (divList[i] == "Vehicle"){
                count = count + 1
              }
            }
            // console.log(count)
            totalCarCount = count
          }
        
          //splits giant array into info by car, arrays of 8 units in length
          let splitArray = function (arr, size) {

            let arr2 = arr.slice(0),
            arrays = [];

            while (arr2.length > 0){
                arrays.push(arr2.splice(0, size));
            }
            // console.log(arrays);
            // console.log(arrays.length-1)
            return arrays
          }

          //get image src
          //this works but not great. need to find a better way.
          //the count starts at 26 because there are 25 imgage files in the row52 template before the picks of the cars i want to scrape 
          //the totalCarCount is multiplied by 2 because the function returns one image i want every other time.

          let imageArr = []
          let parseImages = function (){
            for (let i = 26; i < 28 + (totalCarCount*2); i++){
              if (i % 2 === 0){
                imageArr.push($('img')[i].attribs.src.toString())
              }
            }
            // console.log(imageArr)
            return imageArr;
          }

          let pushPhotos = function(arr1, arr2, arr3){
            for (let i = 0; i < arr1.length; i++) {
              arr3[i].push(arr1[i]);
              arr3[i].push(arr2[i])
            }
            // console.log(arr2)
            return arr3
          }

          // let pushLinks = function(arr1, arr2){
          //   for (let i = 0; i < arr1.length; i++) {
          //     arr2[i].push(arr1[i])
          //   }
          //   // console.log(arr2)
          //   return arr2
          // }

          
          carCount()
          // parseImages()
          // splitArray(divList, 16)
          const bigData = pushPhotos(parseImages(), stringArr, splitArray(divList, 16))
          

          let removeSpaces = function(arr){
            for (let i = 0; i < arr.length; i++){
              for (let j = 0; j < arr[i].length; j++){
              if (arr[i][j] == ""){
                    arr[i].splice(j, 1)
                }else if (j == 4){
                  arr[i][4] = arr[i][4].split('').reduce((a, e, i)=> a + e + (i == 10? ' ' : ''), '')
                }
                //need to change this to pick out "legacy" vs "impreza" or maybe just do it in DOM
              //  else if (j == 3){
              //     arr[i][3] = arr[i][3].split('').reduce((a, e, i)=> a + e + (i == 5? ' ' : ''), '')
              //   }
              }
            }
            return arr
          }
          
          //parses cleaned up arr for dates and pushes them to seperate arr
          let dates = []
          let finalParse = function(arr){
            for (let i = 0; i < arr.length-1; i++){
                dates.push(arr[i][5])
                }
            }
            
          //get date to add proper spacing to data
          let updatedDates = function (arr){
            for (let i = 0; i<arr.length; i++){
              arr[i] = arr[i].split('').reduce((a, e, i)=> a + e + (i == 2? ' ' : ''), '')
              
            } 
            for (let i = 0; i<arr.length; i++){
              arr[i] = arr[i].split('').reduce((a, e, i)=> a + e + (i == 6? ' ' : ''), '')
            }
            // console.log(arr)
            return arr  
          }
          
          //one more function to put new dates back into final arr

          let dateIntegration = function (arr1, arr2){
            for (let i = 0; i<arr2.length; i++){
              arr1[i][5] = arr2[i]
            }
            return arr1
          }

      let noSpaces = removeSpaces(bigData)
      let again = finalParse(noSpaces)
      let goodDates = updatedDates(dates)
      bigBigData = dateIntegration(noSpaces, goodDates)
      let removedLastElem = bigBigData.pop()
      
            console.log("should only see this on main naviagtion todos not on the search fucntions")
      return bigBigData
        })
        .catch(console.error);
        }else{
          console.log("conditional func (search) of scrape is running")
          return scraper.search(req)
        }
      },      

  //second method

  search: async (req,res)=>{ 
    console.log("scraper.search is running")
    await req
    return axios.get(req).then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        // console.log(bigBigData)
    
        //scrapes all the divs with the queries car info and parses all the data down to arry format
        let divList = $('div.list-row').text().split(" ").filter(x => x.trim() != '').join("").split("\n")
    
        let linkArr = []
        let links = $('.list-row-right > a')
        function getLinks(){
            links.each(x =>{
              linkArr.push(links[x].attribs.href)
            })
        }
    
        getLinks()
    
      
    
        //gets rid of duplicates
        linkArr = [...new Set(linkArr)];
    
        //new arr for final car link
        let carLinkArr = []
        
        //checks for row52 vehichle link
        function cleanLinks(arr){
          arr.forEach(x =>{
            (x[1] === "V") ? carLinkArr.push(x) : 0
          }) 
        }
    
        cleanLinks(linkArr)
    
     
    
        let stringArr = []
    
        function combineString(){
          for (let i = 0; i < carLinkArr.length; i++) {
            stringArr.push(`https://row52.com${carLinkArr[i]}`)
          }
        }
      
        combineString()
        
        let totalCarCount = 0
        let carCount = function (){
          let count = 0
          for (let i=0; i<divList.length; i++){
            if (divList[i] == "Vehicle"){
              count = count + 1
            }
          }
          // console.log(count)
          totalCarCount = count
        }
       
        //splits giant array into info by car, arrays of 8 units in length
        let splitArray = function (arr, size) {
    
          let arr2 = arr.slice(0),
          arrays = [];
    
          while (arr2.length > 0){
              arrays.push(arr2.splice(0, size));
          }
          // console.log(arrays);
          // console.log(arrays.length-1)
          return arrays
        }
    
        //get image src
        //this works but not great. need to find a better way.
        //the count starts at 26 because there are 25 imgage files in the row52 template before the picks of the cars i want to scrape 
        //the totalCarCount is multiplied by 2 because the function returns one image i want every other time.
    
        let imageArr = []
        let parseImages = function (){
          for (let i = 26; i < 28 + (totalCarCount*2); i++){
            if (i % 2 === 0){
              imageArr.push($('img')[i].attribs.src.toString())
            }
          }
          // console.log(imageArr)
          return imageArr;
        }
    
        let pushPhotos = function(arr1, arr2, arr3){
          for (let i = 0; i < arr1.length; i++) {
            arr3[i].push(arr1[i]);
            arr3[i].push(arr2[i])
          }
          // console.log(arr2)
          return arr3
        }
    
        // let pushLinks = function(arr1, arr2){
        //   for (let i = 0; i < arr1.length; i++) {
        //     arr2[i].push(arr1[i])
        //   }
        //   // console.log(arr2)
        //   return arr2
        // }
    
        
        carCount()
        // parseImages()
        // splitArray(divList, 16)
        const bigData = pushPhotos(parseImages(), stringArr, splitArray(divList, 16))
        
    
        let removeSpaces = function(arr){
          for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] == ""){
                  arr[i].splice(j, 1)
              }else if (j == 4){
                arr[i][4] = arr[i][4].split('').reduce((a, e, i)=> a + e + (i == 10? ' ' : ''), '')
              }
              //need to change this to pick out "legacy" vs "impreza" or maybe just do it in DOM
            //  else if (j == 3){
            //     arr[i][3] = arr[i][3].split('').reduce((a, e, i)=> a + e + (i == 5? ' ' : ''), '')
            //   }
            }
          }
          return arr
        }
        
        //parses cleaned up arr for dates and pushes them to seperate arr
        let dates = []
        let finalParse = function(arr){
          for (let i = 0; i < arr.length-1; i++){
               dates.push(arr[i][5])
              }
          }
          
        //get date to add proper spacing to data
        let updatedDates = function (arr){
          for (let i = 0; i<arr.length; i++){
            arr[i] = arr[i].split('').reduce((a, e, i)=> a + e + (i == 2? ' ' : ''), '')
            
          } 
          for (let i = 0; i<arr.length; i++){
            arr[i] = arr[i].split('').reduce((a, e, i)=> a + e + (i == 6? ' ' : ''), '')
          }
          // console.log(arr)
          return arr  
        }
        
        //one more function to put new dates back into final arr
    
        let dateIntegration = function (arr1, arr2){
          for (let i = 0; i<arr2.length; i++){
            arr1[i][5] = arr2[i]
          }
          return arr1
        }
    
    let noSpaces = removeSpaces(bigData)
    let again = finalParse(noSpaces)
    let goodDates = updatedDates(dates)
    bigBigData = dateIntegration(noSpaces, goodDates)
    let removedLastElem = bigBigData.pop()
   
    console.log("hi")
    return bigBigData
      })
      .catch(console.error);
      }, 

  }


module.exports = scraper



 





