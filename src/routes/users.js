var express = require('express');
const { getUser, saveUser } = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', getUser);
router.post('/save', saveUser)

module.exports = router;
