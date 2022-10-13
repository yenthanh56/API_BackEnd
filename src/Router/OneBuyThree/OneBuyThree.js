const router = require("express").Router();
const oneBuyThreeController = require("../../Controllers/OneBuyThree/OneBuyThree");

router.post("/create", oneBuyThreeController.createOneBuyThree);
router.get("/:id", oneBuyThreeController.id);
router.get("/", oneBuyThreeController.getAllOneBuyThree);

module.exports = router;
