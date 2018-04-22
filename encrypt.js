const EthCrypto = require('eth-crypto');
var private_key='667dad73799487aa4039931fca2b6a2fc224f5ec6876e2517b7e75b799890b3b';
const publicKey = EthCrypto.publicKeyByPrivateKey(private_key);
console.log('Public key is ',publicKey);
const address = EthCrypto.publicKey.compress(publicKey);

console.log('Compressed pnce key is ',address);
const base64 = EthCrypto.hex.compress(address, true);
console.log('Compressed twice public key is : ',base64);
const decom1=EthCrypto.hex.decompress(base64, true);
const decom2=decom1.substr(2,decom1.length)
const decom3=EthCrypto.publicKey.decompress(decom2);
const message = EthCrypto.decryptWithPrivateKey('97cd550403457d8f9a160c9bbba380b87666afe66eebeec792c85b5431d5eeec', 
	  { iv: 'e74ae712476b64b94ad4d63c7000dff4',
  ephemPublicKey: '047caddd143a4179a5cdad526aa9b36791d49f9bad315740a47b5ea14d13e45e40c1590d6dfdb20b0ee68f39d30cc021004dd0cfe2b4699fb4d56904c39c6674fa',
  ciphertext: '1f278ada5ba0eb412d0fecfd95953b0e',
  mac: '8456cc62bd558594e20e10765a4d3878c5b4d59afc67775f6a8ca2a2421bab7f' } );
var pro=Promise.resolve(message);
pro.then(function(value)
{
	console.log(value);
})
const str = EthCrypto.cipher.parse('7926e48f052374098997b199d28de83a02839988b2ebe4531b73770fc2c95398b4f624ea8a34509eae8ba2dc9025712bcf50923efc82b5e74d6a9a3855352cf83abfdeeb527e3a3d539d35095ded1e6f4f22ad7e1037b52a9b5d9e9698dc274163670592030f04e33167c1c1ae654ea52dd89e14522f0eecdbb7c981774a60f780')
console.log('HEllo ',str);