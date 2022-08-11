const mongoose = require('mongoose') //Using mongoose package

mongoose.connect('mongodb+srv://nodeproject:nodeproject@cluster0.dkwmvul.mongodb.net/?retryWrites=true&w=majority') // connection string
    .then(() => console.log("Connected to Db"))// On Success 
    .catch((error) => console.log("error :", error))// On failure


module.exports = mongoose // Exporting the module