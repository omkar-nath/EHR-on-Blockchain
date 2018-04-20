var express = require('express');
var router = express.Router();
var secp256k1=require('secp256k1');

router.get('/', function(req, res, next) {
  res.render('new_patient');
});
router.post('/generatePublicKey',function(req,res,next)
{
	if (req.xhr || req.accepts('json,html') === 'json')
    {
    	var private_key=req.body.pr_key;
    	console.log(private_key);
         
        let pri_key = new Buffer(private_key, 'hex');
        let pub_key=secp256k1.publicKeyCreate(pri_key,false).slice(1);
        let public_key=pub_key.toString('hex');
        console.log(public_key);








    	var msg='';
    	res.json({
    		success:'true',
    		msg:public_key
    	});
    }
})
module.exports = router;
