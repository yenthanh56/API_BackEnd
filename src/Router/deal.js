const router = require("express").Router();
const dealController = require("../Controllers/dealHotController");

router.post("/create", dealController.createDealHot);
router.get("/:id", dealController.id);
router.get("/", dealController.getAllDealHot);

module.exports = router;
