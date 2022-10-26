var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sravanth Kumar Reddy Pullamgari' });
});

module.exports = router;
