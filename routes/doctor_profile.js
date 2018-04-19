var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('doctor_profile');
});


router.post('/sendmail',function(req,res,next)
{
    if (req.xhr || req.accepts('json,html') === 'json')
    {
    	 var make_url = req.body.make_url;
       var doc_user=req.body.doc_username;
    	 
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
module.exports = router;