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
                "name": "date",
                "type": "bytes32"
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
        "name": "getEHRDetails",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
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
            },
            {
                "name": "",
                "type": "uint256"
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
                "name": "date",
                "type": "bytes32"
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
    Medical = MedicoContract.at("0x1923a2334e5045dd033438e35df19034de04704f");

   $('#show_docs').click(function(event)
   {
    if (web3.eth.accounts[0] == undefined) {
     swal('', 'Please make sure  you are logged in to your metamask account', 'warning');
 }
 else
 {
       event.preventDefault();
       let username=$('#patient_user_read').val();
       if(username=='')
       {
        swal('Oops','Please enter the username','error');
    }
    else
    {
        var patient_username_is=username;
        var curr_url=window.location.href;
        curr_url=curr_url.split("/");
        console.log(curr_url);
        var doc_username=curr_url[4].substring(0,curr_url[4].indexOf("$"));
        var doctor_request=curr_url[4].substring(0,curr_url[4].indexOf("$"));
        console.log(doc_username);
        Medical.getDoctorAddress(doc_username,function(err,addre)
        {
            if(!err)
            {
               if(web3.eth.accounts[0]==addre)
               {
                   Medical.getPatientAddress(username,function(err,result)
        {
            if(!err)
            {
                var patient_address=result;
                Medical.checkstatusdoc(patient_address,function(err,re)
                {
                    if(!err)
                    {
                        if(re==true)
                        {
                          //swal('Sweet ','You can see the patient"s documents','success');
                          Medical.getEHRDetails(patient_address,function(err,result_array)
                          {
                              if(!err)
                              {
                                if(result_array.length<=0)
                                    swal('Sorry','This patient has no records to show','error');
                                else
                                {
                                     $('#ehr_list').css("display","block");
                                      for(var j=0;j<result_array[0].length;j++)
                                        {
                                            var doc_username=web3.toAscii(result_array[0][j]);
                                            console.log(doc_username);
                                            var dateofupload=web3.toAscii(result_array[1][j]);
                                            console.log(dateofupload);
                                            var file=web3.toAscii(result_array[2][j]+result_array[3][j]+result_array[4][j]);
                                            var list_items=$('<li></li>');
                                              var doc_usr=$('<code> </code> ');
                                              doc_usr.html(doc_username);
                                            var dateof=$('<code> </code>');
                                            dateof.html(dateofupload);
                                            var but=$('<button type="button"  class="btn btn-primary">Primary</button>');
                                            but.attr("id",file);
                                            but.html('Read EHR');
                                            var filehash=$('<code></code>');
                                            filehash.html(file);
                                             list_items.append('<h6>Uploaded by :</h6>').append(doc_usr);
                                             list_items.append('<h6>Date of upload</h6>').append(dateof);
                                             list_items.append('<h6>File Hash<h6>').append(filehash);
                                             list_items.append('<br>');
                                             list_items.append(but);

                                          

                                        
                                                $('#ehr_list').append(list_items);
                                           $('.btn-primary').click(function()
                                           {  
                                              var ipfs_file_encrypted=$(this).attr('id');
                                              //swal(ipfs_file_encrypted);

                                              Medical.getDoctorAddress(doctor_request,function(err,ad)
                                              {
                                                  if(!err)
                                                  {
                                                     Medical.getDoctor(ad,function(err,doc_details)
                                                     {
                                                        if(!err)
                                                        {
                                                            Medical.getPatientAddress(patient_username_is,function(err,p_addr)
                                                            {
                                                                if(!err)
                                                                {
                                                                 var make_url=window.location.href;
                                                                
                                                            make_url=make_url.split("/");
                                                            console.log(make_url);
                                                            var doc_url=make_url[4].substring(0,make_url[4].indexOf("$"));
                                                            var patient_redirect="http://localhost:3000/patient";
                                                            patient_redirect+="/"+patient_username_is+"$"+p_addr.substring(0,5)+"/"+doc_url;
                                                            var data={
                                                                doc_email:web3.toAscii(doc_details[0]),
                                                                encrypted_hash:ipfs_file_encrypted,
                                                                patient_url:patient_redirect
                                                            };
                                                            var Url=window.location.href;
                                                            Url+="/"+"askdecrypted";
                                                            $.ajax({
                                                                type:"POST",
                                                                data:data,
                                                                url:Url,
                                                                dataType:"JSON",
                                                                success:function(msg)
                                                                {
                                                                     if(msg.success)
                                                                        {
                                                                             swal('Here');
                                                                        }
                                                                },
                                                                error:function(err)
                                                                {
                                                                    swal('Oops','Error occured','error');

                                                                }
                                                            });
                                                        }
                                                                 
                                                            });
                                                           
                                                        }
                                                        else
                                                        {
                                                            swal('Oops','Doctor email cannot retrievd','error');
                                                        }
                                                     })
                                                  }
                                                  else
                                                    swal('Oops','Doctor"s address not retrieved','error');
                                              });
                                           })
                                              



                                        }
                                    
                                   
                                }
                              }
                          })
                        }
                        else
                        {
                            swal('Oops','You don"t have access to patient"s EHR.Please request first','error');
                        }

                    }
                    else
                    {
                        swal('Oops','Access Status can"t check now','error');
                    }
                })
            }
            else
                swal('Oops','Patient address not retrieved','error');
        })
               }
               else
               {
                swal('Oops','Please switch to your metamask account first','warning');
               }
            }
            else
            {
                swal('Oops','Doctor"s address not retrieved','error');
            }
        })
       
    }
}
   });


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