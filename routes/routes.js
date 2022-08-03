const express = require("express") // Using Express package
const route = express.Router() // Router function to create router object

route.get('/register', (req, res) => { //register page route 
    res.send("Register Page")        // sends response to the browser
})

route.get('/login', (req, res) => {  // login page  route
    res.send("Login Page")           // sends response to the browser
})  

module.exports = route              // exporting route module
