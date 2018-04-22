var express = require('express');
var router = express.Router();
const EthCrypto = require('eth-crypto');

router.get('/', function(req, res, next) {
  res.render('new_patient');
});

module.exports = router;
