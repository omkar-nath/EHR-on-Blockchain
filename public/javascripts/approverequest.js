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
 } else {

    let Url=window.location.href;
    let patient_username=Url.split("/")[4].substr(0,Url.split("/")[4].indexOf('$'));
     Medical.getPatientAddress(patient_username, function (error, result) {

         if (!error) {
             if (web3.eth.accounts[0]!=result)
                {
                	 swal('Oops','Please switch to your metamask account','error');
                }

             else {
                 swal({
                         title: 'Approve request?',
                         text: "Please click ok to approve request!",
                         type: 'warning',
                         showCancelButton: true,
                         confirmButtonColor: '#3085d6',
                         cancelButtonColor: '#d33',
                         confirmButtonText: 'Approve!'
                     })
                     .then((result) => {
                         if (result.value) {
                             let curr_url = window.location.href;
                             var _url = curr_url.substring(curr_url.indexOf('/', 8));
                             var new_url = _url.substring(_url.indexOf('/', 9));
                             var doc_user = new_url.substring(1, new_url.indexOf('$'));
                             Medical.getDoctorAddress(doc_user, function (error, data) {
                                 if (!error) {
                                     Medical.checkstatus(data, function (error, re) {
                                         if (!error) {
                                             if (re == true) {
                                                 Medical.grantAccess.sendTransaction(data, {
                                                     from: web3.eth.accounts[0],
                                                     gas: 4000000
                                                 }, function (error, result) {
                                                     if (!error) {




                                                         swal('Sweet', 'Access granted', 'success');


                                                     } else {
                                                         swal('Oops', 'Something bad happened', 'error');
                                                     }

                                                 });
                                             } else {
                                                 swal('Oops', 'Access already granted', 'warning');
                                             }
                                         } else {
                                             swal('Oops', 'Something wrong happened', 'error');
                                         }
                                     });
                                 }
                             });


                         } else {
                             window.location.href = "http://localhost:3000";
                         }

                     })
             }

         }

     });
 }

 });