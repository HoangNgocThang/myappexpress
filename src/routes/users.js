var express = require('express');
const { getUser, saveUser, updateUser } = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', getUser);
router.post('/save', saveUser)
router.post('/update/:id', updateUser)

module.exports = router;
