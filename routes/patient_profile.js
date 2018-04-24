var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
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

router.get('/:doc_username/encrypted/:encryptedIpfs',function(req,res,next)
{
  res.render('decrypt_hash');
})
router.post('/decryptedHash',function(req,res,next)
{
  if (req.xhr || req.accepts('json,html') === 'json')
    {
      var encrypted_ipfs=req.body.encrypt_ipfs;
      var passkey=req.body.passkey;
      console.log(encrypted_ipfs);
      console.log(passkey);
  var decrypted = aes256.decrypt(passkey, encrypted_ipfs);
  var msg=decrypted;
  var file_url="http://localhost:8080/ipfs/"+decrypted;
    var transporter = nodemailer.createTransport({
          service: 'gmail',
    auth: {
              user: 'medicochain800@gmail.com',
              pass: 'securepassword',
              proxy: process.env.http_proxy
          }

});
           const mailOptions = {
  from: 'medicochain800@gmail.com', 
  to: 'omkarnath8039@gmail.com', 
  subject: 'EHR', // Subject line
  html: '<p><br><br><a href='+file_url+'> EHR document link  </a></p>'
  
};
  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     res.json({
    success:"true",
    msg:"File sent to the doctor"
  });
});







  
}
})
module.exports = router;