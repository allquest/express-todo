/**
 * Created by Tegomass on 27/10/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tego', function (req, res, next) {
    res.render('tego.jade', {title: 'TegoPage'});
});

module.exports = router;
