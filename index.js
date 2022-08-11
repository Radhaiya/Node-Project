const express = require('express') // Using Express package
const app = express()
const authroutes = require('./routes/routes')        // calling the routes module


require('./database/connection')///Importing Connection module
require('./model/userSchema')///Importing userSchema



app.use('/', authroutes)                 //using the route module 

app.get('/', (req, res) => {   //Get request to check whether the route works
    res.send("Home page")     // sends response to the browser 
})

 
app.listen(3000, () => {      // It hosts the app on localhost port number 3000
    console.log("Server running on port 3000");  //logs the server status
})