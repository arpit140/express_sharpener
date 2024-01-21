const express  = require('express')

const  app = express()


app.use((req,res,next) => {
    console.log("1st middleware")
    next()   
})

app.use((req,res,next) => {
    console.log("2nd middle ware")
    console.log("arpit")
    res.send("<h1>My name ia arpit</h1>")
    console.log("singh")
})


app.listen(3000,(err) => {
    if(err){console.log("error on starting server",err)}
    console.log("Server is running on port:",3000)
})