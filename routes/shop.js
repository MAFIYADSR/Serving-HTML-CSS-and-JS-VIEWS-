const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));     //this '..' will help you to export form another file
});

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));     //this '..' will help you to export form another file
});

module.exports = router;
