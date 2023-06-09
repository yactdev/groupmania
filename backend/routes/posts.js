const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const auth = require('../middlewares/auth');

router.post('/', auth, postsController.createPost);
router.get('/', auth, postsController.allPosts);
router.delete('/', postsController.deletePost);
module.exports = router;
