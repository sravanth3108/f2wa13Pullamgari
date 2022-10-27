var express = require('express');

var router = express.Router();

var rand = Math.floor(Math.random()*100);var rand2= Math.random()

var atan2="Math.atan2() applied to "+ rand + " is "+ Math.atan2(rand,rand)

var atanh="Math.atanh()  applied to "+ rand2 + " is "+ Math.atanh(rand2)

var cbrt= "Math.cbrt() applied to "+ rand + " is "+ Math.cbrt(rand);


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('computation', { title:'Sravanth Reddy Bonus',value1: atan2, value2:atanh, value3:cbrt });
});



module.exports = router;
