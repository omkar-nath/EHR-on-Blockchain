var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('new_patient');
});

module.exports = router;
