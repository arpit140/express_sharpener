const express = require('express')

const router = express.Router()

router.get('/',(req,res,next) => {
  
    res.send('<h1>My name is arpit</h1>')
     
})

module.exports = router
