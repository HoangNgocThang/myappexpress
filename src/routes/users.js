var express = require('express');
const { getUser, saveUser, updateUser, loginUser } = require('../controllers/users');
const _JWT = require('../config/_JWT');
var router = express.Router();

/* GET users listing. */
router.get('/', getUser);
router.post('/save', _JWT.getToken , saveUser)
router.post('/update/:id', updateUser)
router.post('/login', loginUser)

module.exports = router;
