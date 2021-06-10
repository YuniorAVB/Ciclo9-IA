const router = require("express").Router();

const { uploadCV, uploadVideo } = require("../controllers/FileUpload");

router.post("/upload/cv", uploadCV);

router.post("/upload/video", uploadVideo);

module.exports = router;
