var express = require('express');
var router = express.Router();
var rand = Math.floor(Math.random()*100)
var rand2= Math.random()
var val1="Math.atan2() applied to "+ rand + " is "+ Math.atan2(rand,rand)
var val2="Math.atanh()  applied to "+ rand2 + " is "+ Math.atanh(rand2)
var val3= "Math.cbrt() applied to "+ rand + " is "+ Math.cbrt(rand);
console.log(val1)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Sravanth Reddy Bonus',value1: val1, value2:val2, value3:val3 });
});



module.exports = router;
