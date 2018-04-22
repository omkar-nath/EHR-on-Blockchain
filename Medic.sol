pragma solidity ^0.4.19;
contract Medical
{
  
    struct Patient
    {
        bytes32 email_p;
        uint adhar_id;
        bytes32 public_key;
    }
    struct Doctor
    {
        bytes32 email_d;
        uint adhar_id_d;
       bytes32 public_key;
    }
  
    mapping(address=>Patient) public PatientStruct ;
    mapping(address=>Doctor) public DoctorStruct;
    mapping(bytes32=>address) public PatientAddressMap;
    mapping(bytes32=>bytes32) public PatientPublicKey;
    mapping(bytes32=>bytes32) public DoctorPublicKey;
   
    
    mapping(address=>mapping(address=>uint)) patientgrantaccess;
    mapping(bytes32=>bytes32) public usernameEmail;
    mapping(bytes32=>address) public DoctorAddressMap;
    function setPatient(bytes32 email_id,uint adhar_id,bytes32 username,bytes32 public_key) public returns(bool success)
    {
        PatientStruct[msg.sender].email_p=email_id;
        PatientStruct[msg.sender].adhar_id=adhar_id;
        PatientAddressMap[keccak256(username)]=msg.sender;
        PatientStruct[msg.sender].public_key=public_key;
        usernameEmail[keccak256(username)]=email_id;
        PatientPublicKey[username]=public_key;
        return true;
    }
    function getPatient(address patient_add) public constant returns(bytes32 email_p,uint adhar_id)
    {
        return (PatientStruct[patient_add].email_p,PatientStruct[patient_add].adhar_id);
    }
    function setDoctor(bytes32 email_id,uint adhar_id,bytes32 username,bytes32 public_key) public returns(bool success)
    {
        DoctorStruct[msg.sender].email_d=email_id;
        DoctorStruct[msg.sender].adhar_id_d=adhar_id;
        DoctorAddressMap[keccak256(username)]=msg.sender;
        DoctorStruct[msg.sender].public_key=public_key;
        DoctorPublicKey[username]=public_key;
        
        return true;
    }
    function getDoctor(address doctor_add) public constant returns(bytes32 email_d,uint adhar_id_d)
    {
        return(DoctorStruct[doctor_add].email_d,DoctorStruct[doctor_add].adhar_id_d);
    }
    function getPatientAddress(bytes32 username) public constant returns(address)
    {
        return PatientAddressMap[keccak256(username)];
    }
    function getDoctorAddress(bytes32 username) public constant returns(address)
    {
        return DoctorAddressMap[keccak256(username)];
    }
    function getPatientEmail(bytes32 username) public constant returns(bytes32)
    {
        return usernameEmail[keccak256(username)];
    }
    function grantAccess(address doc_address) public  returns(bool)
    {
        
        patientgrantaccess[msg.sender][doc_address]=1;
        return true;
 
       
    }
    function checkstatus(address doc_address)view public returns(bool)
    {
        if(patientgrantaccess[msg.sender][doc_address]!=1)
        return true;
        else
        return false;
    }
    function checkstatusdoc(address patient_address) view public returns(bool)
    {
        if(patientgrantaccess[patient_address][msg.sender]==1)
        return true;
        else
        return false;
    }
    function getPatientPublicKey(bytes32 username) public constant returns(bytes32)
    {
        return PatientPublicKey[username];
    }
    function getDoctorPublicKey(bytes32 username) public constant returns(bytes32)
    {
        return DoctorPublicKey[username];
    }
  
  

    
   
    
}