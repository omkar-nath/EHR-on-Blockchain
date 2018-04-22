var express = require('express');
var router = express.Router();

var aes256=require('aes256');
router.get('/', function(req, res, next) {
  res.render('patient_profile');
});
router.get('/:doc_user',function(req,res,next)
{

	res.render('approve_request');
});

router.get('/:doc_username/:ipfsHash',function(req,res,next)
{
      res.render('patient_upload_hash');
});
router.post('/encrypthash',function(req,res,next)
{
	if (req.xhr || req.accepts('json,html') === 'json')
    {
    	 var ipfshash=req.body.ipfsHash;
    	 var passkey=req.body.passkey;
    	 console.log(passkey);
    	 console.log(ipfshash);
         var encrypted = aes256.encrypt(passkey, ipfshash);
         console.log(encrypted);
          var hell="hello";
    	 res.json({
    	 	success:"true",
    	 	encrypted_hash:encrypted
    	 });
    }
})
module.exports = router;