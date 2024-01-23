
const express  = require('express')
const app = express()
const path = require("path")
const routerAdmin = require('./routes/admin')
const routerShop = require('./routes/shop')
const routerContact = require('./routes/contactUs')
app.use(express.urlencoded({extended:false}))


app.use('/admin',routerAdmin)
app.use('/shop', routerShop)
app.use('/contact',routerContact)

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})

// server call
app.listen(4000,(err) => {
    if(err){console.log("error on starting server",err)}
    console.log("Server is running on port:",4000)
})