const path = require('path');

const express = require('express');



const router = express.Router();

//  /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); //this '..' will help you to export form another file
    // next();
});

//  /admin/add-product => POST
router.post('/add-product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;