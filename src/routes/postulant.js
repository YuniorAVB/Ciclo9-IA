const router = require("express").Router();

const {
  readAll,
  readStall,
  getNroTraking,
} = require("../controllers/Postulant");

router.get("/postulant", readAll);

router.get("/postulant/stall/:id", readStall);

router.get("/postulant/tracking/:id", getNroTraking);

module.exports = router;
