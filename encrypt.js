const ecies = require("eth-ecies");

const publicKey = '4b5e53aaaaa65404a819ddde974ec3070f7b00924e5a20e9f647f003f6b3cb62b5f7313e8bba34c9383599790cedbd81123d9b879ee745578e73ec20e468c4fd';
const privateKey = '595dd0440e3d56884bb301c77070143ca1516087138a7a3facc61cf70182b6a4';
const data = 'QmVQsEnH6MaKomKaxNWGaPWwT8E97zHMSs3hVft9vW1nzk';

function encrypt(publicKey, data) {
    let userPublicKey = new Buffer(publicKey, 'hex');
    console.log(userPublicKey);
    let bufferData = new Buffer(data);

    let encryptedData = ecies.encrypt(userPublicKey, bufferData);
    console.log(encryptedData.toString('base64'));

    return encryptedData.toString('base64');
}
function decrypt(privateKey, encryptedData) {
    let userPrivateKey = new Buffer(privateKey, 'hex');
    let bufferEncryptedData = new Buffer(encryptedData, 'base64');

    let decryptedData = ecies.decrypt(userPrivateKey, bufferEncryptedData);
    
    return decryptedData.toString('utf8');
}

var encryptedtext=encrypt(publicKey,data);
console.log(encryptedtext);
console.log(decrypt(privateKey,encryptedtext))


$.ajax({
     url: current_url,
      type: 'POST',
     data: make_url,
     dataType: 'JSON',
     success: function(msg) {
      if (msg.success) {
       swal('Sweet', 'Email address retrieved', 'success');
           }
          },
       error: function(error) {
        swal('Oops', 'Some error occured', 'error');
               }
          });