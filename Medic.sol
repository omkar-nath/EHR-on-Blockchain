pragma solidity ^0.4.19;
contract Medical
{
  
    struct Patient
    {
        string email_p;
        uint adhar_id;
        string public_key;
    }
    struct Doctor
    {
        string email_d;
        uint adhar_id_d;
       string public_key;
    }
    mapping(address=>Patient) public PatientStruct ;
    mapping(address=>Doctor) public DoctorStruct;
    mapping(bytes32=>address) public PatientAddressMap;
    mapping(bytes32=>string) public PatientPublicKey;
    mapping(bytes32=>string) public DoctorPublicKey;
    mapping(address=>mapping(address=>string)) public DoctorPatientipfsHash;
    
    mapping(address=>mapping(address=>uint)) patientgrantaccess;
    mapping(bytes32=>string) public usernameEmail;
    mapping(bytes32=>address) public DoctorAddressMap;
    function setPatient(string email_id,uint adhar_id,bytes32 username,string public_key) public returns(bool success)
    {
        PatientStruct[msg.sender].email_p=email_id;
        PatientStruct[msg.sender].adhar_id=adhar_id;
        PatientAddressMap[keccak256(username)]=msg.sender;
        PatientStruct[msg.sender].public_key=public_key;
        usernameEmail[keccak256(username)]=email_id;
        PatientPublicKey[username]=public_key;
        return true;
    }
    function getPatient(address patient_add) public constant returns(string email_p,uint adhar_id)
    {
        return (PatientStruct[patient_add].email_p,PatientStruct[patient_add].adhar_id);
    }
    function setDoctor(string email_id,uint adhar_id,bytes32 username,string public_key) public returns(bool success)
    {
        DoctorStruct[msg.sender].email_d=email_id;
        DoctorStruct[msg.sender].adhar_id_d=adhar_id;
        DoctorAddressMap[keccak256(username)]=msg.sender;
        DoctorStruct[msg.sender].public_key=public_key;
        DoctorPublicKey[username]=public_key;
        
        return true;
    }
    function getDoctor(address doctor_add) public constant returns(string email_d,uint adhar_id_d)
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
    function getPatientEmail(bytes32 username) public constant returns(string)
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
    function getPatientPublicKey(bytes32 username) public constant returns(string)
    {
        return PatientPublicKey[username];
    }
    function getDoctorPublicKey(bytes32 username) public constant returns(string)
    {
        return DoctorPublicKey[username];
    }
    function setipfs(address patient,address doctor,string ipfsHash) public returns(bool success)
    {
        DoctorPatientipfsHash[patient][doctor]=ipfsHash;
        
        return true;
    }
    function getencryptedHash(address patient,address doctor) view public returns(string)
    {
        return DoctorPatientipfsHash[patient][doctor];
    }
  

    
   
    
}