const {Router} = require("express");
const {listPosts} = require('../controllers/postsController');

const router = Router();

router.get("/posts", listPosts);

module.exports = router