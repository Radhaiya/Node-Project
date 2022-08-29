const mongoose = require('mongoose') //Using mongoose package

mongoose.connect('') // connection string
    .then(() => console.log("Connected to Db"))// On Success 
    .catch((error) => console.log("error :", error))// On failure


module.exports = mongoose // Exporting the module