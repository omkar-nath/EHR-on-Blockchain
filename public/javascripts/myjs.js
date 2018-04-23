$(document).ready(function() {
    if (typeof web3 !== 'undefined') {
        console.log("Using web3 detected from external source like Metamask");
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log("Using testrpc");
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }



    abi =[
    {
        "constant": false,
        "inputs": [
            {
                "name": "doc_address",
                "type": "address"
            }
        ],
        "name": "grantAccess",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "email_id",
                "type": "bytes32"
            },
            {
                "name": "adhar_id",
                "type": "uint256"
            },
            {
                "name": "username",
                "type": "bytes32"
            }
        ],
        "name": "setDoctor",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "email_id",
                "type": "bytes32"
            },
            {
                "name": "adhar_id",
                "type": "uint256"
            },
            {
                "name": "username",
                "type": "bytes32"
            }
        ],
        "name": "setPatient",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "doc_username",
                "type": "bytes32"
            },
            {
                "name": "patient_username",
                "type": "bytes32"
            },
            {
                "name": "year",
                "type": "uint16"
            },
            {
                "name": "day",
                "type": "uint8"
            },
            {
                "name": "month",
                "type": "uint8"
            },
            {
                "name": "first",
                "type": "bytes32"
            },
            {
                "name": "second",
                "type": "bytes32"
            },
            {
                "name": "third",
                "type": "bytes32"
            }
        ],
        "name": "storeIpfs",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "doc_address",
                "type": "address"
            }
        ],
        "name": "checkstatus",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "patient_address",
                "type": "address"
            }
        ],
        "name": "checkstatusdoc",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "DoctorAddressMap",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "DoctorStruct",
        "outputs": [
            {
                "name": "email_d",
                "type": "bytes32"
            },
            {
                "name": "adhar_id_d",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "doctor_add",
                "type": "address"
            }
        ],
        "name": "getDoctor",
        "outputs": [
            {
                "name": "email_d",
                "type": "bytes32"
            },
            {
                "name": "adhar_id_d",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "username",
                "type": "bytes32"
            }
        ],
        "name": "getDoctorAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "patient_address",
                "type": "address"
            }
        ],
        "name": "getEncryptedHash",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "patient_add",
                "type": "address"
            }
        ],
        "name": "getPatient",
        "outputs": [
            {
                "name": "email_p",
                "type": "bytes32"
            },
            {
                "name": "adhar_id",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "username",
                "type": "bytes32"
            }
        ],
        "name": "getPatientAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "username",
                "type": "bytes32"
            }
        ],
        "name": "getPatientEmail",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "PatientAddressMap",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "PatientDocs",
        "outputs": [
            {
                "name": "uploadedBy",
                "type": "bytes32"
            },
            {
                "name": "belongsTo",
                "type": "bytes32"
            },
            {
                "components": [
                    {
                        "name": "year",
                        "type": "uint16"
                    },
                    {
                        "name": "day",
                        "type": "uint8"
                    },
                    {
                        "name": "month",
                        "type": "uint8"
                    }
                ],
                "name": "dateofupload",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "name": "first",
                        "type": "bytes32"
                    },
                    {
                        "name": "second",
                        "type": "bytes32"
                    },
                    {
                        "name": "third",
                        "type": "bytes32"
                    }
                ],
                "name": "encryptedHash",
                "type": "tuple"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "PatientStruct",
        "outputs": [
            {
                "name": "email_p",
                "type": "bytes32"
            },
            {
                "name": "adhar_id",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "usernameEmail",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
    MedicoContract = web3.eth.contract(abi);
    Medical = MedicoContract.at("0x60c2bdf3e0f91ea41fde95341e6705009de176f6");

 


    $('#ask').click(function(event) {

       if (web3.eth.accounts[0] == undefined) {
     swal('', 'Please make sure  you are logged in to your metamask account', 'warning');
 } else {
     event.preventDefault();
     let username = $('#patient_username')
         .val();
     if (username == '')
         swal('Oops', 'You forgot to enter username', 'error');
     else {


          var curr_url=window.location.href;
          curr_url=curr_url.split("/");
          var doc_username=curr_url[4].substring(0,curr_url[4].indexOf('$'));
          console.log(doc_username);
          Medical.getDoctorAddress(doc_username,function(err,add)
          {
            if(!err)
            {
                 if(web3.eth.accounts[0]==add)
                 {
                     Medical.getPatientAddress(username, function (error, result) {
                 if (!error) {
                     Medical.checkstatusdoc(result, function (error, re) {
                             if (!error) {
                                 if (re == true) {
                                     swal({
                                             title: 'Access granted.You can now upload the EHR!',
                                             type: 'success',
                                             html: '<div class="form-group"> <input class="form-control-file" id="InputFile" aria-describedby="fileHelp" type="file"></div>',
                                             showCloseButton: true,
                                             showCancelButton: true,
                                             confirmButtonText:

                                                 '</i> Upload',


                                         })
                                         .then((result) => {
                                             if (result.value) {




                                                 swal('Hello thre');




                                             }




                                         });
                                 } else {



                                     Medical.getPatientEmail(username, function (err, p_email) {
                                         if (!err) {
                                             let current_url = window.location.href;

                                             var make_url = username + "$" + result.substr(0, 5);
                                             var doc_username = current_url.substr(29, current_url.indexOf('$'));
                                             var make_url = {

                                                 make_url: make_url,
                                                 doc_username: doc_username,
                                                 patient_email: web3.toAscii(p_email)
                                             };
                                             current_url += "/" + "sendmail";
                                             $.ajax({
                                                 url: current_url,
                                                 type: 'POST',
                                                 data: make_url,
                                                 dataType: 'JSON',
                                                 success: function (msg) {
                                                     if (msg.success) {
                                                         swal('Sweet', 'Request sent', 'success');
                                                     }
                                                 },
                                                 error: function (error) {
                                                     swal('Oops', 'Some error occured', 'error');
                                                 }
                                             });
                                         } 
                                         else 
                                             swal('Oops', 'Error in retrieving email', 'error');
                                         
                                     });
                                 }

                             }
                          else
                             swal('Oops', 'Something bad happened', 'error');



                     });




             } else
                 swal('Oops', 'Something happended', 'error');
         })

                 }
                 else
                    swal('Oops','Please switch to your metamask account','warning');
            }
            else
            {
                swal('Oops ','Something bad happened','error');
            }
          })
                  
     }
 }
       
   })

    $('#check_status').click(function(event) {
      
  if (web3.eth.accounts[0] == undefined) {
            swal('', 'Please make sure  you are logged in to your metamask account', 'warning');
        } else {
            event.preventDefault();
            let username = $('#patient_user').val();
            check_access_status(username);
        }
    });
   
    function check_access_status(username)
    {
         Medical.getPatientAddress(username, function(error, result) {
                if (!error) {
                    var patient_public_key=result;
                    Medical.checkstatusdoc(result, function(error, re) {
                        if (!error) {
                            if (re == true) {
                                swal({
                                    title: 'Access granted.You can now upload the EHR!',
                                    type: 'success',
                                    html: '<div class="form-group"> <input class="form-control-file" id="InputFile" aria-describedby="fileHelp" type="file"></div>',
                                    showCloseButton: true,
                                    showCancelButton: true,
                                    confirmButtonText:

                                        '</i> Upload',


                                }).then((result) => {
                                    if (result.value) {
                                        const ehr=document.getElementById('InputFile');

                                        const reader=new FileReader();
                                        reader.readAsArrayBuffer(ehr.files[0]);
                                        reader.onloadend=function()
                                        {
                                            const ipfs=window.IpfsApi('localhost',5001);
                                            const buf=buffer.Buffer(reader.result);
                                            ipfs.files.add(buf,(err,result)=>{
                                                if(err)
                                                {
                                                    console.log(err);
                                                    return;
                                                }
                                                else
                                                {

                                              var ipfsHash=result[0].hash;
                                        Medical.getPatientEmail(username,function(err,result)
                                              {
                                                if(!err)
                                                {
                                                   Medical.getPatientAddress(username,function(err,add)
                                                   {

                                                     if(!err)
                                                     {
                                                       var p_address=add.substr(0,5);
                                                    console.log(result);
                                                   swal(web3.toAscii(result));
                                             var Url="http://localhost:3000/patient";
                                              Url+="/"+username+"$"+p_address;
                                              //swal(Url);
                                              var curr_url=window.location.href;
                                              curr_url=curr_url.split("/");
                                              var doc_username=curr_url[4].substr(0,curr_url[4].indexOf("$"));
                                              console.log(doc_username);
                                              Url+="/"+doc_username+"/"+ipfsHash;
                                              //swal(Url);
                                              var post_url=window.location.href;
                                              post_url+="/"+"sendIpfsHash";
                                              var data={
                                                patient_email:web3.toAscii(result),
                                                urlipfs:Url
                                              }
                                              $.ajax({
                                                type:"POST",
                                                url:post_url,
                                                data:data,
                                                dataType:"JSON",
                                                success:function(msg)
                                                {
                                                    if(msg.success)
                                                        swal('Success',msg.msg,'success');
                                                    else
                                                        swal('Oops','Error occured','error');

                                                },
                                                error:function(error)
                                                {
                                                    swal('Oops','Something bad happened','error');
                                                }
                                              })
                                          }
                                          else
                                            swal('Error');
                                          })
                                               }
                                              else
                                                swal('Error');
                                              });
                                            


                                                                                        

                                          }


                                            })
                                        }
                                          


                                    } 
                                    else
                                        swal('Oops', 'Something bad happened!', 'error');
                                        
                                });
                            }
                            else
                            {
                                swal('Oops', 'Access still not granted.Make sure you requested the correct patient.Also check that you are logged in to your metamask account', 'error');
                            }
                        } else
                            swal('Oops', 'Something bad happened', 'error');



                    });
                } else {
                    swal('Oops', 'Something bad happened', 'error');
                }
            });
    }
    $('#patient_log').click(function() {
        if (web3.eth.accounts[0] == undefined) {
            swal('', 'Please make sure  you are logged in to your metamask account', 'warning');
        } else {

            Medical.getPatient(web3.eth.accounts[0], function(error, result) {
                if (!error) {
                    if (result[0] != '' && result[1] != 0) {

                        result[0]=web3.toAscii(result[0]);
                        var make_url = result[0].substr(0, result[0].indexOf('@')) + "$" + web3.eth.accounts[0].substr(0, 5);
                        var url = "http://localhost:3000/patient/" + make_url;
                        swal({
                            title: "You're registered",
                            type: "success",
                            text: "Click ok to explore your profile page"
                        }).then(result => {
                            if (result.value) {
                                window.location.href = url;
                                Medical.getPatient(web3.eth.accounts[0], function(error, result) {
                                    if (!error) {
                                        if (result[0] == '' || result[1] == '' || web3.eth.accounts[0] == undefined) {
                                            swal('Oops', 'Please login to your metamask account', 'error');
                                        } else {
                                            $('#user_n').html(result[0]);
                                            $('#adhar_id').html(result[1].toString());
                                            $('#public_Add').html(web3.eth.accounts[0]);
                                        }
                                    } else
                                        console.log(error);
                                });

                            } else {

                            }
                        });
                    } else
                        swal('You are not registered', '', 'error');
                }

            })
        }
    });
    $('#doctor_log').click(function() {
        if (web3.eth.accounts[0] == undefined) {
            swal('', 'Please make sure  you are logged in to your metamask account', 'warning');
        } else {
            Medical.getDoctor(web3.eth.accounts[0], function(error, result) {
                if (!error) {
                    if (result[0] != '' && result[1] != 0) {
                        result[0]=web3.toAscii(result[0]);
                        var make_url = result[0].substr(0, result[0].indexOf('@')) + "$" + web3.eth.accounts[0].substr(0, 5);
                        var url = "http://localhost:3000/doctor/" + make_url;
                        swal({
                            title: "You're registered",
                            type: "success",
                            text: "Click ok to explore your profile page"
                        }).then(result => {
                            if (result.value) {
                                window.location.href = url;


                            } else {

                            }
                        });


                    } else
                        swal('You are not registered', '', 'error');
                }

            })
        }

    });
    $('#p_reg').click(function(event) {
        if (web3.eth.accounts[0] == undefined) {
            swal('', 'Please make sure  you are logged in to your metamask account', 'warning');
        } else 


        {
            event.preventDefault();
            var email_p = $('#InputEmail_p').val();
            var adhar_id = $('#InputAdhar_p').val();
          
            if (email_p == '' || adhar_id == '')
                swal("", "Please fill the form", "error");
            else 
            {
                 
             

             var account_Address = web3.eth.accounts[0];

                console.log(email_p);
                console.log(adhar_id);
                var username = email_p.substr(0, email_p.indexOf('@'));
                console.log(username);

                $('#InputAdhar_p').val('');
                $('#InputEmail_p').val('');
                Medical.setPatient.sendTransaction(email_p, adhar_id, username, {
                    from: web3.eth.accounts[0],
                    gas: 4000000
                }, function(error, result) {
                    if (!error)
                        swal('Data saving in blockchain(patient)', result, 'success');
                    else
                        swal('', 'Error occured', 'failure');
                });
                    


























                  












               
              

            }
        }
    });
    $('#d_reg').click(function(event) 
    {
        if (web3.eth.accounts[0] == undefined) {
            swal('', 'Please make sure  you are logged in to your metamask account', 'warning');
        } else {
            event.preventDefault();
            var email_d = $('#InputEmail_d').val();
            var adhar_id_d = $('#InputAdhar_d').val();
           
            if (email_d == '' || adhar_id_d == '' )
                swal('', 'Please fill the form', "error");
            else

            {
              

               
  
             
           var account_Address = web3.eth.accounts[0];
                console.log(email_d);
                console.log(adhar_id_d);
                var username = email_d.substr(0, email_d.indexOf('@'));
                console.log(username);

                $('#InputAdhar_d').val('');
                $('#InputEmail_d').val('');
                Medical.setDoctor.sendTransaction(email_d, adhar_id_d, username,{
                    from: web3.eth.accounts[0],
                    gas: 4000000
                }, function(error, result) {
                    if (!error)
                        swal('Data saving in blockchain(doctor)', result, 'success');
                    else
                        swal('', 'Error occured', 'failure');
                });



   

            





























               
            }
        }
    })

})