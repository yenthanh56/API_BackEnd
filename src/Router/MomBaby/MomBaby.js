const router = require("express").Router();
const momBabyController = require("../../Controllers/MomBaby/MomBabyController");

router.post("/create", momBabyController.createMomBaby);
router.get("/:id", momBabyController.id);
router.get("/", momBabyController.getAllMomBaby);

module.exports = router;
