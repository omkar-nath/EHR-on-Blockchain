pragma solidity ^0.4.19;
contract Medical
{
  
    struct Patient
    {
        bytes32 email_p;
        uint adhar_id;
       
    }
   
    struct Doctor
    {
        bytes32 email_d;
        uint adhar_id_d;
        
        
       
       
    }
    struct IpfsHash
    {
        bytes32 first;
        bytes32 second;
        bytes32 third;
    }
   struct EhrDocument
   {
       bytes32 uploadedBy;
       bytes32 belongsTo;
      bytes32 date;
       IpfsHash encryptedHash;
       
   }
    mapping(address=>Patient) public PatientStruct ;
    mapping(address=>Doctor) public DoctorStruct;
    mapping(bytes32=>address) public PatientAddressMap;
  
   mapping(address=>EhrDocument[]) public PatientDocs;
   
    
    mapping(address=>mapping(address=>uint)) patientgrantaccess;
    mapping(bytes32=>bytes32) public usernameEmail;
    mapping(bytes32=>address) public DoctorAddressMap;
    function setPatient(bytes32 email_id,uint adhar_id,bytes32 username) public returns(bool success)
    {
        PatientStruct[msg.sender].email_p=email_id;
        PatientStruct[msg.sender].adhar_id=adhar_id;
        PatientAddressMap[keccak256(username)]=msg.sender;
       
        usernameEmail[keccak256(username)]=email_id;
     
        return true;
    }
    function getPatient(address patient_add) public constant returns(bytes32 email_p,uint adhar_id)
    {
        return (PatientStruct[patient_add].email_p,PatientStruct[patient_add].adhar_id);
    }
    function setDoctor(bytes32 email_id,uint adhar_id,bytes32 username) public returns(bool success)
    {
        DoctorStruct[msg.sender].email_d=email_id;
        DoctorStruct[msg.sender].adhar_id_d=adhar_id;
        DoctorAddressMap[keccak256(username)]=msg.sender;
       
       
   
        
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
   
    function storeIpfs(bytes32 doc_username,bytes32 patient_username,bytes32 date,bytes32 first,bytes32 second,bytes32 third) public returns(bool success)
    { 
      // uint256 count= PatientStruct[msg.sender].count_doc;    
       EhrDocument storage doc;
       
       
        doc.uploadedBy=doc_username;
        doc.belongsTo=patient_username;
        doc.encryptedHash.first=first;
        doc.encryptedHash.second=second;
        doc.encryptedHash.third=third;
        doc.date=date;
        PatientDocs[msg.sender].push(doc);
      //  count++;
        return true;
    }
  
  function getEHRDetails(address patient_address) public constant returns(bytes32[],bytes32[],bytes32[],bytes32[],bytes32[] )
  {
     // EhrDocument[] docs = EhrDocument[](PatientDocs[patient_address].length);
      bytes32[] memory uploadedBy = new bytes32[](PatientDocs[patient_address].length);
      bytes32[] memory date = new bytes32[](PatientDocs[patient_address].length);
      bytes32[] memory part1 = new bytes32[](PatientDocs[patient_address].length);
      bytes32[] memory part2 = new bytes32[](PatientDocs[patient_address].length);
      bytes32[] memory part3 = new bytes32[](PatientDocs[patient_address].length);
      
     // EtherDocument storage doc = EtherDocument[]
      for (uint i=0; i < PatientDocs[patient_address].length ; i++)
      {
          EhrDocument storage doc = PatientDocs[patient_address][i];
          uploadedBy[i] = doc.uploadedBy;
          date[i] = doc.date;
          part1[i] = doc.encryptedHash.first;
          part2[i] = doc.encryptedHash.second;
          part3[i] = doc.encryptedHash.third;
      }
      return (uploadedBy, date, part1, part2, part3);
      
  }
  

    
   
    
}