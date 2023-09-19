const  jwt = require('jsonwebtoken');

let make = function(user) {
    return new Promise(function(resolve, reject) {
        jwt.sign({data: user}, process.env.SIGNATURE_KEY, {
            algorithm: 'HS256',
            expiresIn: process.env.TOKEN_TIME_LIFE
        }, function(err, token) {
            if (err) {
                return reject(err)
            }
            return resolve(token)
        })
    })
}

module.exports = {
    make: make
}