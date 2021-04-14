const router = require("express").Router();

const { readAll } = require("../controllers/postulant");

router.get("/postulant", readAll);

module.exports = router;
