var express = require('express');
const {getUser} = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', getUser);

module.exports = router;
