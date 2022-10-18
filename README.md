# Only Subarus - The Junkyard Companion

![gif of app in action](https://raw.githubusercontent.com/ronaldconn/onlysubs/main/onlysubs.gif)

hosted on render:<br>
https://onlysubs.onrender.com<br>

# Introduction

The OnlySubarus app is an app built using MVC Architecture. It has user authentication and security walls for passwords and db access.

The app searches all junkyards within the immediate area for 90's subarus. There app is not bulky and there are no ads. This allows the user to find the car they wish to pull parts from.

The idea for the app came to be as I was standing in a junkyard looking for a car in 100 degree weather. My phone screen was obscured by the sun's glare and the junkyards browser based web-search took a long, long time to load. Their site is extermely heavy, and the ads make finding the info I wanted very frustrating.

Sweating and tired, I decided I needed a way to find cars quickly. 

OnlySubarus was born. 

The current version is specifically for 90's subarus. In 90's internet style too ;) (react version coming soon!)

This app will have mulitple versions. A universal version that is not subaru specific will be released––Perfect for anyone that has an old car and needs to find parts quickly while lost in the junkyard.

While I love the nostalgia of 90's websites, a more modern GUI will take the wheel, so to speak, very soon!

# How It's Made:
**Tech used:** HTML, CSS, JavaScript, EJS, Node.js, MongoDB, Mongoose, Cloudinary, Axios, Cheerio, JQuery, Bcrypt, Express, Multer, Morgan, and Nodemon.

This app utilizes a secure Mongo.DB database to hold user info as well as favorites.

The logic is written in JavaScript and thanks to Node.js the backend code documents are also written with JS.

Make sure to uses all the dependecies below to ensure proper function and security.


# Packages/Dependencies used 

axios
bcrypt
cheerio
cloudinary
connect-mongo
dotenv
ejs
express-flash
express-session
express
method-override
mongodbd
mongoose
morgan
multer
nodemon
passport-local
passport
run
validator

---

# Install

`npm install`

--- 

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`
 
# Lessons Learned

Utilizing callback functions on the server side code to build a modular and scalable backend allowed me to handle large data scrapes and parsing by keeping load times and computaitonal complexity low. This was a must to distill the information I needed to render for the user without have to save it all to a DB or timeout the client or server. I learned how to better simplify backend routes by focusing on OOP and improved app architecture.

# Future optimizations
- New Versions
   - universal app that allows users to search any car and make!
   - react version coming soon!

- Current Release
  - Change tile display on mobile for easier readability
  - Add social network aspect
    - Create networks of friends with shared feed
  - Create alerts/automated emails for new cars as they apear 
  - Add junkyard specific information including, parts pricing, contact info, and yard map
  - Add one click directions to each junkyard

