const router = require("express").Router();
const forYouController = require("../../Controllers/Today/forYouController");

router.post("/create", forYouController.createforYouToday);
router.get("/:id", forYouController.id);
router.get("/", forYouController.getAllForYouToday);

module.exports = router;
