const axios = require("axios").default
const cheerio = require("cheerio")


const scraper = {

  scrape: async (req,res)=>{ 

      let url = req;

      return axios.get(url).then(response => {
          const html = response.data;
          const $ = cheerio.load(html);

          //scrapes all the divs with the queries car info and parses all the data down to arry format
          let divList = $('div.list-row').text().split(" ").filter(x => x.trim() != '').join("").split("\n");

          let linkArr = [];
          let links = $('.list-row-right > a')
          function getLinks(){
              links.each(x =>{
                linkArr.push(links[x].attribs.href)
              })
          };
          getLinks();

          //gets rid of duplicates
          linkArr = [...new Set(linkArr)];

          //new arr for final car link
          let carLinkArr = []
          
          //checks for row52 vehichle link
          function cleanLinks(arr){
            arr.forEach(x =>{
              (x[1] === "V") ? carLinkArr.push(x) : 0
            }) 
          };
          cleanLinks(linkArr);

          let stringArr = [];
          function combineString(){
            for (let i = 0; i < carLinkArr.length; i++) {
              stringArr.push(`https://row52.com${carLinkArr[i]}`)
            }
          };
          combineString();
          
          let totalCarCount = 0;
          let carCount = function (){
            let count = 0
            for (let i=0; i<divList.length; i++){
              if (divList[i] == "Vehicle"){
                count = count + 1
              }
            };
            // console.log(count)
            totalCarCount = count;
          };
        
          //splits giant array into info by car, arrays of 8 units in length
          let splitArray = function (arr, size) {

            let arr2 = arr.slice(0),
            arrays = [];

            while (arr2.length > 0){
                arrays.push(arr2.splice(0, size));
            }
            return arrays
          };

          //get image src
          //this works but not great. need to find a better way.
          //the count starts at 26 because there are 25 image files in the row52 template before the picks of the cars i want to scrape 
          //the totalCarCount is multiplied by 2 because the function returns one image i want every other time.

          let imageArr = [];
          let parseImages = function (){
            for (let i = 26; i < 28 + (totalCarCount*2); i++){
              if (i % 2 === 0){
                imageArr.push($('img')[i].attribs.src.toString())
              }
            };
            // console.log(imageArr)
            return imageArr;
          };

          let pushPhotos = function(arr1, arr2, arr3){
            for (let i = 0; i < arr1.length; i++) {
              arr3[i].push(arr1[i]);
              arr3[i].push(arr2[i]);
            }
            // console.log(arr2)
            return arr3;
          };
          
          carCount();
          const bigData = pushPhotos(parseImages(), stringArr, splitArray(divList, 16));
          

          let removeSpaces = function(arr){
            for (let i = 0; i < arr.length; i++){
              for (let j = 0; j < arr[i].length; j++){
              if (arr[i][j] == ""){
                    arr[i].splice(j, 1)
                }else if (j == 4){
                  arr[i][4] = arr[i][4].split('').reduce((a, e, i)=> a + e + (i == 10? ' ' : ''), '')
                }
              }
            }
            return arr
          };
          
          //parses cleaned up arr for dates and pushes them to seperate arr
          let dates = []
          let finalParse = function(arr){
            for (let i = 0; i < arr.length-1; i++){
                dates.push(arr[i][5])
                };
            };
            
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
          };
          
          //one more function to put new dates back into final arr

          let dateIntegration = function (arr1, arr2){
            for (let i = 0; i<arr2.length; i++){
              arr1[i][5] = arr2[i]
            }
            return arr1
          };

      let noSpaces = removeSpaces(bigData)
      // let again = finalParse(noSpaces)
      let goodDates = updatedDates(dates)
      let bigBigData = dateIntegration(noSpaces, goodDates)

      //cleanup list one last time
      let removedLastElem = bigBigData.pop()
      
            console.log("should only see this on main naviagtion todos not on the search fucntions")
      return bigBigData;
        })
        .catch(console.error);
      }
  }  


module.exports = scraper