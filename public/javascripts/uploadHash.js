$(document).ready(function()
{
	abi=[
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
MedicoContract=web3.eth.contract(abi);
Medical=MedicoContract.at("0x1923a2334e5045dd033438e35df19034de04704f");
 if (web3.eth.accounts[0] == undefined) {
     swal('hsbhash', 'Please make sure  you are logged in to your metamask account', 'warning');
 }
     else
     {

 






      var current=window.location.href;
      current=current.split("/");
      if(current[6]=="encrypted")
      {
         let patient_username=current[4].substr(0,current[4].indexOf("$"));
         Medical.getPatientAddress(patient_username,function(err,addr)
         {
         	if(!err)
         	{
                 if(web3.eth.accounts[0]==addr)
                 {

                      swal({
        				title:'Please enter the password and encrypted hash to decrypt',
        				html:'<input type="text" class="form-control" id="encrypted" placeholder="Enter encrypted hash"><br><input type="text" class="form-control" id="passkey" placeholder="Enter password"> </input> <br> <p class="mb-0" style="color:red"><strong>Warning:</strong> Never disclose this key. Anyone with your password can take steal any assets held in your account.Also store this password somewhere else.Loosing this will result in failure of access of your records</p>'


        				,
        				confirmButtonText:"Decrypt and send document",

        				type:'warning'


        			}).then((result)=>{
        				 var passkey=$('#passkey').val();
        				 var encrypted=$('#encrypted').val();
        				 if(passkey==''||encrypted=='')
        				 {
        				 	swal('Oops','Please refresh the page and enter password','error');
        				 	return;
        				 }
        				 else
        				 {
        				 	var make_url=current[0]+"/"+current[1]+"/"+current[2]+"/"+current[3]+"/"+current[4]+"/"+"decryptedHash";
        				 	console.log(make_url);
        				 	var data={
        				 		encrypt_ipfs:encrypted,
        				 		passkey:passkey
        				 	};


        				 	 $.ajax({
        				 	 	type:"POST",
        				 	 	url:make_url,
        				 	 	data:data,
        				 	 	dataType:"JSON",
        				 	 	success:function(msg)
        				 	 	{
        				 	 		if(msg.success)
        				 	 		{
        				 	 			swal('success',msg.msg,'success');
        				 	 		}
        				 	 		
        				 	 	},
        				 	 	error:function(err)
        				 	 	{
        				 	 		console.log(err);
        				 	 	}
        				 	 })
                     

                 
         	
         	}
         });
        		}

         else
                 	swal('Oops','Please switch to your metamask account','error');

      }
      else
         	{
         		swal('Oops','Patient email address not retrieved','error');
         	}

  });
}
      else
      {













     	var curr_url=window.location.href;
     	console.log(curr_url);

     	curr_url=curr_url.split("/");
     	console.log(curr_url);
     	var fileHash=curr_url[6];
     	var patient_username=curr_url[4].substr(0,curr_url[4].indexOf("$"));
     	var doctor_username=curr_url[5];
     	console.log(fileHash);
     	console.log(patient_username);
     	console.log(doctor_username);


        Medical.getPatientAddress(patient_username,function(err,result)
        {
        	if(!err)
        	{
        		if(web3.eth.accounts[0]==result)
        		{
        			swal({
        				title:'Please enter the password to encrypt',
        				html:'<input type="text" class="form-control" id="passkey" placeholder="Enter password"> </input> <br> <p class="mb-0" style="color:red"><strong>Warning:</strong> Never disclose this key. Anyone with your password can take steal any assets held in your account.Also store this password somewhere else.Loosing this will result in failure of access of your records</p>'


        				,
        				confirmButtonText:"Encrypt document",

        				type:'warning'


        			}).then((result)=>{
        				 var passkey=$('#passkey').val();
        				 if(passkey=='')
        				 {
        				 	swal('Oops','Please refresh the page and enter password','error');
        				 	return;
        				 }
        				 else
        				 	{
        				 				var make_url=curr_url[0]+"/"+curr_url[1]+"/"+curr_url[2]+"/"+curr_url[3]+"/"+curr_url[4]+"/"+"encrypthash";
     	console.log(make_url);
     	var data={
     		ipfsHash:fileHash,
     		passkey:passkey
     	};
     	$.ajax({
     		type:"POST",
     		url:make_url,
     		data:data,
     		dataType:"JSON",
     		
     		success:function(msg)
     		{
                if(msg.success)
                {
                	
                	var encrypt_hash=msg.encrypted_hash;
                	var first=encrypt_hash.substring(0,encrypt_hash.length/3);
                	
                	
                	
                	var second=encrypt_hash.substring((encrypt_hash.length)/3,(encrypt_hash.length*2)/3);
                	var third=encrypt_hash.substring((encrypt_hash.length*2)/3,encrypt_hash.length);
                	console.log(first);
                	console.log(second);
                	console.log(third);
                	console.log('After concatenation ',first+second+third);
                	console.log('Befor concatenation ',encrypt_hash);

                	var date=new Date();
                	var day=date.getDate();
                	var year=date.getFullYear();
                	var month=date.getMonth();
                	console.log('Date is ',day,month,year)
                	console.log(patient_username);
                	console.log(doctor_username);
                	var dateofUpload=day+"/"+month+"/"+year;
                	Medical.storeIpfs.sendTransaction(doctor_username,patient_username,dateofUpload,first,second,third,function(err,result)
                	{
                		if(!err)
                		{
                			swal('Sweet','File encrypted hash stored','success');
                			
                		}
                		else
                			swal('Oops','Something bad happened','error');
                	});
                }
     		},
     		error:function(err)
     		{
     			swal('Oops','Error occured','error');
     		}
     	})

        				 	}

        			});
        	
        		}
        		else
        			swal('Oops','Please switch to your metamsk account','warning');
        	}
        })





}

     	
     }
});