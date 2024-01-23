const { urlencoded } = require('body-parser')
const express  = require('express')

const  app = express()

// const bodyParser = require('body-parser')

app.use(express.urlencoded({extended:false}))


app.use('/add-product',(req,res,next) => {
    
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><input type="number" name="size"></input><button type="submit">click</button></form>')
})

app.post('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
     
})

app.use('/',(req,res,next) => {
  
    res.send('<h1>My name is arpit</h1>')
     
})


app.listen(3000,(err) => {
    if(err){console.log("error on starting server",err)}
    console.log("Server is running on port:",3000)
})