const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

// we can put same path for both because method are differnent post and get

router.get('/add-product',(req,res,next) => {
    
    res.sendFile(path.join(rootDir,"views","add-product.html"))
})

router.post('/add-product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/shop')
     
})

module.exports = router
