const express = require("express") // Using Express package
const route = express.Router() // Router function to create router object
const user = require('../model/userSchema')

route.post('/register', async (req, res) => { //register page route 

    const userExist = await user.findOne({ email: req.body.email })//Checks Whether the email already exist in Monog

    if (userExist) {
        res.status(400).send("User Already Exist")
    }
    else {
        const newuser = new user({   //Gets values from frontend and creates the user Object from userSchema.js
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        await newuser.save() // Saves the user in database

        res.send("Registered Successfully")
    }
})

route.post('/login', async (req, res) => {  // login page  route
    const userExist = await user.findOne({ email: req.body.email })


    if (userExist) {// Checks if user exist 

        if (userExist.password == req.body.password) { //Verify Password 
            res.send("Login Success")
        }

        else {
            res.status(400).send("Invalid Credentials")
        }
    }
    else {
        res.status(400).send("User doesn't Exist")
    }
})

module.exports = route              // exporting route module

