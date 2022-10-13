const router = require("express").Router();
const userController = require("../Controllers/userController");
router.get("/", userController.getAllUser);

module.exports = router;
