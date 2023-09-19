const jwt = require('jsonwebtoken');

const make = function (user) {
    return new Promise(function (resolve, reject) {
        jwt.sign({ data: user }, process.env.SIGNATURE_KEY, {
            algorithm: 'HS256',
            expiresIn: process.env.TOKEN_TIME_LIFE
        }, function (err, token) {
            if (err) {
                return reject(err)
            }
            return resolve(token)
        })
    })
}

const check = function (token) {
    return new Promise(async function (resolve, reject) {
        await jwt.verify(token, process.env.SIGNATURE_KEY, function (err, data) {
            console.log('check:', token, err, data)
            if (err) {
                return reject(err);
            }
            resolve(data);
        })
    })
}

const getToken = function (req, res, next) {

    const bearerHeader = req.headers['authorization'];
    // // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken
        next()
    } else {
        res.json({
            message: "Không xác thực token"
        });
    }
}

module.exports = {
    make: make,
    check: check,
    getToken: getToken,
}