const express = require("express") // Using Express package
const route = express.Router() // Router function to create router object
const user = require('../model/userSchema')

route.post('/register', async (req, res) => { //register page route 

    const userExist = await user.findOne({ email: req.body.email })

    if (userExist) {
        res.status(400).send("User Already Exist")
    }


    else {
        const newuser = new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })


        const saveduser = await newuser.save()

        res.send("Registered Successfully")
    }
})

route.post('/login', async (req, res) => {  // login page  route
    const userExist = await user.findOne({ email: req.body.email })
    if (userExist) {
         
        if (userExist.password == req.body.password) {
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

