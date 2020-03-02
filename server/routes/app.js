const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {getAllBlog} = require('../controllers/appController')
/* GET home page. */
router.get('/blogs/:userId?', getAllBlog);

module.exports = router;
