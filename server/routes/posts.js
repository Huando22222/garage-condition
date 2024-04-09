const express = require("express");
const PostsController = require("../controllers/PostsController");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// return cb(null, "../public/images");
		return cb(null, path.join(__dirname, "../public/images"));
	},
	filename: function (req, file, cb) {
		return cb(null, `${Date.now()}_${file.originalname}`);
	},
});

const upload = multer({ storage });

router.post("/new", upload.single("file"), PostsController.NewPost);
// router.get("/", express.static(path.join(__dirname, "../public/images")), PostsController.GetPost);
router.get("/", PostsController.GetPost);


module.exports = router;
