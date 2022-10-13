const router = require("express").Router();
const cheaperController = require("../../Controllers/Cheaper/CheaperController");

router.post("/create", cheaperController.createCheaper);
router.get("/:id", cheaperController.id);
router.get("/", cheaperController.getAllCheaper);

module.exports = router;
