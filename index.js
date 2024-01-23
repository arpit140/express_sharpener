
const express  = require('express')
const  app = express()
const routerAdmin = require('./routes/admin')
const routerShop = require('./routes/shop')
app.use(express.urlencoded({extended:false}))


app.use('/admin',routerAdmin)
app.use('/shop', routerShop)

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
})





// server call
app.listen(3000,(err) => {
    if(err){console.log("error on starting server",err)}
    console.log("Server is running on port:",3000)
})