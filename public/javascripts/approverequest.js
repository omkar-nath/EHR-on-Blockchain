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
				"type": "string"
			},
			{
				"name": "adhar_id",
				"type": "uint256"
			},
			{
				"name": "username",
				"type": "bytes32"
			},
			{
				"name": "public_key",
				"type": "string"
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
				"name": "patient",
				"type": "address"
			},
			{
				"name": "doctor",
				"type": "address"
			},
			{
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"name": "setipfs",
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
				"type": "string"
			},
			{
				"name": "adhar_id",
				"type": "uint256"
			},
			{
				"name": "username",
				"type": "bytes32"
			},
			{
				"name": "public_key",
				"type": "string"
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
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "DoctorPatientipfsHash",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
		"name": "DoctorPublicKey",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"type": "string"
			},
			{
				"name": "adhar_id_d",
				"type": "uint256"
			},
			{
				"name": "public_key",
				"type": "string"
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
				"type": "string"
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
				"name": "username",
				"type": "bytes32"
			}
		],
		"name": "getDoctorPublicKey",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "patient",
				"type": "address"
			},
			{
				"name": "doctor",
				"type": "address"
			}
		],
		"name": "getencryptedHash",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"type": "string"
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
				"type": "string"
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
		"name": "getPatientPublicKey",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"type": "bytes32"
			}
		],
		"name": "PatientPublicKey",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"type": "string"
			},
			{
				"name": "adhar_id",
				"type": "uint256"
			},
			{
				"name": "public_key",
				"type": "string"
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
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
MedicoContract=web3.eth.contract(abi);
Medical=MedicoContract.at("0xd12efe7a45848b47a8ebc09519aba451318022b3");

 if(web3.eth.accounts[0]==undefined)
   {
   	swal('','Please make sure  you are logged in to your metamask account','warning');
   }
   else
   {
   	 Medical.getPatient(web3.eth.accounts[0],function(error,result)
    {
    	if(!error)
    	{
    		if(result[0]==''||result[1]=='')
    		{
    			swal('Oops','Please change to your metamask account','error');
    		}
    		else
    {
    	swal({
  title: 'Approve request?',
  text: "Please click ok to approve request!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Approve!'
}).then((result) => {
  if (result.value) {
   let curr_url=window.location.href;
   var _url=curr_url.substring(curr_url.indexOf('/', 8));
   var new_url=_url.substring(_url.indexOf('/',9));
   var doc_user=new_url.substring(1,new_url.indexOf('$'));
   Medical.getDoctorAddress(doc_user,function(error,data)
   {
   	if(!error)
   	{
   		Medical.checkstatus(data,function(error,re)
   		{
   			if(!error)
   			{
   			if(re==true)
   			{
              Medical.grantAccess.sendTransaction(data,{
	 			from:web3.eth.accounts[0],
	 			gas:4000000},function(error,result)
	 			{
   		     if(!error)
   		     {

               


















   		     	swal('Sweet','Access granted','success');

                
   		     }
   		     else
   		     {
   		     	swal('Oops','Something bad happened','error');
   		     }

   		});
          }
          else
          {
          	swal('Oops','Access already granted','warning');
          }
   	}
   	else
   	{
   		swal('Oops','Something wrong happened','error');
   	}
   });
   			}
   		});
   		
   
}
    else
    {
    	window.location.href="http://localhost:3000";
    }
  
})
    }
    		
    }

});
 }    

});