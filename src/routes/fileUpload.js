const router = require("express").Router();

const { uploadCV } = require("../controllers/FileUpload");

router.post("/upload/cv", uploadCV);

module.exports = router;
