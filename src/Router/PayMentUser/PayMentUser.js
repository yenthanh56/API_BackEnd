const router = require("express").Router();

const userPayMentController = require("../../Controllers/PayMentUser/PayMentUserController");

router.post("/create", userPayMentController.createOrder);
router.get("/", userPayMentController.getAllUserOrder);

module.exports = router;
