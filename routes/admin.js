const express = require('express')
const { get } = require('./admin')

const router = express.Router()

// we can put same path for both because method are differnent post and get

router.get('/add-product',(req,res,next) => {
    
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"></input><input type="number" name="size"></input><button type="submit">click</button></form>')
})

router.post('/add-product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/shop')
     
})

module.exports = router
