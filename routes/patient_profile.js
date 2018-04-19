var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('patient_profile');
});
router.get('/:doc_user',function(req,res,next)
{

	res.render('approve_request');
});
module.exports = router;
