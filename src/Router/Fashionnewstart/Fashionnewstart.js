const router = require("express").Router();
const fashionNewStarController = require("../../Controllers/Fashionnewstar/FashionnewstarController");

router.post("/create", fashionNewStarController.createFashionNewStar);
router.get("/:id", fashionNewStarController.id);
router.get("/", fashionNewStarController.getAllFashionNewStar);

module.exports = router;
