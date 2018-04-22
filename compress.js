var LZUTF8 = require('lzutf8');
LZUTF8.compressAsync('U2FsdGVkX1/DJ7YRq+DWTpoApl46qD7yCI92ryDeE9UkfFeR9Gv1Rq1Cc9lmV7T9ZEjfuvN++FIKOkKn3RPMzA==', {outputEncoding: "String"}, function (result, error) {
    if (error === undefined)
        console.log("Data successfully compressed and encoded to " + result + " characters");
    else
        console.log("Compression error: " + error.message);
});