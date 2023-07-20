const path = require('path');

const express = require('express');



const router = express.Router();

//  /admin/add-product => GET
router.get('/contactus',(req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contactus.html')); //this '..' will help you to export form another file
    // next();
});

//  /admin/add-product => POST
router.post('/contactus', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;