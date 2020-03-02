const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {addUser, userLogin, getUser, addBlog} = require('../controllers/userController')

/* GET users listing. */
router.get('/', auth, getUser);

router.post('/register', addUser);

router.post('/login', userLogin);

router.post('/addblog', auth, addBlog)


module.exports = router;
