var crypto = require('crypto');
console.log(crypto.randomBytes(16))
console.log(crypto.randomBytes(16).toString('hex'));