const router = require("express").Router();

const {
  readAll,
  create,
  updateById,
  readById,
} = require("../controllers/Stall");

router.get("/stall", readAll);
router.post("/stall", create);
router.put("/stall/:id", updateById);
router.get("/stall/:id", readById);

module.exports = router;
