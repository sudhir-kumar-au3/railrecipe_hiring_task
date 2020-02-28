const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {addUser, userLogin, getUser} = require('../controllers/userController')

/* GET users listing. */
router.get('/', auth, getUser);

router.post('/addcreator', addUser);

router.post('/login', userLogin);


module.exports = router;
