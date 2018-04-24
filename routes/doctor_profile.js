var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const EthCrypto = require('eth-crypto');
router.get('/', function(req, res, next) {
  res.render('doctor_profile');
});


router.post('/sendmail',function(req,res,next)
{
    if (req.xhr || req.accepts('json,html') === 'json')
    {
    	 var make_url = req.body.make_url;
       var doc_user=req.body.doc_username;

       var patient_email=req.body.patient_email;
       console.log(patient_email);
    	 
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
  to: 'omilpsablock@gmail.com', 
  subject: 'Regarding Permission asking', // Subject line
  html: '<p>This mail is send in order to seek permission to upload your electronic healt record on blockchain.<br>Please click the below link if you agree <br><a href="http://localhost:3000/patient/'+make_url+'/'+doc_user+'"> Grant Acess </a></p>'
  
};
  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});




    	  var msg='Data received';
    	  res.json({
                success: true,
                msg: msg
});
    }
})
router.post("/sendIpfsHash",function(req,res,next)
{
  if (req.xhr || req.accepts('json,html') === 'json')
  {
    var patient_email=req.body.patient_email;
    var ipfsUrl=req.body.urlipfs;
    console.log('PAtient email ',patient_email);
    console.log('Ipfs url ',ipfsUrl);

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
  to: 'omilpsablock@gmail.com', 
  subject: 'File Hash', // Subject line
  html: '<p><br>By clicking on the given link you can encrypt and store your EHR document and storing it in blockchain<br><a href='+ipfsUrl+'> Store it in blockchain  </a></p>'
  
};
  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});





    var msg="Ho gaya";
    res.json({
      success:"true",
      msg:msg
    });
  }
})
router.post("/askdecrypted",function(req,res,next)
{
     if (req.xhr || req.accepts('json,html') === 'json')
  {
     var doc_email=req.body.doc_email;
     var encrypted_hash=req.body.encrypted_hash;
     var redirect=req.body.patient_url;
     console.log(doc_email);
     console.log(encrypted_hash);
     console.log(redirect);
     redirect+="/"+"encrypted"+"/"+encrypted_hash;
   console.log(redirect);
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
  to: 'omilpsablock@gmail.com', 
  subject: 'Reading permission', // Subject line
  html: '<p> '+encrypted_hash +' </p><h7>Copy above hash and click below link<br><a href='+redirect+'> Decrypt and send  </a></h7>'
  
};
  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
   {
     res.json({
      success:"true",
      msg:"Mail sent to patient for EHR reading request"
     });
   }

     });
   










    
  }
});
module.exports = router;