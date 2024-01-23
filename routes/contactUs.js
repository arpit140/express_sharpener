const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

router.get('/',(req,res,next) => {

    res.sendFile(path.join(rootDir,'views','contact.html'))
})
router.post('/',(req,res,next) => {
    console.log(req.body)
    res.send('<h1>Form successfuly filled</h1>')
})

module.exports = router